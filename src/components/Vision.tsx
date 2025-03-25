import { Target } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-enigma-700 dark:bg-enigma-800 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center opacity-10 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 opacity-0 animate-fade-in">
              <div className="p-1 rounded-full bg-gradient-to-br from-enigma-300 to-enigma-500 inline-block">
                <div className="p-6 bg-white dark:bg-enigma-900 rounded-full">
                  <Target className="w-20 h-20 md:w-24 md:h-24 text-enigma-500" />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-6 text-center md:text-left">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Our <span className="text-purple-600">Vision</span>
                </h2>

                <blockquote
                  className="text-xl md:text-2xl italic text-purple-500 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  "To create a community where innovation flourishes, where
                  students can transform their ideas into reality, and where
                  technology is harnessed to make a positive impact on society."
                </blockquote>

                <p
                  className="text-purple-400 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  ENIGMA provides opportunities for students to pursue their
                  personal and professional goals under the club. To enhance
                  their skill set, students are encouraged to participate in
                  group/club activities that allow them to develop leadership
                  and organisational skills apart from managerial activities.
                </p>

                <div
                  className="pt-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  <a
                    href="#contact"
                    className="inline-block px-8 py-3 rounded-lg bg-enigma-500 hover:bg-enigma-600 text-white font-medium transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Join Our Vision
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
