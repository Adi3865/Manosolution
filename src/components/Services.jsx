import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Briefcase, Activity, FileText, Headphones, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'dedicated-teams',
    title: 'Dedicated Service Teams',
    description: 'Your own team of skilled professionals, fully focused on your business, available full-time, trained to your standards, and managed entirely by us.',
    icon: Users,
    image: '/images/r_service_teams.png'
  },
  {
    id: 'operational-support',
    title: 'Operational Support',
    description: 'We manage the daily tasks that keep your business running, from workflow coordination to process oversight, with zero gaps in delivery.',
    icon: Settings,
    image: '/images/r_service_ops.png'
  },
  {
    id: 'project-execution',
    title: 'Project Execution',
    description: 'Structured teams assigned to short or long-term projects, with defined milestones, regular reporting, and full accountability from kickoff to completion.',
    icon: Briefcase,
    image: '/images/r_service_projects.png'
  },
  {
    id: 'process-support',
    title: 'Business Process Support',
    description: 'We map, optimise, and manage your internal workflows, reducing friction, improving consistency, and freeing your team to focus on higher-value work.',
    icon: Activity,
    image: '/images/r_service_processes.png'
  },
  {
    id: 'back-office',
    title: 'Back-Office & Admin Support',
    description: 'Data management, documentation, scheduling, and administrative operations handled with accuracy, speed, and complete confidentiality.',
    icon: FileText,
    image: '/images/r_service_backoffice.png'
  },
  {
    id: 'customer-support',
    title: 'Customer & Technical Support',
    description: 'Trained professionals representing your brand, handling enquiries, resolving issues, and delivering support experiences your customers will remember.',
    icon: Headphones,
    image: '/images/r_service_support.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <span className="w-2 h-2 rounded-full bg-primary-600"></span>
            <h2 className="text-inherit">What We Do</h2>
          </motion.div>
          <motion.h3
            className="section-h3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            End-to-end operational support across six core disciplines, all delivered by dedicated in-house teams.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a 
                href={`#services-page?id=${service.id}`}
                key={index}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative cursor-pointer block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Header with Gradient fade */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle fade to white */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 pt-2 flex flex-col relative z-20">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 shadow-sm border border-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 -mt-6">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-slate-600 leading-relaxed font-medium text-sm flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 font-bold group-hover:text-primary-700 transition-colors">
                    <span className="text-sm">View Details</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;












// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Users2, 
//   BarChart3, 
//   Briefcase , 
//   Cpu, 
//   ShieldCheck, 
//   Headset,
//   ArrowUpRight 
// } from 'lucide-react';

// const solutions = [
//   {
//     title: 'Managed Human Capital',
//     category: 'Operational Excellence',
//     description: 'Bespoke teams of subject matter experts integrated directly into your corporate workflow for seamless continuity.',
//     icon: Users2,
//   },
//   {
//     title: 'Global Project Delivery',
//     category: 'Strategic Execution',
//     description: 'Full-lifecycle project management utilizing international benchmarks to ensure milestones are met with 100% accountability.',
//     icon: Briefcase,
//   },
//   {
//     title: 'Process Transformation',
//     category: 'Optimization',
//     description: 'Refining legacy workflows through modern methodologies to drive efficiency and reduce operational overhead.',
//     icon: BarChart3,
//   },
//   {
//     title: 'Infrastructure & Tech Support',
//     category: 'Technology',
//     description: 'High-availability technical support and systems management designed for mission-critical enterprise environments.',
//     icon: Cpu,
//   },
//   {
//     title: 'Risk & Compliance Admin',
//     category: 'Governance',
//     description: 'Specialized administrative support focusing on data integrity, regulatory documentation, and global standards.',
//     icon: ShieldCheck,
//   },
//   {
//     title: 'Enterprise Client Relations',
//     category: 'Communications',
//     description: 'Multi-lingual, professional-grade engagement teams that uphold your brand’s reputation across global markets.',
//     icon: Headset,
//   }
// ];

// const ServicesGrid = () => {
//   return (
//     <section id="services" className="py-32 bg-[#F8FAFC] relative">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
//           <div className="max-w-2xl">
//             <motion.span 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs"
//             >
//               Our Expertise
//             </motion.span>
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-4xl md:text-5xl font-serif text-slate-900 mt-4 leading-tight"
//             >
//               Scalable Solutions for <br />
//               <span className="italic font-light">Complex Operations.</span>
//             </motion.h2>
//           </div>
//           <p className="text-slate-500 max-w-sm text-sm leading-relaxed border-l border-slate-200 pl-6">
//             We don't just provide support; we architect the operational backbone that allows your leadership to focus on high-level strategy.
//           </p>
//         </div>

//         {/* The Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-sm overflow-hidden shadow-2xl">
//           {solutions.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="group bg-white p-10 hover:bg-slate-900 transition-all duration-500 ease-in-out relative flex flex-col h-full"
//               >
//                 <div className="flex justify-between items-start mb-12">
//                   <div className="p-3 bg-slate-50 rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 text-slate-900">
//                     <Icon size={24} strokeWidth={1.5} />
//                   </div>
//                   <ArrowUpRight className="text-slate-300 group-hover:text-blue-500 transition-colors" size={20} />
//                 </div>

//                 <div className="mt-auto">
//                   <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-2 block group-hover:text-blue-400">
//                     {item.category}
//                   </span>
//                   <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
//                     {item.title}
//                   </h4>
//                   <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Global CTA */}
//         <div className="mt-20 text-center">
//           <p className="text-slate-400 text-sm mb-6 italic">Tailored solutions available for Fortune 500 and emerging enterprises.</p>
//           <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
//             Download Service Catalog (PDF)
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;