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
              <h3 className="text-2xl font-bold">Complete Next.js eCommerce Platform , React 19 Admin & Node.js Backend</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md text-left">
              ✨ Key Features
             <br />
🚀 Next.js 16+ Storefront: Blazing-fast, SEO-optimized App Router web application with stunning Tailwind CSS, Shadcn UI, and Framer Motion animations.<br/>
⚡ Powerful Admin Dashboard: A Vite & React 19 powered management portal with dynamic charts for intuitive product, inventory, and order tracking.<br/>
🔒 Secure Node.js Backend: A highly scalable Express REST API coupled with MongoDB, utilizing strict Role-Based Access Control (JWT) separating Customers from Admins.<br/>
📱 Flawlessly Responsive: True mobile-first design ensuring a perfect shopping experience across mobile, tablet, and widescreen desktop devices.
             
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
              <h3 className="text-2xl font-bold">Responsive Modern UI/UX Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16 text-left">
            Developed a responsive and user-friendly web application using React and Tailwind CSS.<br/>
Built reusable and maintainable UI components following component-based architecture.<br/>
Implemented responsive layouts using Tailwind CSS utilities and mobile-first design principles.<br/>
Improved user experience through intuitive navigation, accessible interfaces, and optimized performance.<br/>
Ensured cross-browser compatibility and consistent design across different screen sizes. 
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React</li><li> Tailwind CSS</li><li> JavaScript</li> <li>Git</li>
            </ul>
            <ProjectsLInks weblink="https://uiuxreastaurant.netlify.app/" gitLink="https://uiuxreastaurant.netlify.app/"/>
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

🎨 Modern and clean UI<br/>
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
            <ProjectsLInks weblink="https://uiuxrealestate.netlify.app/" gitLink="" />
          </div>
        </div>
       
      </div>
    </Container>
  );
};

export default Project;
