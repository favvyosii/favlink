import { Bot, Code2, Cpu, MessageSquare, Sparkles, Database, Server, Braces, Workflow,Phone,Mail } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero/>
      {/* Hero section ends */}

      {/* About Section */}
      <About/>
    {/* About section ends */}

      {/* Tech Stack Section */}
      <Stack/>
      {/* Tech Stack ends */}

      {/* Services Section */}
      <Services/>
     {/* services ends */}

      {/* Contact Section */}
      <Contact/>
     {/* contacts ends */}
    
       
       
       <a
              href="mailto:contact@techfusionai.com"
              className="flex items-center justify-center p-4 bg-[#ffdde1] rounded-lg hover:bg-[#ffb8de] transition-colors"
            >
              <Mail className="w-6 h-6 text-[#642ca9] mr-2" />
              <span className="text-[#642ca9] font-medium">contact@techfusionai.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center p-4 bg-[#ffdde1] rounded-lg hover:bg-[#ffb8de] transition-colors"
            >
              <Phone className="w-6 h-6 text-[#642ca9] mr-2" />
              <span className="text-[#642ca9] font-medium">+1 (234) 567-890</span>
            </a>
      {/* Footer */}
      <Footer/>
      {/* Footer ends */}
    </main>
  );
}
