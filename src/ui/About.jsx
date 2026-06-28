import { profileImg } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";

const   About = () => {
  const textArray = [
    { title: "JavaScript (ES6+)" },
    { title: "Next js" },
    { title: "React js" },
    { title: "Node js" },
    { title: "TypeScript" },
    { title: "Express js" },
    { title: "MongoDB" },
    { title: "TailwindCSS" },
  ];
  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8 max-w-5xl mx-auto ">
      <SectionTitle titleNo="01" title="Education" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
            <span className="text-designColor">2013 – 2016:{" "} </span>
            Computer Engineering — EPI Sousse 
            </p>
            <p>
            <span className="text-designColor">2007–2010:{" "} </span>
            Senior Computer Technician — ISITCom Sousse  
            </p>
            <p>
            <span className="text-designColor">2006–2007:{" "} </span>
            Mathematics Bachelor — Lycée El Jem 
            </p>


          
          
          <p>Here are a few technologies I have been working with recently:</p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <h2
                key={item?.title}
                
                className="flex items-center gap-2 hover:text-white/80 duration-200 group"
              >
                <FaCode className="text-designColor/80 group-hover:text-designColor duration-200" />{" "}
                {item?.title}
              </h2>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg}
                alt="profileImg"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Container>
  );
};

export default About;
