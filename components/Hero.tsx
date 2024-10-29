import React from 'react'
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div>
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
    </div>
  )
}

export default Hero
