// "use client";

// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
//       <div className="flex justify-end p-5 pr-10 space-x-8">
//         <ScrollLink
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           spy={true}
//           className="hover:underline cursor-pointer text-lg font-medium"
//         >
//           Home
//         </ScrollLink>
//         <ScrollLink
//           to="about"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           spy={true}
//           className="hover:underline cursor-pointer text-lg font-medium"
//         >
//           About
//         </ScrollLink>
//         <ScrollLink
//           to="skills"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           spy={true}
//           className="hover:underline cursor-pointer text-lg font-medium"
//         >
//           Skills
//         </ScrollLink>
//         <ScrollLink
//           to="projects"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           spy={true}
//           className="hover:underline cursor-pointer text-lg font-medium"
//         >
//           Projects
//         </ScrollLink>
//         <ScrollLink
//           to="contact"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           spy={true}
//           className="hover:underline cursor-pointer text-lg font-medium"
//         >
//           Contact
//         </ScrollLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-end p-5 pr-10 space-x-8">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="hover:underline cursor-pointer text-lg font-medium"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="hover:underline cursor-pointer text-lg font-medium"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="hover:underline cursor-pointer text-lg font-medium"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="hover:underline cursor-pointer text-lg font-medium"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="hover:underline cursor-pointer text-lg font-medium"
        >
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
