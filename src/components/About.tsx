import { Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-enigma-500" />,
      title: "Innovation",
      description:
        "We foster innovative thinking and creative problem-solving approaches to tackle real-world challenges.",
    },
    {
      icon: <Users className="w-6 h-6 text-enigma-500" />,
      title: "Community",
      description:
        "We build a supportive community of like-minded individuals passionate about learning and growth.",
    },
    {
      icon: <Zap className="w-6 h-6 text-enigma-500" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, pushing boundaries and setting new standards.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-enigma-50/50 dark:bg-enigma-900/30 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            About <span className="text-gradient">Enigma</span>
          </h2>
          <p
            className="text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Enigma is a student-led club dedicated to fostering innovation,
            collaboration, and technical excellence among passionate students.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className="w-full lg:w-1/2 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative mx-auto max-w-md">
              <div className="aspect-video rounded-2xl overflow-hidden border border-enigma-200 dark:border-enigma-700 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-enigma-700/20 to-enigma-300/20 backdrop-blur-sm"></div>
                <div className="glass dark:glass-dark absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-enigma-900 dark:text-white text-center sm:text-left">
                      Our Mission
                    </h3>
                    <p className="text-sm sm:text-base text-enigma-800 dark:text-enigma-100 text-center sm:text-left">
                      The mission of ENIGMA is to bring like-minded enthusiasts
                      together to share their ideas for simultaneous development
                      by mutual contribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-enigma-200 dark:bg-enigma-700 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-enigma-100 dark:bg-enigma-800 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 sm:p-6 rounded-xl glass dark:glass-dark opacity-0 animate-fade-in transform transition-all hover:translate-x-2"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-3 bg-white dark:bg-enigma-800 rounded-lg shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-enigma-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-enigma-700 dark:text-enigma-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
