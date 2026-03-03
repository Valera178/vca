import { useState } from 'react';
import { DynamicIsland } from './components/DynamicIsland';
import { HeroSection } from './components/HeroSection';
import { Syllabus } from './components/Syllabus';
import { LichessIntegration } from './components/LichessIntegration';
import { ReviewsSection } from './components/ReviewsSection';
import { StudentCabinet } from './components/StudentCabinet';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div className="min-h-screen bg-slate-900 font-sans antialiased text-slate-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-100">
      <DynamicIsland
        isLoggedIn={isLoggedIn}
        onLoginClick={toggleLogin}
        onLogoutClick={toggleLogin}
      />

      {isLoggedIn ? (
        <StudentCabinet />
      ) : (
        <main>
          <HeroSection />
          <div className="relative z-10">
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0B1120] to-slate-900 -z-10" />
             <Syllabus />
             <LichessIntegration />
             <ReviewsSection />
          </div>
        </main>
      )}

      {!isLoggedIn && (
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-black/40 relative z-20">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
             <div className="flex items-center gap-2 text-emerald-500/50">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center font-bold text-xs">V</div>
                <span>Valery Chess Academy © {new Date().getFullYear()}</span>
             </div>
             <p className="mt-2 text-slate-600 max-w-md mx-auto">
                Инновационная образовательная экосистема для системного развития интеллекта через шахматы.
             </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
