import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { ecommerce, rest, noorShop,realstate } from "../assets";
import ProjectsLInks from "./ProjectsLInks";

const Project = () => {
  return (
    <Container id="project" className="py-24 max-w-5xl mx-auto ">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://nouriin-web.vercel.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={ecommerce}
              alt="ecommerce"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Full Stack eCommerce Platform</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md text-left">
              
Developed a scalable full-stack eCommerce platform using Next.js, React, Express.js, and MongoDB.<br/>
Implemented JWT authentication and role-based authorization.<br/>
Created an admin dashboard for products, inventory, and order management.<br/>
Designed a responsive storefront using Tailwind CSS and Shadcn UI.<br/>
Integrated REST APIs and optimized performance.     
              <span className="text-textGreen"></span> 
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>React</li>
              <li>Node</li>
              <li>express</li>
              <li>zuztand</li>
              <li>mongoose</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectsLInks weblink="https://nouriin-web.vercel.app/" gitLink="https://github.com/MaryemChaaba/nouriin"/>
          </div>
        </div>
        {/* Project Two */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://uiuxreastaurant.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={rest}
              alt="amazonImage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Responsive UI/UX Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16 text-left">
            Designed and developed a modern responsive interface using React and Tailwind CSS.<br/>
Built reusable components following a scalable architecture.<br/>
Optimized accessibility and usability.<br/>
Applied responsive design principles for desktop, tablet, and mobile devices.<br/>
Improved page performance and loading speed.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React</li><li> Tailwind CSS</li><li> JavaScript</li> <li>Git</li>
            </ul>
            <ProjectsLInks weblink="https://uiuxreastaurant.netlify.app/" gitLink="https://github.com/MaryemChaaba/restaurant"/>
          </div>
        </div>



        {/* Project three */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="https://uiuxrealestate.netlify.app/"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={realstate}
              alt="amazonImage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">React Responsive Real Estate Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16 text-left">
            A responsive React application that emphasizes clean design, usability, and accessibility. The project features reusable components, smooth navigation, responsive layouts, and modern UI patterns built with Tailwind CSS.
<br/>
Features<br/>

📱 Fully responsive design<br/>
⚡ Fast rendering with React<br/>
🧩 Reusable component architecture<br/>
♿ Accessible interface<br/>
✨ Smooth transitions and hover effects<br/>
📐 Mobile-first design using Tailwind CSS
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React</li><li> Tailwind CSS</li><li> JavaScript</li> <li>Git</li>
            </ul>
            <ProjectsLInks weblink="https://uiuxrealestate.netlify.app/" gitLink="https://github.com/MaryemChaaba/realestate" />
          </div>
        </div>
       
      </div>
    </Container>
  );
};

export default Project;
