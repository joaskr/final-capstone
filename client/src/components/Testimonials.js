import React from "react";
import Carousel from "react-elastic-carousel";
import TestimonialsItem from "./TestimonialsItem";
import parents from "../assets/photos/parents.jpg";
import ola from "../assets/photos/adolezik.jpg";
import domi from "../assets/photos/dponiedz.jpg";
import mat from "../assets/photos/mbugajsk.jpg";
import wiki from "../assets/photos/wstelmac.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const Testimonials = () => {
  return (
    <div className="testimonials">
      <Carousel breakPoints={breakPoints}>
      <TestimonialsItem
          photo={parents}
          name="Kasia's Parents"
          company="AshtonBooks"
          desc="Our daughter's company saved our business, and we wholehartedly recommend their services. Not because we raised her. A little bit because we raised her. But we did raise her well."
        ></TestimonialsItem>
        <TestimonialsItem
          photo={ola}
          name="Aleksandra Dolezik"
          company="SparrowSecurity"
          desc="A little birdie told us about this company and working with these guys has been the best decision, they pass any scrutiny with flying colors!"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={domi}
          name="Dominika Poniedziałek"
          company="Securea"
          desc="Amazing service, our data is secure and I can sleep soundly thanks to Mom-and-Pop-Safe!"
        ></TestimonialsItem>
        <TestimonialsItem
          photo={mat}
          name="Mateusz Bugajski"
          company="Pacmen Inc."
          desc="If it hadn't been for Mom-and-Pop-Safe, my business would probably have gone bankrupt by now and I would work in a factory. I don't want to work in a factory."
        ></TestimonialsItem>
        <TestimonialsItem
          photo={wiki}
          name="Wiktoria Stelmachniewicz"
          company="NukeGuards"
          desc="I could not be more happy with Mom-and-Pop-Safe's bombastic services, I am especially grateful to the guys for helping secure our website! 10/10 would recommend."
        ></TestimonialsItem>
      </Carousel>
    </div>
  );
};

export default Testimonials;
