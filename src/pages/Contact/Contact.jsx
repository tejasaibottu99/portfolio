// Contact.jsx
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contactOptions = [
    {
      label: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/satwika-eluguri-972a2b301/", // <-- update this
      color: "from-blue-500 to-blue-700",
    },
    {
      label: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Satwika0209", // <-- update this
      color: "from-gray-700 to-gray-900",
    },
    {
      label: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:elugurisatwika@gmail.com", // <-- update this
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#04081A] text-white px-6 py-20">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Let's Connect
        </h1>
        <p className="text-gray-400 mb-10 text-lg">
          Reach out to collaborate, ask questions, or just say hello!
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${option.color} p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center space-y-3`}
            >
              <div>{option.icon}</div>
              <span className="font-semibold">{option.label}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
