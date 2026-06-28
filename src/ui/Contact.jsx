import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-designColor font-semibold tracking-wide">
        04. Languages
      </p>
      
      <p className="max-w-xl mx-auto text-center text-darkText">
       English – Intermediate  <br/>
French – Intermediate <br/>
Arabic – Native
      </p>
      <a href="mailto:noor.jsdivs@gmail.com">
        <p className="px-4 h-14 border border-designColor font-semibold mt-6 text-sm text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center">
          Chaaabamarryem@gmail.com
        </p>
      </a>
    </Container>
  );
};

export default Contact;
