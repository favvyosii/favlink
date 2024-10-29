import React from 'react'

function About() {
  return (
    <div>
        <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#642ca9]">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Favlinksoftware is a leading software consultancy specializing in AI integration and helping buisness to bridge the gap between Traditional buisness practices to technology driven buisness practices  .
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
    </div>
  )
}

export default About
