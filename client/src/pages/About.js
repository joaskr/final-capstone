import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import MapComp from "../components/Map";
import Divided from "../components/Divided";
import Footer from "../components/Footer";
import TestimonialsItem from "../components/TestimonialsItem";
import jo from "../assets/photos/jo.jpg";
import kasia from "../assets/photos/kbadura.jpg";
import ania from "../assets/photos/ajarosz.jpg";

function About() {
  return (
    <div className="about">
      <Nav></Nav>
      <header className="about-header"></header>
      <Welcome
        header="who are we"
        text="Mom-and-Pop-Safe was started in 2020 by three women with a passion for IT. We are based in the heart of 
        Ashton, Idaho - the land of potatoes, boars and slow Internet connection. Let us shortly introduce ourselves:"
      ></Welcome>
      <div className="about-columns-container">
          <TestimonialsItem
            className="about-testimonial"
            photo={kasia}
            name="Kasia Badura"
            company="CEO"
            desc="vegan, a mother to an 8-year old. Passionate about zero waste, prefers tea over coffee and it has absolutely nothing to do with her interest in British literature."
          ></TestimonialsItem>
          <TestimonialsItem
            className="about-testimonial"
            photo={ania}
            name="Anna Jarosz"
            company="Security specialist"
            desc="knitter, struggling minimalist. Has one small but very long wiener dog. A big advocate of pineapple on pizza and nothing will convince her otherwise."
          ></TestimonialsItem>
          <TestimonialsItem
            className="about-testimonial"
            photo={jo}
            name="Joanna Skrzypczak"
            company="Front-end developer"
            desc="A mother of 3 inside cats, 3 outside cats and a very big dog. Loves chocolate, computer games and insane amounts of coffee."
          ></TestimonialsItem>
        </div>
      <MapComp></MapComp>
      <Divided
        class="divided-div right-divided"
        title="our story"
        text={<div>
          <p>All three of us used to work for big corporations and we have dealt with countless 
        cases of cyberattacks, which were possible to spot and prevent thanks to expensive 
        software, skilled professionals within the company and proper training.</p> 
        <br />
        <p>The idea of Mom-and-Pop-Safe was inspired by Kasia's parents, who run a small bookshop 
        and during the COVID-19 pandemic moved their sales online. For their business, and countless 
        similar companies, a data breach could mean bankruptcy - and without the means of multinational 
        corporations, the owners have a hard time ensuring their business is protected on all fronts. 
        While not all small business owners are lucky enough to have a security-specialist-daughter 
        who can help protect their family business from cyberattacks, we believe everyone has the right 
        to focus on providing goods and services to their customers without losing sleep 
        over the online security of their business.</p>
        </div>}
      ></Divided>
      <Divided
        class="divided-div left-divided"
        title="our mission"
        text={<div>
          <p>Enter Mom-and-Pop-Safe, a small business dedicated to making the Internet a safer place 
        for other small businesses. We offer a wide range of services from security software 
        and network protection to remote backup services, to Security Awareness trainings and consulting. </p>
        <br />
        <p>Our mission is to provide a comprehensive array of security measures tailored to 
        each of our clients' needs, which is why we <NavLink to="/">offer three different options</NavLink>, 
        designed to fit different types of businesses. And we calculate the costs based on the number 
        of devices - so that any family-run shop or a freshly founded start-up can afford our services.</p>
        
        <br />
        <p><b>The Internet is not only for the big players. Why should cybersecurity be any different?</b></p>
        </div>
        }
      >
      </Divided>
      <Footer class="footer about-footer"></Footer>
    </div>
  );
}
export default About;