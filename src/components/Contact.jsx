import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Immersive Light Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-50/80 rounded-full blur-[120px] pointer-events-none translate-y-1/3"></div>
      
      {/* Subtle modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <span className="w-2 h-2 rounded-full bg-primary-600 shadow-[0_0_10px_rgba(38,99,178,0.3)]"></span>
            <h2 className="text-inherit">Get In Touch</h2>
          </motion.div>
          <motion.h3
            className="section-h3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let’s Build <span className="text-primary-600">Something Together</span>
          </motion.h3>
          <motion.p
            className="text-slate-600 mt-4 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tell us about your business and what you need. We’ll respond within 24 hours with a clear plan for how we can support you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Bento Grid Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-5 w-full">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-3xl hover:border-primary-200 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Email Us</p>
                <a href="mailto:Contact@mannosolutions.com" className="font-bold text-lg text-slate-900 hover:text-primary-700 transition-colors">
                  Contact@mannosolutions.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-3xl hover:border-primary-200 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Call Us</p>
                <a href="tel:+917015658018" className="font-bold text-lg text-slate-900 hover:text-primary-700 transition-colors">
                  +91-7015658018
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-3xl hover:border-primary-200 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col items-start gap-4 relative overflow-hidden"
            >
              <Globe size={180} className="absolute -right-10 -bottom-10 text-slate-100 transform group-hover:rotate-12 transition-transform duration-700 pointer-events-none" />
              <div className="w-14 h-14 bg-primary-50 border border-primary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-all duration-300 relative z-10">
                <MapPin size={24} />
              </div>
              <div className="relative z-10">
                <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Website</p>
                <a href="https://www.mannosolutions.com" target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-slate-900 hover:text-primary-700 transition-colors">
                  www.mannosolutions.com
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] relative overflow-hidden"
          >
            {/* Form Top Accent */}
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-50"></div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">Full Name</label>
                  <input type="text" id="name" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none transition-all font-medium text-slate-900 placeholder-slate-400" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">Email Address</label>
                  <input type="email" id="email" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none transition-all font-medium text-slate-900 placeholder-slate-400" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">Subject</label>
                <input type="text" id="subject" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none transition-all font-medium text-slate-900 placeholder-slate-400" placeholder="Briefly describe what you need help with" />
              </div>

              <div>
                <label htmlFor="message" className="block text-[13px] font-bold text-slate-600 mb-2 uppercase tracking-wide">Message</label>
                <textarea id="message" rows="5" className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 outline-none transition-all resize-none font-medium text-slate-900 placeholder-slate-400" placeholder="Tell us about your business, team size, and the challenges you’re facing"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="btn-primary w-full sm:w-auto min-w-[200px]">
                  <span className="text-lg">Send Message →</span>
                </button>
                <p className="text-sm font-medium text-slate-500 mt-4 text-center sm:text-left">
                  We typically respond within 1 business day.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
