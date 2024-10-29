import React from 'react'
import { Bot, Code2, Cpu, MessageSquare, Sparkles, Database, Server, Braces, Workflow,Phone,Mail } from "lucide-react";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPython } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { SiFlask } from "react-icons/si";
function Stack() {
  return (
    <div>
      <section className="py-20 px-4 bg-[#ffdde1]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#642ca9]">
            OUR TECH STACK
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {/* <Braces  /> */}
                <TbBrandNextjs className="w-8 h-8 text-[#642ca9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#642ca9] text-center">Next.js</h3>
              <p className="text-sm text-center text-gray-600 mt-2">Modern Web Framework</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {/* <Server  /> */}
                <BiLogoPython className="w-8 h-8 text-[#642ca9]"/>
              </div>
              <h3 className="text-lg font-semibold text-[#642ca9] text-center">Python</h3>
              <p className="text-sm text-center text-gray-600 mt-2">Backend Development</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {/* <Bot /> */}
                <FaBrain className="w-8 h-8 text-[#642ca9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#642ca9] text-center">ChatGPT</h3>
              <p className="text-sm text-center text-gray-600 mt-2">AI Integration</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <FaBrain className="w-8 h-8 text-[#642ca9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#642ca9] text-center">Anthropic</h3>
              <p className="text-sm text-center text-gray-600 mt-2">Advanced AI Solutions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {/* <Database /> */}
                <TbBrandNodejs className="w-8 h-8 text-[#642ca9]" />

              </div>
              <h3 className="text-lg font-semibold text-[#642ca9] text-center">Node.js</h3>
              <p className="text-sm text-center text-gray-600 mt-2">Runtime Environment</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {/* <Database /> */}
                <SiFlask className="w-8 h-8 text-[#642ca9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#642ca9] text-center">Node.js</h3>
              <p className="text-sm text-center text-gray-600 mt-2">Runtime Environment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stack
