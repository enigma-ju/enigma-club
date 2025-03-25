
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Emma Chen",
      role: "President",
      bio: "Computer Science senior with a passion for AI and machine learning",
      image: "https://i.pravatar.cc/300?img=1",
      social: {
        email: "mailto:emma@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Vice President",
      bio: "Software Engineering junior focused on web development and UX design",
      image: "https://i.pravatar.cc/300?img=3",
      social: {
        email: "mailto:alex@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Technical Lead",
      bio: "Data Science graduate student specializing in deep learning algorithms",
      image: "https://i.pravatar.cc/300?img=5",
      social: {
        email: "mailto:priya@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Events Coordinator",
      bio: "Business and CS double major with excellent organizational skills",
      image: "https://i.pravatar.cc/300?img=7",
      social: {
        email: "mailto:marcus@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 5,
      name: "Marcus Johnson",
      role: "Events Coordinator",
      bio: "Business and CS double major with excellent organizational skills",
      image: "https://i.pravatar.cc/300?img=7",
      social: {
        email: "mailto:marcus@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      id: 6,
      name: "Marcus Johnson",
      role: "Events Coordinator",
      bio: "Business and CS double major with excellent organizational skills",
      image: "https://i.pravatar.cc/300?img=7",
      social: {
        email: "mailto:marcus@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-enigma-50/50 dark:bg-enigma-900/30 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Meet the dedicated students behind Enigma who work tirelessly to create valuable experiences for our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div 
              key={member.id}
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="bg-white dark:bg-enigma-900 rounded-xl overflow-hidden shadow-lg border border-enigma-100 dark:border-enigma-800 transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] group">
                <div className="relative aspect-square overflow-hidden bg-enigma-100 dark:bg-enigma-800">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-enigma-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="flex space-x-3 p-4">
                      <a 
                        href={member.social.email} 
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-enigma-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-enigma-500 dark:text-enigma-400 mb-2">{member.role}</p>
                  <p className="text-sm text-enigma-700 dark:text-enigma-300">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
