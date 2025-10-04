// import { motion } from "framer-motion";
// import { useState } from "react";
// import CountUp from "react-countup";
// import {
//   FaCss3,
//   FaFigma,
//   FaHtml5,
//   FaJs,
//   FaReact,
//   FaWordpress,
// } from "react-icons/fa";
// import {
//   SiAdobephotoshop,
//   SiAdobexd,
//   SiFramer,
//   SiNextdotjs,
// } from "react-icons/si";

// import Avatar from "../../components/Avatar";
// import Circles from "../../components/Circles";
// import { fadeIn } from "../../variants";

// //  data
// export const aboutData = [
//   {
//     title: "skills",
//     info: [
//       {
//         title: "Web Development",
//         icons: [
//           FaHtml5,
//           FaCss3,
//           FaJs,
//           FaReact,
//           SiNextdotjs,
//           SiFramer,
//           FaWordpress,
//         ],
//       },
//       {
//         title: "UI/UX Design",
//         icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
//       },
//     ],
//   },
//   {
//     title: "awards",
//     info: [
//       { title: "Webby Awards - Honoree", stage: "2011 - 2012" },
//       { title: "Adobe Design Achievement Awards - Finalist", stage: "2009 - 2010" },
//     ],
//   },
//   {
//     title: "experience",
//     info: [
//       { title: "UX/UI Designer - XYZ Company", stage: "2012 - 2023" },
//       { title: "Web Developer - ABC Agency", stage: "2010 - 2012" },
//       { title: "Intern - DEF Corporation", stage: "2008 - 2010" },
//     ],
//   },
//   {
//     title: "credentials",
//     info: [
//       { title: "Web Development - ABC University, LA, CA", stage: "2011" },
//       { title: "Computer Science Diploma - AV Technical Institute", stage: "2009" },
//       { title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA", stage: "2006" },
//     ],
//   },
// ];

// const About = () => {
//   const [index, setIndex] = useState(0);

//   return (
//     <div className="w-full min-h-screen bg-primary/30 py-32 text-center xl:text-left relative">
//       <Circles />

//       {/* avatar img (background style) */}
//       <motion.div
//         variants={fadeIn("right", 0.2)}
//         initial="hidden"
//         animate="show"
//         exit="hidden"
//         className="hidden xl:flex absolute bottom-0 left-0 max-w-[380px] opacity-70 pointer-events-none"
//       >
//         <Avatar />
//       </motion.div>

//       {/* content */}
//       <div className="container mx-auto px-4 flex flex-col items-center xl:flex-row gap-x-6 pt-24 xl:pt-10 pb-32 relative z-10">
//         {/* text */}
//         <div className="flex-1 flex flex-col justify-center">
//           <motion.h2
//             variants={fadeIn("right", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="text-3xl md:text-5xl xl:text-4xl font-bold leading-snug max-w-[720px] mb-6 xl:mb-8 break-words"
//           >
//             We are <span className="text-accent">NextGen Software</span>, transforming
//             ideas into impactful digital solutions.
//           </motion.h2>

//           <motion.p
//             variants={fadeIn("right", 0.4)}
//             initial="hidden"
//             animate="show"
//             className="max-w-[720px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0"
//           >
//             Our team designs and delivers innovative, reliable, and scalable
//             technology solutions for businesses and individuals. With a focus on
//             quality and long-term partnerships, we take products from concept to
//             launch and beyond.
//           </motion.p>

