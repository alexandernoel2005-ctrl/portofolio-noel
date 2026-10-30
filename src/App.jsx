import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Github, Linkedin, ExternalLink, 
  Code2, Server, Layout, Video, MonitorPlay, 
  ChevronRight, Terminal, Sparkles, Eye, Maximize2, CheckCircle2,
  Database, Settings, BookOpen, Briefcase, Activity, Wifi, Play, HelpCircle, ArrowRight, ArrowLeft, Tag, Download, Search, Edit, Trash2, Plus, Hammer, Clock
} from 'lucide-react';

// --- Translation Dictionary ---
const dict = {
  id: {
    nav: [
      { name: 'Tentang', href: '#tentang' },
      { name: 'Keahlian', href: '#keahlian' },
      { name: 'Proyek', href: '#proyek' },
      { name: 'Aktivitas', href: '#aktivitas' },
      { name: 'Kontak', href: '#kontak' }
    ],
    heroBadge: 'Mahasiswa Sistem Informasi & Tech Enthusiast',
    heroDesc: 'Berfokus pada Analisis Sistem Informasi, Pengembangan Web Full-Stack, Otomatisasi Proses Bisnis (RPA), dan Aplikasi Low-Code.',
    btnProjects: 'Lihat Proyek Saya',
    btnContact: 'Hubungi Saya',
    aboutTitle: 'Tentang Saya',
    aboutSub: 'Kenali latar belakang dan fokus studi saya.',
    aboutP1: 'Saya adalah mahasiswa Sistem Informasi di BINUS University yang memiliki passion besar dalam eksplorasi teknologi, mulai dari Front-End & Full-Stack Web Development, perancangan Database, hingga inovasi otomatisasi proses bisnis (RPA) dan pengembangan platform Low-Code.',
    aboutP2: 'Saya terbiasa menjembatani antara desain antarmuka yang intuitif, analisis logika bisnis (Value Proposition Canvas), dan arsitektur basis data yang terstruktur. Saya percaya pengembangan sistem tidak hanya tentang baris kode, tetapi tentang memberikan solusi digital yang bernilai tinggi.',
    skillsTitle: 'Tech Stack & Keahlian',
    skillsSub: 'Teknologi, metodologi, dan tools yang saya gunakan.',
    projectsTitle: 'Proyek Portofolio',
    projectsSub: 'Deretan karya, platform interaktif, dan studi kasus sistem yang telah saya kembangkan. Klik proyek untuk melihat detail & preview.',
    activitiesTitle: 'Aktivitas & Keterampilan Media',
    activitiesSub: 'Keterampilan teknis pendukung di luar pengembangan perangkat lunak.',
    contactTitle: 'Mari Berkolaborasi!',
    contactDesc: 'Punya ide proyek menarik, diskusi sistem informasi, atau peluang kerja sama? Saya selalu terbuka untuk berdiskusi.',
    btnEmail: 'Kirim Email Sekarang',
    modalDescTitle: 'Deskripsi Proyek & Metodologi',
    modalTechTitle: 'Teknologi & Tools Utama',
    btnDownload: 'Download Project ZIP',
    btnUnderConstruction: 'Sedang Dikerjakan (Under Construction)',
    inProgressMsg: 'Proyek ini masih dalam tahap pengembangan aktif.',
    btnClose: 'Tutup Preview',
    hostedOn: 'Di-hosting secara aman melalui Google Drive',
    viewDetail: 'Lihat Detail',
    interests: [
      {
        icon: Video,
        title: "Video Editing",
        desc: "Mengedit dan merangkai tayangan visual yang menarik menggunakan CapCut untuk kebutuhan presentasi dan dokumentasi."
      },
      {
        icon: MonitorPlay,
        title: "OBS Studio",
        desc: "Pengaturan scene, audio routing, dan kelola konfigurasi tayangan untuk live streaming & recording."
      }
    ]
  },
  en: {
    nav: [
      { name: 'About', href: '#tentang' },
      { name: 'Skills', href: '#keahlian' },
      { name: 'Projects', href: '#proyek' },
      { name: 'Activities', href: '#aktivitas' },
      { name: 'Contact', href: '#kontak' }
    ],
    heroBadge: 'Information Systems Student & Tech Enthusiast',
    heroDesc: 'Focusing on Information Systems Analysis, Full-Stack Web Development, Robotic Process Automation (RPA), and Low-Code Applications.',
    btnProjects: 'View My Projects',
    btnContact: 'Contact Me',
    aboutTitle: 'About Me',
    aboutSub: 'Get to know my background and academic focus.',
    aboutP1: 'I am an Information Systems student at BINUS University with a huge passion for technology exploration, ranging from Front-End & Full-Stack Web Development, Database design, to business process automation (RPA) innovations and Low-Code platform development.',
    aboutP2: 'I am accustomed to bridging intuitive interface design, business logic analysis (Value Proposition Canvas), and structured database architecture. I believe system development is not just about lines of code, but about delivering high-value digital solutions.',
    skillsTitle: 'Tech Stack & Skills',
    skillsSub: 'Technologies, methodologies, and tools I use.',
    projectsTitle: 'Portfolio Projects',
    projectsSub: 'A showcase of works, interactive platforms, and system case studies I have developed. Click a project to see details & preview.',
    activitiesTitle: 'Activities & Media Skills',
    activitiesSub: 'Supporting technical skills beyond software development.',
    contactTitle: 'Let\'s Collaborate!',
    contactDesc: 'Have an interesting project idea, information systems discussion, or partnership opportunity? I am always open to chat.',
    btnEmail: 'Send Email Now',
    modalDescTitle: 'Project Description & Methodology',
    modalTechTitle: 'Core Technologies & Tools',
    btnDownload: 'Download Project ZIP',
    btnUnderConstruction: 'Being Built (Under Construction)',
    inProgressMsg: 'This project is still in active development.',
    btnClose: 'Close Preview',
    hostedOn: 'Securely hosted via Google Drive',
    viewDetail: 'View Details',
    interests: [
      {
        icon: Video,
        title: "Video Editing",
        desc: "Editing and arranging engaging visual displays using CapCut for presentation and documentation needs."
      },
      {
        icon: MonitorPlay,
        title: "OBS Studio",
        desc: "Scene setup, audio routing, and stream configuration management for live streaming & recording."
      }
    ]
  }
};

