import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import Columns from "../components/Columns";
import Offer from "../components/Offer";
import Video from "../components/Video";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header className="home-header">
        <Nav></Nav>
        <Header></Header>
      </header>
      <main>
        <Welcome
          header="welcome"
          text="
          At Mom-and-Pop-Safe, we understand that the Internet is not only for the big players. 
          Whether it's a multinational corporation or a small family business, any company can 
          become a target for cyberattacks. It is especially difficult to avoid for small businesses 
          who often times don't have the adequate resources and knowledge. 
          We believe that cybersecurity is crucial in running a business and we are here to help."
        ></Welcome>
        <Columns></Columns>
        <Offer id="offer"></Offer>
        <Video></Video>
        <Clients></Clients>
        <Testimonials></Testimonials>
      </main>
      <footer>
        <Footer class="footer home-footer"></Footer>
      </footer>
    </>
  );
}
export default Home;