//           {/* Mission & Vision */}
//           <motion.div
//             variants={fadeIn("right", 0.5)}
//             initial="hidden"
//             animate="show"
//             className="grid gap-6 max-w-[900px] mx-auto xl:mx-0 mb-10 xl:mb-12"
//           >
//             <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left backdrop-blur-sm">
//               <h3 className="text-xl font-semibold mb-2">Mission</h3>
//               <p className="text-white/80 leading-relaxed">
//                 “To design and deliver innovative, reliable, and scalable technology
//                 solutions that empower businesses and individuals to thrive in a
//                 digital-first world.”
//               </p>
//             </div>
//             {/* <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left backdrop-blur-sm">
//               <h3 className="text-xl font-semibold mb-2">Vision</h3>
//               <p className="text-white/80 leading-relaxed">
//                 “To become a leading software house from Egypt with global reach,
//                 recognized for creativity, excellence, and transforming ideas into
//                 impactful digital solutions.”
//               </p>
//             </div> */}
//           </motion.div>

    
//         </div>
//         <div className="flex-1 flex flex-col justify-center">
//         {/* info */}
//         <motion.div
//           variants={fadeIn("left", 0.4)}
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="flex flex-col w-full xl:max-w-[48%] min-h-[520px] xl:min-h-[360px]"
//         >
//           <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
//             {aboutData.map((item, itemI) => (
//               <div
//                 key={itemI}
//                 className={`${
//                   index === itemI &&
//                   "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
//                 } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
//                 onClick={() => setIndex(itemI)}
//               >
//                 {item.title}
//               </div>
//             ))}
//           </div>

//           <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-3 items-center xl:items-start max-w-max">
//             {aboutData[index].info.map((item, itemI) => (
//               <div
//                 key={itemI}
//                 className="flex-1 flex flex-col md:flex-row max-w-max gap-x-0.2 items-center text-center text-white/60"
//               >
//                 {/* title */}
//                 <div className="font-light mb-2 md:mb-0">{item.title}</div>
//                 <div className="hidden md:flex">-</div>
//                 <div>{item.stage}</div>

//                 <div className="flex gap-x-3">
//                   {/* icons */}
//                   {item.icons?.map((Icon, iconI) => (
//                     <div key={iconI} className="text-2xl text-white">
//                       <Icon />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//               {/* counters */}
//               <motion.div
//             variants={fadeIn("right", 0.6)}
//             initial="hidden"
//             animate="show"
//             className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
//           >
//             <div className="flex flex-1 xl:gap-x-6">
//               {/* experience */}
//               <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={10} duration={5} />
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Years of experience.
//                 </div>
//               </div>

//               {/* clients */}
//               <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={250} duration={5} />
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Satisfied clients.
//                 </div>
//               </div>

//               {/* projects */}
//               <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={650} duration={5} />
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Finished projects.
//                 </div>
//               </div>

//               {/* awards */}
//               <div className="relative flex-1">
//                 <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
//                   <CountUp start={0} end={8} duration={5} />
//                 </div>
//                 <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
//                   Winning awards.
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaPython,
  FaNodeJs,
  // I want to add Springboot icon
  
  
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiAngular,
  SiDocker,
  SiPostgresql,
  SiGooglecloud,
  SiKubernetes,
  SiAmazonaws,
  SiVercel,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
// I want to add Springboot icon not inc

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiAngular,
         
          SiNextdotjs,
          SiFramer,
          SiPostgresql,

          
          FaPython,
          FaNodeJs,
          FaWordpress,
          SiDocker,
          
          SiGooglecloud,
          SiAmazonaws,
        
          
          // <Ai></Ai>,
          
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Clutch B2B Awards - Featured",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Product Hunt Golden Kitty Awards - Nominee",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "experience",
  //   info: [
  //     {
  //       title: "Founder & CTO - NextGen Software",
  //       stage: "2012 - 2023",
  //     },
  //     {
  //       title: "Full-Stack Engineer - SaaS Studio",
  //       stage: "2010 - 2012",
  //     },
  //     {
  //       title: "Freelance Developer - Remote Clients",
  //       stage: "2008 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "BSc Computer Science - Cairo University, EG",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Cloud Architecture Diploma - Nile Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified ScrumMaster - Agile Alliance, San Francisco, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        //  xl:flex 
        className="hidden absolute bottom-0 -left-[370px] z-10" 
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[35px] mb-4 xl:h2 xl:mb-0"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
       Our Vision is to design and deliver innovative, reliable, and scalable technology
                 solutions that empower businesses and individuals to thrive in a
                 digital-first world.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex flex-col">
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.slice(0, 6).map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                  {item.icons && item.icons.length > 6 && (
                    <div className="flex gap-x-4 mt-2">
                      {item.icons.slice(6).map((Icon, iconI) => (
                        <div key={`more-${iconI}`} className="text-2xl text-white">
                          <Icon />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;