// --- Data ---
const projectsData = [
  {
    id: "pawcare",
    title: "PawCare",
    subtitle: { id: "Pet Care & Adoption Platform", en: "Pet Care & Adoption Platform" },
    description: { 
      id: "Platform web terintegrasi untuk kesejahteraan hewan peliharaan. Menyediakan pemesanan grooming, e-commerce perlengkapan, dan pelaporan adopsi.",
      en: "Integrated web platform for pet welfare. Provides grooming booking, supplies e-commerce, and adoption reporting."
    },
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    icon: Layout,
    inProgress: true
  },
  {
    id: "elearning",
    title: "E-Learning Academy",
    subtitle: { id: "Full-Stack Digital Learning Platform", en: "Full-Stack Digital Learning Platform" },
    description: {
      id: "Platform pembelajaran coding & desain interaktif dengan fitur katalog kursus, ruang belajar modul video, serta manajemen sistem pembelajaran full-stack.",
      en: "Interactive coding & design learning platform featuring a course catalog, video module study rooms, and full-stack learning management system."
    },
    tech: ["Full-stack", "SQL", "PHP / JS", "UI Layouts"],
    icon: BookOpen,
    downloadLink: "https://drive.google.com/file/d/1FIQwFJY7KvoOHzp3woE-8zWjaRPNF2y6/view?usp=sharing"
  },
  {
    id: "deals",
    title: "Deals",
    subtitle: { id: "Aplikasi Kupon & Loyalty Points", en: "Coupon & Loyalty Points App" },
    description: {
      id: "Aplikasi manajemen voucher dan merchant dengan fitur loyalty points untuk pelanggan. Dikembangkan untuk mempercepat transaksi dan efisiensi operasional UMKM.",
      en: "Voucher and merchant management app with loyalty points for customers. Developed to accelerate transactions and MSME operational efficiency."
    },
    tech: ["Mendix Studio Pro", "Low-Code", "Domain Model"],
    icon: Tag,
    downloadLink: "https://drive.google.com/file/d/1APsv4sKo9mbCAlctWIbSVB9EDMus9RZH/view?usp=sharing"
  },
  {
    id: "furniland",
    title: "Furniland",
    subtitle: { id: "Furniture E-Commerce Catalog", en: "Furniture E-Commerce Catalog" },
    description: {
      id: "Situs web e-commerce furnitur interaktif dengan antarmuka dinamis, keranjang belanja fungsional, dan integrasi pengelolaan basis data.",
      en: "Interactive furniture e-commerce website with a dynamic interface, functional shopping cart, and integrated database management."
    },
    tech: ["HTML & CSS", "JavaScript", "MySQL Database"],
    icon: Database,
    downloadLink: "https://drive.google.com/file/d/1_zGgOnGMT7eob2vR1bFGoq6a7WgSj-Ak/view?usp=sharing"
  },
  {
    id: "uipath",
    title: "UiPath PO Automation",
    subtitle: { id: "Robotic Process Automation (RPA)", en: "Robotic Process Automation (RPA)" },
    description: {
      id: "Otomatisasi proses bisnis (RPA) untuk mengekstraksi data Purchase Order (PO) dari spreadsheet dan memindahkannya ke dokumen Word secara otomatis.",
      en: "Business process automation (RPA) to extract Purchase Order (PO) data from spreadsheets and automatically transfer it into Word documents."
    },
    tech: ["UiPath Studio", "RPA", "Business Automation"],
    icon: Settings,
    downloadLink: "https://drive.google.com/file/d/1wOS3puAREIgLHvg7m0OoPxDrYpR8Jsi9/view?usp=sharing"
  }
];

