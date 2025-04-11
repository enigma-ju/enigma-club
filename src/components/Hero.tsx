
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-enigma-100/50 to-white dark:from-enigma-950/50 dark:to-enigma-900/30 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-enigma-200 dark:bg-enigma-800/30 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-enigma-300 dark:bg-enigma-700/30 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* <div className="inline-block mb-4 px-4 py-1 rounded-full bg-enigma-100 dark:bg-enigma-900 border border-enigma-200 dark:border-enigma-800">
            <span className="text-sm font-medium text-enigma-700 dark:text-enigma-300">
              Student Club
            </span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Welcome to <span className="text-gradient">Enigma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-enigma-800/80 dark:text-enigma-100/80 mb-8 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Unraveling the mysteries of technology, innovation, and creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <a 
              href="#events" 
              className="px-8 py-3 rounded-lg bg-enigma-600 hover:bg-enigma-700 text-white font-medium transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Race for Roles
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 rounded-lg bg-white dark:bg-enigma-900 text-enigma-600 dark:text-enigma-300 font-medium border border-enigma-200 dark:border-enigma-700 hover:border-enigma-300 dark:hover:border-enigma-600 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Discover More
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-white dark:bg-enigma-900 text-enigma-600 dark:text-enigma-300 font-medium border border-enigma-200 dark:border-enigma-700 hover:border-enigma-300 dark:hover:border-enigma-600 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Join Us
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-2 rounded-full bg-white/30 dark:bg-enigma-900/30 backdrop-blur-sm border border-white/40 dark:border-enigma-700/40 hover:bg-white/50 dark:hover:bg-enigma-800/50 transition-all">
            <ArrowDown className="text-enigma-600 dark:text-enigma-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
