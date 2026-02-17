import { motion, useScroll } from "framer-motion";
import { FaFacebookF, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef, useState } from "react";

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

  // Projects data and state for gallery viewer
  const projects = [
    { id: 1, src: require("./assets/proj1.png"), link: "https://www.facebook.com/photo.php?fbid=249283960666021&set=pb.100069355094389.-2207520000&type=3" },
    { id: 2, src: require("./assets/proj2.png"), link: "https://www.facebook.com/photo.php?fbid=266125882315162&set=pb.100069355094389.-2207520000&type=3" },
    { id: 3, src: require("./assets/proj3.jpg"), link: "https://www.facebook.com/photo.php?fbid=674109891577508&set=pb.100069355094389.-2207520000&type=3" },
    { id: 4, src: require("./assets/proj4.jpg"), link: "https://www.facebook.com/photo.php?fbid=738599171795246&set=pb.100069355094389.-2207520000&type=3" },
    { id: 5, src: require("./assets/proj5.png"), link: "https://www.facebook.com/share/p/1CLTdRUTUK/" },
  ];

  const [projIndex, setProjIndex] = useState(0);

  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur p-4 flex justify-center items-center z-50 shadow-md">
        <div className="absolute left-6">
          <a href="#about" className="block">
            <img src={require("./assets/navbarlogo.png")} alt="Logo" className="w-10 h-10 object-contain" />
          </a>
        </div>

        {/* Centered Links */}
        <ul className="flex space-x-10 justify-center items-center">
          {["About", "Portfolio", "Experience", "Skills"].map((item, i) => (
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


      {/* Hero / About Section */}
      <section
        id="about"
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
            I’m a versatile digital professional with experience in front-end web development and content creation. I specialize in building interactive and responsive web applications, while also managing engaging digital communities and producing creative content.
            My passion lies in combining technical expertise with effective communication, delivering seamless online experiences, and exploring emerging technologies such as blockchain and Web3. I thrive in collaborative environments where I can contribute both coding skills and digital strategy to achieve impactful results.
          </motion.p>

          <a
            href="#contact"
            className="px-6 py-3 bg-primary rounded hover:bg-primary/90 transition font-semibold inline-block"
          >
            Let's Connect
          </a>
        </div>
      </section>

      
      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen px-6 py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-16">My Portfolio</h2>

        {/* Social Media Milestones */}
        <div className="mb-20">
          {/* Header Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-semibold text-center mb-8 text-primary">Peak Year Stats</h3>
            <motion.img
              src={require("./assets/peakstats.jpg")}
              alt="Social Media Stats"
              className="w-full h-auto rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Peak Year Stats Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-3xl font-semibold text-center mb-8 text-primary">Social Media Milestones</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gray-800 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-4xl font-bold text-primary mb-2">100K+</p>
                <p className="text-gray-300">Total Followers</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-4xl font-bold text-primary mb-2">2M+</p>
                <p className="text-gray-300">Peak Engagement Reach</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-4xl font-bold text-primary mb-2">100+</p>
                <p className="text-gray-300">Contents Created</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Video Content Carousel */}
        <div className="mb-20">
          
          <div className="relative overflow-hidden bg-gray-800 rounded-xl py-8">
            {/* Left Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            {/* Right Gradient Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

            <motion.div
              className="flex gap-6 px-6"
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Original items */}
              {[{
                id: 1,
                image: require("./assets/content1.png"),
                title: "Content 1",
                link: "https://www.facebook.com/reel/315914040446036"
              }, {
                id: 2,
                image: require("./assets/content2.png"),
                title: "Content 2",
                link: "https://www.facebook.com/reel/186880080211109"
              }, {
                id: 3,
                image: require("./assets/content3.png"),
                title: "Content 3",
                link: "https://www.facebook.com/reel/1182050236499513"
              }, {
                id: 4,
                image: require("./assets/content4.png"),
                title: "Content 4",
                link: "https://www.facebook.com/reel/440629717508929"
              }, {
                id: 5,
                image: require("./assets/content5.png"),
                title: "Content 5",
                link: "https://www.facebook.com/reel/1584561099063429"
              }].map((video) => (
                <div key={`video-${video.id}-1`} className="flex-shrink-0">
                  <a href={video.link} className="group block">
                    <div className="relative rounded-lg overflow-hidden">
                      <img 
                        src={video.image} 
                        alt={video.title}
                        className="w-80 h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              {/* Duplicate items for seamless loop */}
              {[{
                id: 1,
                image: require("./assets/content1.png"),
                title: "Content 1",
                link: "https://www.facebook.com/reel/315914040446036"
              }, {
                id: 2,
                image: require("./assets/content2.png"),
                title: "Content 2",
                link: "https://www.facebook.com/reel/186880080211109"
              }, {
                id: 3,
                image: require("./assets/content3.png"),
                title: "Content 3",
                link: "https://www.facebook.com/reel/1182050236499513"
              }, {
                id: 4,
                image: require("./assets/content4.png"),
                title: "Content 4",
                link: "https://www.facebook.com/reel/440629717508929"
              }, {
                id: 5,
                image: require("./assets/content5.png"),
                title: "Content 5",
                link: "https://www.facebook.com/reel/1584561099063429"
              }].map((video) => (
                <div key={`video-${video.id}-2`} className="flex-shrink-0">
                  <a href={video.link} className="group block">
                    <div className="relative rounded-lg overflow-hidden">
                      <img 
                        src={video.image} 
                        alt={video.title}
                        className="w-80 h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Project Gallery */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8 text-primary">Featured Projects</h3>

          {/* responsive gallery with a main viewer and thumbnails + Next button */}
          <div className="max-w-6xl mx-auto mb-12 px-4">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-2/3 relative">
                <a href={projects[projIndex].link} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg group">
                  <motion.img
                    key={projIndex}
                    src={projects[projIndex].src}
                    alt={`project-${projects[projIndex].id}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.32 }}
                    className="w-full h-auto rounded-lg shadow-lg object-contain transition-opacity duration-300 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/20 pointer-events-none rounded-lg"></div>
                </a>

                <button
                  onClick={() => setProjIndex((projIndex + 1) % projects.length)}
                  aria-label="Next project"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-gray-900 p-2 rounded-full shadow-md hover:scale-105 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="w-full md:w-1/3 grid grid-cols-3 md:grid-cols-1 gap-3">
                {projects.map((p, idx) => (
                  <a
                    key={p.id}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      setProjIndex(idx);
                    }}
                    className="block h-24 md:h-28 lg:h-32 overflow-hidden rounded-md relative group"
                  >
                    <img
                      src={p.src}
                      alt={`thumb-${p.id}`}
                      className="w-full h-full object-cover rounded-md shadow-sm transition-opacity duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/20 rounded-md pointer-events-none"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
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
