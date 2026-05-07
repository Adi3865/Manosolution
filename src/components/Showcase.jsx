import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Maximize2, X, ShieldCheck } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "/images/showcase_planning.png", title: "Collaborative Planning", style: "col-span-12 md:col-span-8 row-span-2" },
  { id: 2, src: "/images/showcase_digital.png", title: "Digital Operations", style: "col-span-6 md:col-span-4 row-span-1" },
  { id: 3, src: "/images/showcase_strategy.png", title: "Executive Strategy", style: "col-span-6 md:col-span-4 row-span-1" },
  { id: 4, src: "/images/showcase_meetings.png", title: "Global Meetings", style: "col-span-12 md:col-span-4 row-span-2" },
  { id: 5, src: "/images/showcase_analytics.png", title: "Data Analytics", style: "col-span-12 md:col-span-8 row-span-1" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Showcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="showcase" className="py-24 bg-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -left-32 top-32 w-96 h-96 bg-primary-50 rounded-full blur-[100px] opacity-70 border-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex justify-center items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-50 border border-slate-200"
          >
            <span className="w-2 h-2 rounded-full bg-primary-600"></span>
            <h2 className="text-[13px] font-bold text-slate-600 tracking-wide uppercase">Inside Manno Solutions</h2>
          </motion.div>
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Glimpse into Our <span className="text-primary-600">Excellence</span>
          </motion.h3>
          <motion.p
            className="text-lg text-slate-600 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover the dynamic team, premium workspace, and professional execution driving top-tier business process operations.
          </motion.p>
        </div>

        {/* 1. Split Layout with Refined Cards */}
        {/* <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 p-8 md:p-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Dedicated War Rooms</h4>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                We create highly specialized environments for dedicated client teams, ensuring high security, absolute focus, and uninterrupted operational efficiency.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <button className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors group">
                  Learn about our infrastructure
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/images/service_projects.png"
                alt="Tech Team"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8">
                <p className="text-white font-semibold text-lg drop-shadow-md">Modern tech infrastructure</p>
              </div>
            </div>
          </motion.div>
        </div> */}

        {/* 2. Interactive Masonry Grid */}
        <motion.div
          className="grid grid-cols-12 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 ${img.style} bg-slate-100 border border-slate-200 hover:border-slate-300`}
              onClick={() => setSelectedImage(img)}
            >
              <div className="w-full h-full">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/60 transition-colors duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 text-white">
                    <Maximize2 size={18} />
                  </div>
                  <h5 className="text-white font-bold text-xl drop-shadow-md">{img.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-900/95 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md border border-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <h3 className="text-white text-3xl font-bold tracking-tight">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;
