import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, TrendingUp, Users } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We go deep into your operations: your goals, processes, gaps, and standards. No templates, no assumptions.",
    icon: Target,
    image: "/images/step_1.png"
  },
  {
    num: "02",
    title: "Build Your Team",
    desc: "We assign the right professionals based on your requirements, cultural fit, technical skills, and experience level all considered.",
    icon: Users,
    image: "/images/step_2.png"
  },
  {
    num: "03",
    title: "Execute",
    desc: "Your dedicated team starts work through structured processes, quality monitoring, and clear communication loops.",
    icon: CheckCircle,
    image: "/images/step_3.png"
  },
  {
    num: "04",
    title: "Optimise & Scale",
    desc: "We track performance, gather feedback, and continuously refine, ensuring what we deliver gets better the longer we work together.",
    icon: TrendingUp,
    image: "/images/step_4.png"
  }
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Sleek light grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 text-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary-600 shadow-[0_0_10px_rgba(38,99,178,0.3)]"></span>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Our Process</span>
          </motion.div>
          <motion.h3
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Simple to Start. Built to Last.
          </motion.h3>
          <motion.p
            className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From first conversation to full-scale execution, our onboarding process is designed to get your team operational fast, without compromise on quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(38,99,178,0.15)] border border-slate-200 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Floating Number Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm text-slate-800 font-black text-xl px-3 py-1 rounded-xl shadow-lg border border-white/50">
                    {step.num}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col relative z-20 -mt-8">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] border border-slate-100 group-hover:border-primary-100 group-hover:bg-primary-50 transition-colors duration-300 relative z-30">
                    <Icon size={26} className="text-primary-600" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-slate-600 leading-relaxed font-medium text-sm flex-1">
                    {step.desc}
                  </p>
                  
                  {/* Connector indication for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[120px] -right-4 w-8 border-t-2 border-dashed border-slate-300 z-0 opacity-50 group-hover:border-primary-400 group-hover:opacity-100 transition-colors duration-300"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
