import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiTensorflow, SiPytorch, SiEclipseide,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { FaJava } from 'react-icons/fa';
import { SiCplusplus, SiDotnet,SiMysql } from 'react-icons/si';
import { Server} from "lucide-react";
import { MdNetworkCheck, MdMemory, MdAutoGraph } from "react-icons/md";
import { GiTreeGrowth } from "react-icons/gi";
import { PiGraphBold } from "react-icons/pi";
import { Brain, Network, Settings } from "lucide-react";
import { FaChartBar } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
  {
    name: "Python",
    icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
  },
  {
    name: "Java",
    icon: <FaJava className="w-4 h-4 text-[#007396]" />,
  },
  {
    name: "C++",
    icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" />,
  },
  {
    name: ".NET",
    icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" />,
  },
]

    },
    {
      icon: Database,
      title: "Database & Data Handling",
      color: "text-purple-400",
      skills: [
  {
    name: "SQL",
    icon: <SiMysql className="w-4 h-4 text-[#00758F]" />,
  },
  {
    name: "DBMS",
    icon: <Database className="w-4 h-4 text-[#4B5563]" />,
  },
]

    },
    {
  icon: Brain,
  title: "AI & Data Science",
  color: "text-indigo-400",
  skills: [
    { name: "Machine Learning", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
    { name: "Deep Learning", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
    { name: "Data Analysis", icon: <FaChartBar className="w-4 h-4 text-[#4A90E2]" /> },
  ],
},
{
  icon: Network,
  title: "Networking & OS",
  color: "text-red-400",
  skills: [
    { name: "Computer Networks", icon: <MdNetworkCheck className="w-4 h-4 text-[#1E88E5]" /> },
    { name: "Operating System", icon: <MdMemory className="w-4 h-4 text-[#607D8B]" /> },
  ],
},
{
  icon: Settings,
  title: "Tools & Platforms",
  color: "text-teal-400",
  skills: [
    { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },

    { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
    { name: "Microsoft Visual Studio", icon: <FaMicrosoft className="w-4 h-4 text-[#5C2D91]" /> },
    { name: "Eclipse", icon: <SiEclipseide className="w-4 h-4 text-[#2C2255]" /> },
  ],
},

  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