// --- Helper Components ---

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 mt-3 text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}

function SkillBadge({ name }) {
  return (
    <span className="px-4 py-2 bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-purple-300 font-medium text-sm rounded-xl transition-all duration-300 shadow-sm hover:shadow-purple-500/10">
      {name}
    </span>
  );
}

function InterestCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/30 transition-all flex items-start gap-4">
      <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-bold text-slate-100 text-lg mb-1">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// --- Main Application Component ---

export default function App() {
  const [lang, setLang] = useState('id'); // 'id' or 'en'
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
   
  const t = dict[lang];

  // Handle navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'id' ? 'en' : 'id');

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 font-sans selection:bg-purple-500/30 scroll-smooth">
       
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
           
          {/* Logo & Lang Toggle */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:text-purple-400 transition-colors">
              Noel<span className="text-purple-500">.</span>
            </a>
             
            {/* EN / ID Toggle */}
            <button 
              onClick={toggleLang}
              className="flex items-center bg-slate-900 border border-slate-700 rounded-full p-0.5"
            >
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${lang === 'id' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}>ID</span>
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${lang === 'en' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}>EN</span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {t.nav.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-3">
            {t.nav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-purple-400 font-medium py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs md:text-sm font-medium mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Alexander Noel <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Chandra</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#proyek" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center gap-2 w-full sm:w-auto justify-center">
              {t.btnProjects}
              <ChevronRight size={20} />
            </a>
            <a href="#kontak" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-xl font-semibold transition-all duration-300 border border-slate-800 hover:border-slate-700 flex items-center gap-2 w-full sm:w-auto justify-center">
              {t.btnContact}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="tentang" className="py-24 px-6 bg-slate-900/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title={t.aboutTitle} subtitle={t.aboutSub} />
              <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed text-left md:text-left">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center p-2 group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                 
                <img 
                  src="https://i.ibb.co.com/XZL0DbJf/image-2026-10-30-113644632.png" 
                  alt="Alexander Noel Chandra" 
                  className="w-full h-full object-cover object-[center_top] rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                 
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl pointer-events-none"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="keahlian" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <SectionHeading title={t.skillsTitle} subtitle={t.skillsSub} />
           
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 max-w-4xl mx-auto">
            {[
              'Information Systems', 'ERP Concepts', 'System Analysis', 'Value Proposition Canvas',
              'Mendix (Low-Code)', 'UiPath (RPA)', 'React', 'Tailwind CSS', 
              'Node.js', 'SQL / MySQL', 'JavaScript (ES6+)', 'PHP', 'HTML/CSS'
            ].map(skill => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="proyek" className="py-24 px-6 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={t.projectsTitle} subtitle={t.projectsSub} />
           
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-500 flex flex-col h-full shadow-lg cursor-pointer hover:-translate-y-1"
                >
                  {/* Project Image/Visual Header */}
                  <div className="h-56 bg-slate-800/80 relative overflow-hidden flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 mix-blend-overlay z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                     
                    <div className="text-center z-20">
                      <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-500 border border-purple-500/30">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-purple-300/80 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">
                        {project.subtitle[lang]}
                      </span>
                    </div>

                    {/* Preview overlay indicator */}
                    <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-purple-500/30 flex items-center gap-1.5 text-xs text-purple-300">
                      <Eye size={14} />
                      <span>{t.viewDetail}</span>
                    </div>
                  </div>
                   
                  {/* Project Info */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <button className="p-2 bg-slate-800 group-hover:bg-purple-600/20 rounded-lg text-slate-300 group-hover:text-purple-300 transition-colors">
                        <Maximize2 size={16} />
                      </button>
                    </div>
                     
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                      {project.description[lang]}
                    </p>
                     
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERESTS SECTION */}
      <section id="aktivitas" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title={t.activitiesTitle} subtitle={t.activitiesSub} />
           
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {t.interests.map((interest, i) => (
              <InterestCard key={i} icon={interest.icon} title={interest.title} desc={interest.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontak" className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-950/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">{t.contactTitle}</h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            {t.contactDesc}
          </p>
           
          <a 
            href="mailto:alexander.noel@binus.ac.id"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:scale-105 duration-300"
          >
            <Mail size={20} />
            {t.btnEmail}
          </a>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-purple-400 hover:bg-slate-800 transition-colors border border-slate-800">
              <Github size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors border border-slate-800">
              <Linkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} Alexander Noel Chandra. Dibuat dengan React & Tailwind CSS.</p>
      </footer>

      {/* PROJECT DETAIL MODAL / LIGHTBOX */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
             
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  {React.createElement(selectedProject.icon, { className: "w-5 h-5 text-purple-400" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-xs text-slate-400">{selectedProject.subtitle[lang]}</p>
                </div>
              </div>
               
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-grow space-y-6">
               
              {/* DEFAULT MODAL CONTENT (Simplified) */}
              <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="text-lg font-bold text-slate-200">{t.modalDescTitle}</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {selectedProject.description[lang]}
                </p>
                 
                {/* Download Button OR Under Construction */}
                {(selectedProject.downloadLink || selectedProject.inProgress) && (
                  <div className="pt-4 border-t border-slate-800/50 mt-4">
                    {selectedProject.inProgress ? (
                      <button 
                        disabled
                        className="inline-flex w-full md:w-auto justify-center px-6 py-3 bg-slate-800 text-slate-500 font-bold rounded-xl items-center gap-2 cursor-not-allowed border border-slate-700/50"
                      >
                        <Hammer size={20} className="text-slate-500" />
                        {t.btnUnderConstruction}
                      </button>
                    ) : (
                      <>
                        <a 
                          href={selectedProject.downloadLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex w-full md:w-auto justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl items-center gap-2 transition-all shadow-[0_0_15px_rgba(5,150,105,0.4)] hover:scale-105"
                        >
                          <Download size={20} />
                          {t.btnDownload}
                        </a>
                        <p className="text-xs text-slate-500 mt-3 flex items-center justify-center md:justify-start gap-1">
                          <ExternalLink size={12} /> {t.hostedOn}
                        </p>
                      </>
                    )}
                  </div>
                )}
                 
                {/* In Progress Status */}
                {selectedProject.inProgress && (
                  <p className="text-xs text-slate-500 mt-3 flex items-center gap-1">
                    <Clock size={14} /> {t.inProgressMsg}
                  </p>
                )}
              </div>

              <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{t.modalTechTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((techItem) => (
                    <span key={techItem} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium rounded-lg">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-sm font-semibold transition-colors"
              >
                {t.btnClose}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}