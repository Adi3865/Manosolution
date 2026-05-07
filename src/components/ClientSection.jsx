import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink, Globe, Award, TrendingUp } from 'lucide-react';

const ClientSection = () => {
  return (
    <section id="clients" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent-100/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mx-auto bg-white"
          >
            <Award size={14} className="text-primary-600" />
            Trusted by Ambitious Businesses Worldwide
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-h3"
          >
            Trusted by Ambitious Businesses Worldwide
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-p"
          >
            We don't build vendor relationships. We build operational foundations, long-term partnerships with companies that hold their standards high.
          </motion.p>
        </div>

        {/* Feature Client: Vista Chase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative"
        >
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Brand & Content */}
            <div className="lg:w-3/5 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                 <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm w-fit">
                    <img 
                      src="/vista_chase_logo.png" 
                      alt="Vista Chase Logo" 
                      className="h-10 md:h-12 w-auto object-contain brightness-95 contrast-125"
                    />
                 </div>
                 <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
                 <div className="space-y-1">
                    <span className="text-[10px] font-black text-[#40979C] uppercase tracking-[0.3em] block">Verified Strategic Partner</span>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Vista Chase, Banff, Alberta, Canada</h4>
                 </div>
              </div>

              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  Vista Chase is a premier Canadian Rockies tour and shuttle operator based in Banff, Alberta. Offering private tours, shared group experiences, multi-day packages, and sunrise shuttles to iconic destinations including Moraine Lake, Lake Louise, and the Icefields Parkway, Vista Chase is trusted by travellers from over 20 countries. Rated 5 stars on Google, TripAdvisor, and Viator, they are one of Banff's most recognised premium tour operators.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                    <Globe size={13} className="text-[#40979C]" />
                    Travel & Tourism
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-8 items-start md:items-center">
                 <div className="flex-1">
                    <div className="flex gap-1 text-[#40979C] mb-3">
                       {[...Array(5)].map((_, i) => (
                         <TrendingUp key={i} size={14} className="fill-current" />
                       ))}
                    </div>
                    <p className="text-slate-800 font-bold italic text-lg leading-relaxed">
                      "Running a high-demand tour operation across Banff means every booking, every coordination task, and every guest interaction carries real weight. Manno Solutions took complete ownership of our back-office operations, and the difference was immediate. Our team now focuses entirely on delivering exceptional guest experiences, while Manno ensures everything behind the scenes runs flawlessly. Exactly the kind of partner a growing travel brand needs."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-[#40979C]/10 flex items-center justify-center">
                          <Quote size={18} className="text-[#40979C]" />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-900">Operations Lead</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Vista Chase · Banff, Alberta, Canada</p>
                       </div>
                    </div>
                 </div>
              </div>

            </div>

            {/* Right Column: Performance Cards */}
            <div className="lg:w-2/5 flex flex-col gap-4">
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 rounded-3xl p-8 text-white group hover:bg-[#40979C] transition-all duration-500 shadow-xl">
                     <p className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-white/80 mb-2 font-black">Operational efficiency gain</p>
                     <div className="text-4xl font-black">+40%</div>
                  </div>
                  <div className="bg-[#40979C]/10 rounded-3xl p-8 border border-[#40979C]/20 group hover:bg-[#40979C] transition-all duration-500 shadow-sm">
                     <p className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-white/80 mb-2 font-black">Continuous support coverage</p>
                     <div className="text-4xl font-black text-[#40979C] group-hover:text-white">24/7</div>
                  </div>
               </div>
               <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-black">Project completion rate</p>
                    <div className="text-5xl font-black text-slate-900 tracking-tighter">100%</div>
                  </div>
                  <div className="text-right">
                    <div className="flex -space-x-3 mb-2 justify-end">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                       ))}
                    </div>
                    <p className="text-[10px] font-black text-[#40979C] tracking-widest">VERIFIED PARTNERSHIP</p>
                  </div>
               </div>
               <div className="flex-1 rounded-3xl bg-gradient-to-br from-[#40979C] to-[#2d6e71] p-8 text-white shadow-2xl relative overflow-hidden group flex flex-col justify-center min-h-[140px]">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <Award size={120} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-2">Industry Status</p>
                    <h5 className="text-3xl font-black leading-tight">Elite Operational Support Provider</h5>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
