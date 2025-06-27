import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFiverr,
  SiUpwork,
} from "react-icons/si";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1a1f2b] via-[#252f42] to-[#1f2d3a] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">Muhammad Ameen</h1>
          <p className="text-lg md:text-xl text-slate-300">MERN Stack Developer | Frontend & Backend Engineer</p>
          <p className="text-sm md:text-base text-slate-400">BSCS Graduate – SZABIST Hyderabad</p>
          <div className="flex justify-center gap-5 text-2xl pt-4">
            <a href="https://github.com/Ameen-hp/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhammud-ameen123/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:devameen45@gmail.com"><FaEnvelope /></a>
            <a href="/resume.pdf" target="_blank"><FaFileAlt /></a>
            <a href="https://www.fiverr.com/yourprofile" target="_blank"><SiFiverr /></a>
            <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank"><SiUpwork /></a>
          </div>
        </header>

        {/* About Me */}
        <Card className="bg-[#2c3e50] rounded-3xl shadow-2xl">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-3xl font-semibold text-teal-300">About Me</h2>
            <p className="text-slate-200">
              I’m a MERN Stack Developer passionate about converting real-world challenges into practical web solutions. I’ve built full-stack apps combining frontend design with backend logic using React, Node, Express, and MongoDB.
            </p>
            <p className="text-slate-200">
              Coming from a background of self-learning and constant hustle — I’ve overcome technical, financial, and time constraints to learn and teach web development. Through freelancing and mentoring, I've helped others grow while pushing my own boundaries.
            </p>
            <p className="text-slate-200">
              I'm now expanding into Data Science — combining data-driven thinking with web tech to build smarter, AI-powered applications.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-[#2c3e50] rounded-3xl shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {[{
                icon: <FaReact />, label: "React.js"
              }, {
                icon: <FaNodeJs />, label: "Node.js"
              }, {
                icon: <SiMongodb />, label: "MongoDB"
              }, {
                icon: <FaDatabase />, label: "Express.js"
              }, {
                icon: <SiTailwindcss />, label: "Tailwind CSS"
              }, {
                label: "JavaScript (ES6+)"
              }, {
                label: "Git & GitHub"
              }, {
                label: "REST APIs"
              }, {
                label: "Firebase Auth"
              }, {
                label: "Responsive UI"
              }].map((skill, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#00c6ff] to-[#0072ff] py-2 rounded-xl text-white shadow-md"
                >
                  {skill.icon && <span className="inline-block mr-2 align-middle">{skill.icon}</span>}
                  {skill.label}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="bg-[#2c3e50] rounded-3xl shadow-2xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Projects</h2>
            {[{
              title: "SolarHub - Complete Solar Solutions",
              desc: "A robust MERN stack application for exploring solar packages, submitting repair requests, and enabling Elasticsearch-powered search to streamline user queries.",
            }, {
              title: "Max Bachat – Smart Product Chatbot",
              desc: "An interactive chatbot solution for guiding users through product discovery using categorized filters and conversational UX for e-commerce platforms.",
            }, {
              title: "TutorConnect – Learning Made Local",
              desc: "A neighborhood-based platform offering tutoring and Islamic learning for school-level students, with user-friendly registration and community events.",
            }, {
              title: "Ameen's Developer Portfolio",
              desc: "A self-built React + Tailwind web portfolio representing real-world projects, freelance work, and skill development journey for job and client showcase.",
            }].map((project, idx) => (
              <div key={idx} className="hover:bg-slate-700 p-4 rounded-lg transition duration-300">
                <h3 className="text-xl font-bold text-teal-300">{project.title}</h3>
                <p className="text-slate-200">{project.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-[#2c3e50] rounded-3xl shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Contact Me</h2>
            <p className="text-lg text-slate-200">📧 Email: <a href="mailto:devameen45@gmail.com" className="text-blue-400">devameen45@gmail.com</a></p>
            <p className="text-lg text-slate-200">📱 WhatsApp: <span className="text-blue-400">03160333276</span></p>
            <Button className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white" onClick={() => window.location.href = 'mailto:devameen45@gmail.com'}>
              Let’s Connect
            </Button>
          </CardContent>
        </Card>

        <footer className="text-center text-gray-400 mt-10 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Ameen — Designed with ❤️ and React.
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
