import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-12">Feel free to contact me for any inquiries or collaborations!</p>
          <div className="max-w-xl mx-auto space-y-8">
            {/* Email */}
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <a
                  href="mailto:inurin32@gmail.com"
                  className="text-blue-600 hover:underline"
              >
                inurin32@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <span>+6017 497 6128</span>
            </div>
            {/* Location */}
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <span>Alor Setar, Kedah</span>
            </div>
          </div>
        </div>
      </section>
  );
}
