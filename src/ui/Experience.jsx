import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workReactBd, setWorkReactBd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactBD = () => {
    setWorkReactBd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkReactBd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkReactBd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkReactBd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkReactBd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 gap-16"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* Button setup */}
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactBD}
            className={`${
              workReactBd
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Freelance
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Betterwa
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Satoripop
          </li>
          
          
        
        </ul>
        {/* Content */}
        {workReactBd && (
          <WorkCard
            jobTitle="Freelance"
            jobTag="Next, React, Node.js, and MongoDB"
            date="2022 - present"
           detailsOne="Continuously learned new technologies and frameworks through online courses, workshops, and hands-on projects."
            detailsTwo="Built a responsive MERN applications with OTP verification, JWT authentication, password reset, pagination, search, and filtering features. Integrated Redux Toolkit for state management and developed a complete back-end API using Node.js and Express."
            detailsThree="Converted Figma designs into fully functional, responsive websites using React functional components, Tailwind, and Shadcn."
             />
        )}
        {workGoogle && (
          <WorkCard
            jobTitle="Web Developer"
            jobTag="PHP, MySQL, HTML5, CSS3, jQuery, JavaScript, Bootstrap, WordPress, PrestaShop"
            date="2018 - 2022"
            detailsOne="Integrated over 100 HTML emails, landing pages, and web forms."
            detailsTwo="Developed mobile-first applications with fully responsive designs "
            detailsThree="Collaborated closely with the UX/UI team to implement designs and enhance overall user experience."
             />
        )}
        {workApple && (
          <WorkCard
            jobTitle="Web Integrator "
            jobTag="WordPress, PHP, MySQL, HTML, and CSS."
            date="2017"
            detailsOne="Built responsive, accessible, and high-performance user interfaces based on visual designs."
            detailsTwo="Applied best practices for responsive design and accessibility."
            detailsThree="Improved SEO and application performance."
            />
        )}
       
      </div>
    </Container>
  );
};

export default Experience;
