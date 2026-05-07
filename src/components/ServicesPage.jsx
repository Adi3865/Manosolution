import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Settings, Briefcase, Activity, FileText, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

const detailedServices = [
  {
    id: 'dedicated-teams',
    title: 'Dedicated Service Teams',
    summary: 'Your own team of skilled professionals, fully focused on your business, available full-time, trained to your standards, and managed entirely by us.',
    description: 'We do not operate on a freelance or gig model. When you partner with us for a dedicated team, you get full-time, highly skilled professionals who are solely dedicated to your business. They adapt to your culture, adopt your processes, and report directly into your workflows as if they were sitting in your own office. We handle the HR, payroll, performance management, and infrastructure.',
    bullets: ['100% Dedicated to your business', 'Fully managed HR & Infrastructure', 'Cultural & Operational alignment', 'Scalable upon request'],
    icon: Users,
    image: '/images/r_service_teams.png',
    color: 'from-blue-500 to-primary-600'
  },
  {
    id: 'operational-support',
    title: 'Operational Support',
    summary: 'We manage the daily tasks that keep your business running, from workflow coordination to process oversight, with zero gaps in delivery.',
    description: 'Stop letting critical daily operations fall through the cracks. Our operational support teams provide the reliable backbone your business needs to function smoothly. We take ownership of daily coordination, vendor communication, workflow management, and quality assurance so your leadership can focus strictly on growth and strategy.',
    bullets: ['Daily workflow management', 'Quality assurance checking', 'Vendor & partner coordination', 'Process documentation'],
    icon: Settings,
    image: '/images/r_service_ops.png',
    color: 'from-slate-600 to-slate-800'
  },
  {
    id: 'project-execution',
    title: 'Project Execution',
    summary: 'Structured teams assigned to short or long-term projects, with defined milestones, regular reporting, and full accountability from kickoff to completion.',
    description: 'Executing complex projects requires structure and reliable human resources. We assemble tailored teams to tackle specific strategic projects for your business. Whether it is a 3-month system migration or an ongoing multi-year rollout, we ensure that project milestones are hit, budgets are respected, and execution is flawless.',
    bullets: ['End-to-end project management', 'Agile and Waterfall methodologies', 'Transparent milestone reporting', 'Expert resource allocation'],
    icon: Briefcase,
    image: '/images/r_service_projects.png',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'process-support',
    title: 'Business Process Support',
    summary: 'We map, optimise, and manage your internal workflows, reducing friction, improving consistency, and freeing your team to focus on higher-value work.',
    description: 'Inefficient processes are the hidden tax on your business. We provide dedicated support to streamline, map, and execute your core business processes. By integrating our expertly managed teams into your workflows, we increase processing speed, eliminate bottlenecks, and ensure absolute compliance with your operational standards.',
    bullets: ['Process mapping and optimisation', 'Bottleneck identification', 'Compliance & standardization', 'Continuous improvement cycles'],
    icon: Activity,
    image: '/images/r_service_processes.png',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'back-office',
    title: 'Back-Office & Admin Support',
    summary: 'Data management, documentation, scheduling, and administrative operations handled with accuracy, speed, and complete confidentiality.',
    description: 'A strong front office requires a flawless back office. Our administrative teams handle the heavy lifting of data entry, scheduling, CRM management, compliance logging, and document processing. With draconian privacy standards and an obsession with accuracy, we ensure your back-office operations never slow you down.',
    bullets: ['Secure data management', 'CRM and database maintenance', 'Executive administrative support', 'Financial data processing'],
    icon: FileText,
    image: '/images/r_service_backoffice.png',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'customer-support',
    title: 'Customer & Technical Support',
    summary: 'Trained professionals representing your brand, handling enquiries, resolving issues, and delivering support experiences your customers will remember.',
    description: 'Your customers deserve a premium support experience. We build and manage customer and technical support teams that act as true brand ambassadors. From Tier 1 triaging to complex technical troubleshooting, our professionals are trained meticulously on your product and brand voice to deliver exceptional service.',
    bullets: ['Multi-channel support (Email, Chat, Phone)', 'Tier 1 & Tier 2 Technical Support', 'High CSAT & low resolution times', 'Comprehensive product training'],
    icon: Headphones,
    image: '/images/r_service_support.png',
    color: 'from-violet-500 to-purple-600'
  }
];

const ServicesPage = () => {
  useEffect(() => {
    // Scroll to section if hash includes an id, otherwise to top
    const hash = window.location.hash;
    if (hash && hash.includes('?id=')) {
      const id = hash.split('?id=')[1];
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ['0%', '20%']);
  const textY = useTransform(scrollY, [0, 800], ['0%', '40%']);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-gray-800 selection:bg-primary-100 selection:text-primary-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-24 lg:pt-0">
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(38,99,178,0.3),rgba(15,23,42,1))] z-10"></div>
          {/* Subtle grid pattern over dark bg */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0"></div>
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-10 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge bg-white/5 border-white/10 text-primary-200 backdrop-blur-sm mb-6 inline-flex">
              Our Capabilities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Expert Execution across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-200 to-white">
                Six Core Disciplines.
              </span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
              We provide tailored, in-house dedicated teams that integrate seamlessly into your operations. Explore our detailed service offerings below.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Detailed Services Feed */}
      <section className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white group">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10`}></div>
                  {/* Generate actual images via copy soon */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image not yet copied
                      e.target.src = '/images/about_indian_office.png';
                    }}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
                  <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Service 0{index + 1}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h2>
                
                <p className="text-xl text-slate-600 mb-6 font-medium leading-relaxed">
                  {service.summary}
                </p>

                <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent my-8"></div>

                <p className="text-slate-600 leading-loose mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                      <span className="text-sm font-semibold text-slate-700">{bullet}</span>
                    </div>
                  ))}
                </div>

                <a href="/#contact" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors group">
                  Discuss this service
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Global CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(38,99,178,0.4),transparent)] -z-0"></div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your execution?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl">
              Don't let operational friction hold back your growth. Partner with Manno Solutions to deploy dedicated, high-performance teams within weeks.
            </p>
            <a href="/#contact" className="btn-primary text-lg !px-10 !py-4 shadow-[0_0_30px_rgba(38,99,178,0.4)]">
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
