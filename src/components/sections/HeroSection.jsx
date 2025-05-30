import { NeuButton } from '../ui/NeuButton';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechAnimation from './TechAnimation'; // Import the SVG animation component

const HeroSection = ({ scrollY, mousePosition }) => {
  return (
    <section id="home" className="relative pt-20 pb-0 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile and tablet layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Text content - centered */}
          <div className="w-full text-center">
            <h1 
              className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white"
            >
              Innovating The <br />
              <span className="text-indigo-400">Digital Future</span>
            </h1>
            <p className="text-base text-slate-300 mb-8 max-w-md mx-auto">
              We create cutting-edge software and hardware solutions 
              that transform businesses and redefine what's possible in 
              the digital landscape.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-12">
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <NeuButton className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                  Explore Our Work
                </NeuButton>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="w-full">
                <button className="w-full flex items-center justify-center text-white px-8 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="mr-2">Contact Us</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
          
          {/* Animation instead of static illustration */}
          <div className="w-full">
            <div className="relative w-full max-w-xs mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-6 flex items-center justify-center">
                {/* Replace static content with the animated SVG */}
                <div className="relative z-10 w-full h-full">
                  <TechAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-12 text-left">
            <h1 
              className="text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-300 to-white"
              style={{ 
                transform: `translateY(${Math.max(0, 50 - scrollY / 5)}px)`,
                opacity: Math.max(0, 1 - scrollY / 300)
              }}
            >
              Innovating The <br />
              <span className="text-indigo-400">Digital Future</span>
            </h1>
            <p 
              className="text-lg text-slate-300 mb-8 max-w-xl"
              style={{ 
                transform: `translateY(${Math.max(0, 70 - scrollY / 4)}px)`,
                opacity: Math.max(0, 1 - scrollY / 400)
              }}
            >
              We create cutting-edge software and hardware solutions 
              that transform businesses and redefine what's possible in 
              the digital landscape.
            </p>
            <div 
              className="flex flex-row gap-4"
              style={{ 
                transform: `translateY(${Math.max(0, 90 - scrollY / 3)}px)`,
                opacity: Math.max(0, 1 - scrollY / 500)
              }}
            >
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <NeuButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_4px_14px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.6)]">
                  Explore Our Work
                </NeuButton>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button className="flex items-center justify-center text-white px-8 py-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="mr-2">Contact Us</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
          <div 
            className="md:w-1/2 relative"
            style={{ 
              transform: `translateY(${Math.max(0, 30 - scrollY / 6)}px)`,
              opacity: Math.max(0, 1 - scrollY / 300)
            }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-3xl backdrop-blur-3xl border border-white/20 shadow-2xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl backdrop-blur-3xl border border-white/10 shadow-2xl transform -rotate-3 scale-95"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/20 shadow-xl p-6 flex items-center justify-center">
                {/* Replace static content with the animated SVG */}
                <div className="relative z-10 w-full h-full">
                  <TechAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;