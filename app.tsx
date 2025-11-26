import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Dribbble, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-12 md:px-12 md:py-16">
        
        {/* Header - Hero Section */}
        <header className="mb-16">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-3 tracking-tight">
              Bimal Chhetry
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-2xl leading-relaxed">
              Creative technologist crafting intuitive digital experiences through design and code
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-600 mb-4">
            <a href="tel:+97798251 71228" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+977 98251 71228</span>
            </a>
            <a href="mailto:bimal.chhetry122@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>bimal.chhetry122@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Pokhara, Nepal</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/ghoseyy" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow-md">
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/bimal-chhetri-1604111bb/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://www.behance.net/bimalchhetry" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all shadow-sm hover:shadow-md">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
              <span className="text-sm font-medium">Behance</span>
            </a>
            <a href="https://dribbble.com/bimal28" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all shadow-sm hover:shadow-md">
              <Dribbble className="w-4 h-4" />
              <span className="text-sm font-medium">Dribbble</span>
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed">
              Creative and results-driven professional with expertise in <span className="font-semibold text-slate-900">UI/UX design</span>, <span className="font-semibold text-slate-900">full-stack mobile development</span>, and <span className="font-semibold text-slate-900">digital content creation</span>. Skilled in React Native, TypeScript, and multimedia design, with proven experience in delivering engaging apps and marketing solutions.
            </p>
            <p className="text-sm text-slate-500 mt-4 italic">Authorized to work in the US for any employer</p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Software Development</h3>
              <p className="text-slate-700 leading-relaxed">React Native, React, JavaScript, TypeScript, Expo, Redux, API Integration, Git/GitHub, Node.js, Firebase, AdMob</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">UI/UX & Design</h3>
              <p className="text-slate-700 leading-relaxed">Wireframing & Prototyping, Mobile/Web Interfaces, Figma, Adobe Photoshop/Illustrator, Branding, DaVinci Resolve</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Digital Marketing</h3>
              <p className="text-slate-700 leading-relaxed">SEO & Analytics, <a href="https://www.pexels.com/@bimql69/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Photography</a> & <a href="https://www.youtube.com/@bimql.69" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Videography</a>, Meta Business Suite (Ads, Commerce, Creator Studio)</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Collaboration</h3>
              <p className="text-slate-700 leading-relaxed">Multilingual, Documentation, Reports, Team Coordination, Creative Problem-Solving, Android Studio, Xcode</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Experience</h2>
          
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-900">Creative & Digital Media Executive</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 mt-1">
                  <a href="https://yarsa.tech" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600">Yarsa Tech Pvt. Ltd.</a>
                  <span>•</span>
                  <span>Feb 2022 – Present</span>
                  <span>•</span>
                  <span>Kaski, Nepal</span>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">
                Designed web and mobile interfaces, brand identities, and product packaging. Created multimedia content and managed social media campaigns, boosting engagement and visibility by 30%.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://apps.apple.com/us/app/nizi/id6747067063" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  Nizi iOS <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300">|</span>
                <a href="https://play.google.com/store/apps/details?id=app.nizi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  Nizi Android <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300">|</span>
                <a href="https://www.nizistore.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  Nizistore <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-900">UX/UI Designer</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 mt-1">
                  <span className="font-medium">Virtual Technology Pvt. Ltd.</span>
                  <span>•</span>
                  <span>Oct 2023 – Present</span>
                  <span>•</span>
                  <span>Kaski, Nepal</span>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">
                Designed user-friendly mobile and web interfaces, high-fidelity visuals, and internal marketing materials. Developed React Native apps, including Virtual Patro (Android & iOS), integrating UI components with developers. Contributed to UNDP projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://apps.apple.com/us/app/virtual-patro/id6749359154" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  Virtual Patro iOS <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300">|</span>
                <a href="https://play.google.com/store/apps/details?id=com.virtualpatro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  Android <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300">|</span>
                <a href="https://virtualpatro.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                  Web <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-400"></div>
              <div className="mb-2">
                <h3 className="text-xl font-bold text-slate-900">Graphic Designer</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-600 mt-1">
                  <span className="font-medium">Medicos International</span>
                  <span>•</span>
                  <span>Mar 2021 – Sep 2021</span>
                  <span>•</span>
                  <span>Chitwan, Nepal</span>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">
                Contributed to app interface design and coding, creating wireframes, high-fidelity visuals, branding, and graphics. Produced marketing visuals and edited promotional videos.
              </p>
              <a href="https://medicos-pdf-qr72.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
                Medicos App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h2>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Ludo Universe – iOS & Android Game</h3>
                  <p className="text-sm text-slate-600">2024 • Virtual Technology</p>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.bimql.ludo" target="_blank" rel="noopener noreferrer" 
                   className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <span>View App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-slate-700 leading-relaxed mb-2">
                Developed entirely by me as a personal project; published via Virtual Technology's Play Store account (thanks to the team for support).
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                Developed and published a cross-platform mobile game using React Native & Expo with scalable architecture. Integrated Google Firebase for analytics & crash reporting and AdMob for monetization, achieving 15K+ downloads and 60-69 daily active users.
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Tech Stack:</span> React Native, Expo, TypeScript, Redux Toolkit, React Redux, Redux Persist, React Navigation, Lottie, MMKV, AdMob, Firebase
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Mehendi App</h3>
                  <p className="text-sm text-slate-600">2025 • Personal Project</p>
                </div>
                <a href="https://expo.dev/preview/update?message=Live+demo+for+CV&updateRuntimeVersion=1.0.3&createdAt=2025-11-25T15%3A04%3A09.321Z&slug=exp&projectId=4e5f17db-fa98-464d-a6d4-30d3ce176bd1&group=bb898859-1dd4-4ff8-b4fc-eef03dbd82b4" target="_blank" rel="noopener noreferrer" 
                   className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-slate-700 leading-relaxed mb-2">
                <span className="font-semibold">Learning Project:</span> Built a full-stack mobile app for mehendi design gallery showcase, allowing users to download, share designs, and try AR "on-hand" experience.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                Developed with React Native, Expo, TypeScript, Redux, Firebase backend, and AdMob for monetization simulation. Focused on app architecture, state management, and interactive features; not yet published.
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Tech Stack:</span> React Native, Expo, TypeScript, Redux, Firebase, AdMob
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">NEC Engineering Mock Test App</h3>
                  <p className="text-sm text-slate-600">2022-Ongoing • Personal Project</p>
                </div>
                <a href="https://expo.dev/preview/update?message=Live+demo+for+CV&updateRuntimeVersion=1.0.3&createdAt=2025-11-25T15%3A04%3A09.321Z&slug=exp&projectId=4e5f17db-fa98-464d-a6d4-30d3ce176bd1&group=bb898859-1dd4-4ff8-b4fc-eef03dbd82b4" target="_blank" rel="noopener noreferrer" 
                   className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-slate-700 leading-relaxed mb-2">
                <span className="font-semibold">Inspiration & Ideation:</span> Bridged the gap for iOS users by providing a feature-rich NEC engineering mock test app with real-time progress tracking.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                <span className="font-semibold">Features:</span> Short & long tests, semester-wise & subject-wise selection, engineering field-specific tests, real-time progress tracking; future plans include leaderboard/high-ranker lists.
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Tech Stack:</span> React Native, Expo, TypeScript, Redux Toolkit, MMKV, Redux Persist
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Restro Management System (Collaborator)</h3>
                <p className="text-sm text-slate-600">2024-Ongoing • <a href="https://vrestro.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vRestro</a></p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-2">
                Contributing to the redesign of the mobile and web app for a restaurant management SaaS platform, focusing on improved UI/UX and frontend workflows.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3">
                <span className="font-semibold">Contributions:</span> Assisted in designing customer and staff interfaces, performance testing, bug fixing, and feature integration.
              </p>
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Project Scope:</span> Revamping existing system to enhance features, interactivity, and usability across mobile and web platforms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Portfolios</h3>
              <p className="text-slate-700 mb-2"><span className="font-semibold">Web Development:</span> Built multiple websites for learning and personal projects using React, HTML/CSS, PHP, and other stacks.</p>
              <p className="text-slate-700 mb-2"><span className="font-semibold">Tech Stack:</span> React, TypeScript, Redux Toolkit, PHP, HTML/CSS, Firebase</p>
              <p className="text-slate-700 mb-4"><span className="font-semibold">Features:</span> Interactive UI/UX, responsive design, project showcases, and basic backend integrations.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://bimql.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-white border border-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">Online Notepad</a>
                <a href="https://sandhyathapa.com.np/" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-white border border-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">Showcase 1</a>
                <a href="https://gofley.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-white border border-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">Showcase 2</a>
                <a href="https://niruta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-white border border-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">Showcase 3</a>
                <a href="https://www.projekt69.com/" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-white border border-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">Showcase 4</a>
                <a href="https://bimql69.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-white border border-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">Showcase 5</a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">AI Tools:</span> ChatGPT, Cursor, Claude, and Perplexity — leveraged for ideation, coding assistance, and problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Bachelor in Computer Application</h3>
                <p className="text-slate-600 mt-1">
                  <a href="https://lagrandee.edu.np/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">La Grandee International College</a>, <a href="http://pu.edu.np" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Pokhara University</a>
                </p>
              </div>
              <span className="text-slate-600 font-medium">2017 – 2024</span>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              Focused on hands-on projects, practical implementations, and real-world applications, excelling in functional system development and teamwork.
            </p>

            <div className="space-y-4 pl-4 border-l-2 border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Hospital Management System | C (Terminal-based)</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Developed a terminal-based system using C for patient records, and report generation, demonstrating File Handling and Data Structures.
                </p>
                <a href="#" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                  View on Github <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Movie Ticket Management System | VB.NET, Visual Studio</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Built a full-feature ticket booking system in VB.NET (Visual Studio), implementing SQL for database integration, seat selection, and booking confirmation.
                </p>
                <a href="https://docs.google.com/document/d/1JVq-9CAiO_HFBfJBT-P5hWqp9B7ivo5m/edit" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                  View Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Gantavya – Travel Web & Mobile App | PHP, HTML, CSS, MySQL, Java</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Created a travel platform using PHP, Java (Android Studio), HTML/CSS, and MySQL, designing a responsive, cross-platform UI/UX for information sharing and itinerary planning.
                </p>
                <a href="https://docs.google.com/document/d/1tcoNNsewpZHVoieQhny3lN97ih27hwUo/edit?usp=sharing&ouid=110063633935976546370&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                  View Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">References</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <p className="font-semibold text-slate-900 mb-4">Available upon request</p>
            <div className="space-y-3 text-slate-700">
              <div className="flex flex-wrap gap-2">
                <span className="font-medium text-slate-900">Narayan Thapa Magar (Mentor)</span>
                <span className="text-slate-400">|</span>
                <span>Mobile App Developer, <a href="https://www.fieldex.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FieldEx</a></span>
                <span className="text-slate-400">|</span>
                <a href="mailto:narayan@fieldex.com" className="text-blue-600 hover:underline">narayan@fieldex.com</a>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="http://www.yarsa.tech" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:text-blue-600">Yarsa Tech Pvt Ltd.</a>
                <span className="text-slate-400">|</span>
                <span>+977 98009-59042</span>
                <span className="text-slate-400">|</span>
                <a href="mailto:mail@yarsa.tech" className="text-blue-600 hover:underline">mail@yarsa.tech</a>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.vtechnepal.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:text-blue-600">Virtual Tech Pvt Ltd.</a>
                <span className="text-slate-400">|</span>
                <span>+977 98251 67890</span>
                <span className="text-slate-400">|</span>
                <a href="mailto:info@vtechnepal.com" className="text-blue-600 hover:underline">info@vtechnepal.com</a>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://lagrandee.edu.np/" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 hover:text-blue-600">LA Grandee International College</a>
                <span className="text-slate-400">|</span>
                <span>+977 61 573163/582844</span>
                <span className="text-slate-400">|</span>
                <a href="mailto:info@lagrandee.edu.np" className="text-blue-600 hover:underline">info@lagrandee.edu.np</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            Crafted with passion by Bimal Chhetry • <a href="mailto:bimal.chhetry122@gmail.com" className="text-blue-600 hover:underline">Get in touch</a>
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;