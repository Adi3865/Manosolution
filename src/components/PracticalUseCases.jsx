import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Briefcase, Headphones, Activity, ArrowRight } from 'lucide-react';

const useCases = [
  {
    title: "Operational Management",
    subtitle: "Handling daily operations",
    description: "We take over time-consuming, repetitive tasks: scheduling, coordination, workflow management, and continuity planning.",
    icon: Activity,
    image: "/images/usecase_operations_1775028147041.png",
    features: ["Workflow optimization", "Resource scheduling", "Process automation support"]
  },
  {
    title: "Administrative Excellence",
    subtitle: "Managing back-office functions",
    description: "Data integrity, compliance tracking, and document management handled with speed and accuracy.",
    icon: ClipboardCheck,
    image: "/images/usecase_admin_1775028164090.png",
    features: ["Data integrity", "Compliance tracking", "Document management"]
  },
  {
    title: "Client Relations",
    subtitle: "Supporting customer-facing teams",
    description: "24/7 multilingual support, SLA-driven resolution, and seamless brand representation across every channel.",
    icon: Headphones,
    image: "/images/usecase_support_1775028184853.png",
    features: ["24/7 Availability", "Multi-channel support", "SLA-driven resolution"]
  },
  {
    title: "Strategic Execution",
    subtitle: "Executing ongoing projects",
    description: "Dedicated project teams with milestone tracking, agile methodology, and regular performance reporting.",
    icon: Briefcase,
    image: "/images/usecase_strategy_1775028203696.png",
    features: ["Milestone tracking", "Agile methodology", "Regular performance reporting"]
  }
];

const PracticalUseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <span className="w-2 h-2 rounded-full bg-primary-600"></span>
            <h2 className="text-inherit">Where We Fit In</h2>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-h3"
          >
            Whether you're a fast-scaling startup or an established enterprise, Manno integrates directly into your workflow, where you need it most.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col lg:flex-row bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-500"
              >
                <div className="w-full lg:w-48 h-48 lg:h-auto overflow-hidden relative">
                  <img
                    src={useCase.image}
                    alt={useCase.subtitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">{useCase.title}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {useCase.subtitle}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                    {useCase.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {useCase.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticalUseCases;
