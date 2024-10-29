import { Bot, Code2, Cpu, MessageSquare, Sparkles } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#642ca9] via-[#ff36ab] to-[#ff74d4]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with AI
          </h1>
          <p className="text-xl text-[#ffdde1] mb-8 max-w-2xl mx-auto">
            We integrate cutting-edge AI solutions to revolutionize your business processes
            and drive innovation.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#642ca9] hover:bg-[#ffdde1]"
            asChild
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#642ca9]">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                TechFusion AI is a leading software consultancy specializing in AI integration.
                We bridge the gap between traditional business operations and cutting-edge
                artificial intelligence solutions. Our team of experts combines deep technical
                knowledge with business acumen to deliver transformative results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#ffdde1] p-6 rounded-lg text-center">
                <h3 className="font-bold text-[#642ca9] text-lg mb-2">50+</h3>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div className="bg-[#ffb8de] p-6 rounded-lg text-center">
                <h3 className="font-bold text-[#642ca9] text-lg mb-2">98%</h3>
                <p className="text-gray-700">Client Satisfaction</p>
              </div>
              <div className="bg-[#ff74d4] p-6 rounded-lg text-center">
                <h3 className="font-bold text-white text-lg mb-2">24/7</h3>
                <p className="text-white">Support</p>
              </div>
              <div className="bg-[#642ca9] p-6 rounded-lg text-center">
                <h3 className="font-bold text-white text-lg mb-2">15+</h3>
                <p className="text-white">Expert Developers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#642ca9]">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#642ca9] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 TechFusion AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}