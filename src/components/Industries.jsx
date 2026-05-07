import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Laptop, DollarSign, ShoppingCart, Building, ArrowRight } from 'lucide-react';

const industries = [
  { 
    id: 1,
    name: 'Travel & Tourism', 
    icon: Plane, 
    image: '/images/industry_travel.png',
    desc: 'Booking operations, guest support, coordination, and back-office management for travel companies operating at scale.'
  },
  { 
    id: 2,
    name: 'IT & Technology', 
    icon: Laptop, 
    image: '/images/industry_it.png',
    desc: 'Operational and infrastructure support for tech companies, freeing engineering and product teams to focus on building.'
  },
  { 
    id: 3,
    name: 'Finance & Accounting', 
    icon: DollarSign, 
    image: '/images/industry_finance.png',
    desc: 'Compliance tracking, data management, and process support for finance teams with high accuracy requirements.'
  },
  { 
    id: 4,
    name: 'E-commerce', 
    icon: ShoppingCart, 
    image: '/images/industry_ecommerce.png',
    desc: 'Order management, customer support, logistics coordination, and back-end operations for online retail businesses.'
  },
  { 
    id: 5,
    name: 'Professional Services', 
    icon: Building, 
    image: '/images/industry_prof_services.png',
    desc: 'Admin, project coordination, and client management support for consulting, legal, and professional service firms.'
  },
];

const Industries = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Premium Background styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-badge"
            >
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
              <h2 className="text-inherit">Industry Solutions</h2>
            </motion.div>
            <motion.h3 
              className="section-h3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Built for the Industries <span className="text-primary-600">That Move the World</span>
            </motion.h3>
          </div>
          <motion.div
            className="flex items-center gap-4 lg:justify-end max-w-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 font-medium leading-relaxed">
              We bring deep operational expertise to high-growth global sectors, delivering support that's tailored to the complexity of each industry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Expanding Folders */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[550px] gap-4">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const isActive = activeItem === index;
            
            return (
              <motion.div
                key={ind.id}
                onHoverStart={() => setActiveItem(index)}
                onClick={() => setActiveItem(index)}
                layout
                initial={{ borderRadius: "2rem" }}
                animate={{ 
                  flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 3 : 5) : 1,
                  borderRadius: "2rem"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                className={`relative overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200 min-h-[80px] lg:min-h-full flex items-end ${
                  isActive ? 'bg-slate-900' : 'bg-slate-800'
                }`}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{ 
                    scale: isActive ? 1.05 : 1,
                    filter: isActive ? "brightness(1) grayscale(0%)" : "brightness(0.5) grayscale(50%)"
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover" />
                </motion.div>
                
                {/* Graidents */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' : 'bg-slate-900/60'}`}></div>

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8 w-full flex flex-col justify-end min-w-0 h-full">
                  <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start h-full h-full">
                    
                    {/* Top Icon Area */}
                    <motion.div 
                      layout 
                      className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center border shadow-sm shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary-600/90 backdrop-blur-md border-primary-500/50 text-white shadow-[0_0_20px_rgba(38,99,178,0.4)]' 
                          : 'bg-white/10 backdrop-blur-md border-white/20 text-white/70'
                      }`}
                    >
                      <Icon size={isActive ? 28 : 22} className="transition-all duration-300" />
                    </motion.div>

                    {/* Bottom Content Area */}
                    <div className="flex items-center lg:items-end justify-end lg:justify-start w-full mt-auto">
                      
                      {/* Vertical Title (when inactive on desktop) */}
                      {!isActive && (
                        <div className="hidden lg:block absolute bottom-8 left-8 origin-bottom-left -rotate-90 text-white font-bold tracking-widest whitespace-nowrap text-xl opacity-70">
                          {ind.name}
                        </div>
                      )}

                      {/* Horizontal Title (always visible on mobile, visible on desktop when active) */}
                      <AnimatePresence>
                         <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: isActive ? 1 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 0), y: isActive ? 0 : 20 }}
                           className={`w-full ${isActive ? 'block' : 'lg:hidden block ml-4'}`}
                         >
                           <h4 className="text-white text-xl lg:text-3xl font-bold mb-0 lg:mb-2 tracking-tight truncate lg:whitespace-normal">{ind.name}</h4>
                           
                           {isActive && (
                             <motion.div
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               transition={{ delay: 0.2 }}
                               className="hidden lg:block"
                             >
                               <p className="text-slate-300 text-[15px] font-medium max-w-sm mb-6 leading-relaxed">
                                 {ind.desc}
                               </p>
                               <a href="#contact" className="inline-flex items-center gap-2 text-primary-300 font-semibold group/btn hover:text-white transition-colors cursor-pointer">
                                 <span>Explore Solutions</span>
                                 <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                               </a>
                             </motion.div>
                           )}
                         </motion.div>
                      </AnimatePresence>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;