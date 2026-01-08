import { motion, useScroll } from "framer-motion";
import { FaFacebookF, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";

export default function PortfolioSite() {
  const imageRef = useRef(null);

  // Cursor-based 3D rotation for holographic image
  const handleMouseMove = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    el.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    const el = imageRef.current;
    el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  // Scroll progress
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur p-4 flex justify-center items-center z-50 shadow-md">
        <div className="absolute left-6 text-xl font-bold tracking-wide">
          <span className="text-primary">L</span>
          <span className="text-white">a</span>
          <span className="text-white">u</span>
        </div>

        {/* Centered Links */}
        <ul className="flex space-x-10 justify-center items-center">
          {["About", "Experience", "Skills"].map((item, i) => (
            <li key={i} className="group relative">
              <a
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-200 hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="absolute right-6">
          <a
            href="mailto:pacuriblau@gmail.com"
            className="px-4 py-2 bg-primary text-gray-900 rounded hover:bg-primary/90 transition font-semibold"
          >
            Contact
          </a>
        </div>
      </nav>



      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 w-full z-50 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-[0_0_10px_3px_rgba(253,199,35,0.5)]"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />


      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 gap-12"
      >
        {/* Image */}
        <div className="relative flex-shrink-0 w-full max-w-sm md:max-w-md">
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 blur-2xl opacity-60"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.img
            ref={imageRef}
            src={require("./assets/pic1.png")}
            alt="Laurence Pacurib"
            className="relative w-full h-auto rounded-2xl shadow-lg object-contain"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-primary">Laurence Pacurib</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I’m a versatile digital professional specializing in front-end development and content creation/management.
            I build responsive web apps, create engaging digital experiences, and explore emerging technologies like blockchain and Web3.
          </motion.p>

          <a
            href="#contact"
            className="px-6 py-3 bg-primary rounded hover:bg-primary/90 transition font-semibold inline-block"
          >
            Let's Connect
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-800 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
          I’m a versatile digital professional with experience in front-end web development and content creation. I specialize in building interactive and responsive web applications, while also managing engaging digital communities and producing creative content.
          My passion lies in combining technical expertise with effective communication, delivering seamless online experiences, and exploring emerging technologies such as blockchain and Web3. I thrive in collaborative environments where I can contribute both coding skills and digital strategy to achieve impactful results.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen px-6 py-20 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="flex flex-col gap-8">
          {[{
            position: "Digital / Media Creator",
            company: "Social Media Creative",
            date: "2021 - 2024",
            info: "Produced, managed, and optimized content for social media platforms including Facebook, X, and YouTube. Focused on audience engagement and brand storytelling.",
            skills: ["Content Creation", "Video Editing", "Social Media Management", "Copywriting"],
          }, {
            position: "Front-End Web Developer",
            company: "Visvis Travel and Tours",
            date: "2023",
            info: "Develops engaging and responsive web experiences, translating designs into functional and efficient web applications.",
            skills: ["HTML", "CSS", "JavaScript", "PHP", "Responsive and Functional Design"],
          },].map((exp, i) => (
            <motion.div
              key={i}
              className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold">{exp.position}</h3>
                <span className="text-gray-400 text-sm">{exp.date}</span>
              </div>

              <p className="text-primary font-medium mb-2">{exp.company}</p>
              <p className="text-gray-300 mb-4 text-sm">{exp.info}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-600 text-sm rounded font-semibold hover:bg-primary cursor-default transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education & Skills Section */}
      <section id="skills" className="min-h-screen px-6 pt-20 pb-12 bg-gray-800 text-white relative">
        <h2 className="text-4xl font-bold text-center mb-12">Education & Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="relative pl-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>

            <div className="absolute left-5 top-6 bottom-0 w-[3px] bg-gradient-to-b from-primary/90 via-yellow-400/80 to-transparent rounded-full animate-pulse-slow"></div>

            {[{
              degree: "Bachelor of Science in Computer Science Major in Application Development",
              school: "University of Makati",
              date: "2018 - 2023",
            }, {
              degree: "Technical Vocational Course in Computer Programming",
              school: "University of Makati",
              date: "2016 - 2018",
            }].map((edu, i) => (
              <motion.div
                key={i}
                className="relative mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <span className="absolute left-[-16px] top-[10px] w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_3px_rgba(253,199,35,0.6)] animate-pulse"></span>

                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-primary font-medium">{edu.school}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Skills</h3>

            <motion.div
              className="bg-gray-700 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-4">Technical Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React", "Tailwind CSS", "JavaScript", "HTML", "CSS",
                  "Node.js", "Git & GitHub", "Responsive Design", "REST APIs", "SQL",
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gray-600 text-sm rounded-lg font-semibold hover:bg-primary hover:text-gray-900 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            {/* Digital & Interpersonal Skills */}
            <motion.div
              className="bg-gray-700 rounded-xl p-6 shadow-lg mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-4">Digital & Interpersonal Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Content Creation",
                  "Social Media Management",
                  "Copywriting",
                  "Team Collaboration",
                  "Communication",
                  "Problem Solving",
                  "Time Management",
                  "Customer Engagement"
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gray-600 text-sm rounded-lg font-semibold hover:bg-primary hover:text-gray-900 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            {/* Blockchain & Web3 Skills */}
            <motion.div
              className="bg-gray-700 rounded-xl p-6 shadow-lg mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-4">Blockchain & Web3 Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "DApp QA",
                  "Community Management",
                  "Blockchain Auditing",
                  "DeFi Concepts"
                ].map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gray-600 text-sm rounded-lg font-semibold hover:bg-primary hover:text-gray-900 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-12 pb-20 bg-gray-800"
      >
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          I’m open to opportunities, projects, collaborations, or just a friendly chat. Reach out and let’s connect!
        </p>
        <div className="flex space-x-6 text-2xl">
          <a href="mailto:pacuriblau@gmail.com" className="hover:text-primary"><FaEnvelope /></a>
           <a href="https://facebook.com/laupacs" className="hover:text-primary"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/laurence-ian-pacurib-b17a91160/" className="hover:text-primary"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-gray-900 border-t border-gray-700">
        © {new Date().getFullYear()} Lau. All rights reserved.
      </footer>
    </div>
  );
}
