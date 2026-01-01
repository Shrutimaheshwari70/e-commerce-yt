import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsLetterBox";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-16 py-10 space-y-24">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto text-center">
        <Title text1="CONTACT" text2="US" />
        <p className="mt-1 text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out to us for any queries, support,
          or job opportunities. 
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl p-6 ">
        {/* Image */}
        <div className="w-full">
          <img
            src={assets.contact}
            alt="Contact Us"
            className="w-full h-80 sm:h-96 md:h-[28rem] object-cover rounded-3xl shadow-xl border border-gray-200"
          />
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          {/* Store Info */}
          <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <p className="font-bold text-xl text-gray-900">Our Store</p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              54709, Williams Station <br />
              Suite 350, Washington, USA
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <p className="font-bold text-xl text-gray-900">Contact</p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Tel: <span className="text-orange-500">(415) 555-0130</span>{" "}
              <br />
              Email: <span className="text-orange-500">admin@forever.com</span>
            </p>
          </div>

          {/* Careers */}
          <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 space-y-3">
            <p className="font-bold text-xl text-gray-900">
              Careers at Forever
            </p>
            <p className="text-gray-600 leading-relaxed">
              Learn more about our team and current job openings.
            </p>
            <button className="mt-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-2xl shadow-lg transition transform hover:-translate-y-1">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto">
        <NewsletterBox />
      </div>
    </div>
  );
}

export default Contact;
