import glob
import os
import sqlite3

class LogIngestion:
    """This class imports log file contents into a SQLite DB"""

    def __init__(self, log_directory):
        self.log_directory = log_directory
        self.db_path = os.path.join(self.log_directory, 'ids.db')

    def log_files(self):
        return glob.glob(os.path.join(self.log_directory, '*.csv'))

    def create_db(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        cursor.execute("CREATE TABLE logs (file varchar255, no int, time text, source varchar15, destination varchar15, protocol varchar5, length int, source_port int, dest_port int, host varchar15, server varchar15, source_mac varchar17, dest_mac varchar17, info text)")
        conn.commit()
        conn.close()

    def file_contents(self, file_path):
        file = open(file_path, "r")
        contents = file.read().split("\n")
        file.close()
        sanitized_contents = [item.replace("\"","") for item in contents]
        return sanitized_contents[1:-1]

    def ingest_file(self, filename, data,):
        sql = ("INSERT INTO logs VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)")
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()

        for line in data:
            fields = line.split(",")
            fields.insert(0,filename)
            if len(fields) != 14:
                continue
            cursor.execute(sql, fields)
        conn.commit()
        conn.close()
        

    def create_arp_view(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        sql2=("CREATE VIEW arp_poison (File, Time, Source_Mac, Info) AS SELECT file, time, source_mac, info FROM logs WHERE info LIKE 'ARP Announcement for %';")
        cursor.execute(sql2)
        conn.commit()
        conn.close()

    def create_zipfile_view(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        sql3=("CREATE VIEW zip_threat (File, Time, Source, Source_Mac, Info) AS SELECT file, time, source, source_mac, info FROM logs WHERE info LIKE 'GET%.zip%';")
        cursor.execute(sql3)
        conn.commit()
        conn.close()

    def create_synflood_view(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        sql4=("CREATE VIEW syn_flood (File, Count, Time, Source, Source_Mac, Info) AS SELECT file, count(*), time, source, source_mac, info FROM logs WHERE info LIKE '%SYN%' group by source_mac, time having count(*) > 5;")
        cursor.execute(sql4)
        conn.commit()
        conn.close()



ingest = LogIngestion("C:/Users/PC/Desktop/app/final-capstone/src/python/log_files")
ingest.create_db()
ingest.create_arp_view()
ingest.create_zipfile_view()
ingest.create_synflood_view()
for log_file in ingest.log_files():
    data = ingest.file_contents(log_file)
    basename = os.path.basename(log_file)
    ingest.ingest_file(basename, data)
    os.rename(log_file, log_file + '.old')
