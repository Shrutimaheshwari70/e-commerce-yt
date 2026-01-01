import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-16 py-16 space-y-20">

      {/* HERO / ABOUT US */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={assets.about}
            alt="About Us"
            className="w-full h-96 object-cover rounded-3xl shadow-xl border"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 space-y-6">
          <Title text1="ABOUT" text2="US" />
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint officiis repudiandae
            rerum cupiditate numquam officia deserunt ea placeat error temporibus autem
            voluptate minus asperiores, veritatis ducimus quos. Enim, earum sapiente.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aliquam tempore
            nisi cupiditate quaerat, quo ea odit architecto necessitatibus harum nobis voluptas
            eaque, at vel.
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugiat, magni
              alias possimus assumenda nulla aut tempore vel numquam dolores.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto">
        <Title text1="WHY" text2="CHOOSE US" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Quantity Assurance</h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque quae maxime
              aspernatur adipisci vitae.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Convenience</h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque quae maxime
              aspernatur adipisci vitae.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Exceptional Customer Service</h4>
            <p className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque quae maxime
              aspernatur adipisci vitae.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
