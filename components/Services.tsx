import React from 'react'
import { Card } from "@/components/ui/card";
import { Bot, Code2, Cpu, MessageSquare, Sparkles, Database, Server, Braces, Workflow,Phone,Mail } from "lucide-react";

function Services() {
  return (
    <div>
       <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#642ca9]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Bot className="w-12 h-12 text-[#ff36ab] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#642ca9]">
                AI Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly integrate ChatGPT and Claude into your existing systems
                for enhanced automation and intelligence.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Code2 className="w-12 h-12 text-[#ff36ab] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#642ca9]">
                Custom Development
              </h3>
              <p className="text-gray-600">
                Build scalable solutions using Next.js, Python Flask, and Node.js
                tailored to your specific needs.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Cpu className="w-12 h-12 text-[#ff36ab] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#642ca9]">
                AI Consulting
              </h3>
              <p className="text-gray-600">
                Strategic guidance on implementing AI solutions to optimize your
                business processes.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
