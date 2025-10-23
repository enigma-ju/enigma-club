import { Github, Linkedin, Mail } from "lucide-react";
import tech from "/leads/tech.jpeg";
import lead from "/leads/lead.jpeg";
import coLead from "/leads/co-lead.jpeg";
import creative from "/leads/creative.jpeg";
import operation from "/leads/operation.jpeg";
import photography from "/leads/photography.jpeg";
import resource from "/leads/resource.jpeg";
import social from "/leads/social.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Yamuna Sharma D",
      role: "Lead",
      bio: "Always drawn to art and creativity, i love finding stories in colors, design and the little details that often go unnoticed ",
      image: lead,
      social: {
        email: "yamusharma529@gmail.com",
        linkedin: "http://linkedin.com/in/yamuna-sharma-192a2029b",
        github: "https://github.com/yamunasharma24",
      },
    },
    // {
    //   /* The code snippet you provided is defining a member of a team in a React component.
    //   Specifically, this part of the code is defining the details of a team member with the
    //   following information: */
    //   id: 2,
    //   name: "Yamuna Sharma Daa",
    //   role: "Co-Lead",
    //   bio: "Always drawn to art and creativity, i love finding stories in colors, design and the little details that often go unnoticed ",
    //   image: coLead,
    //   social: {
    //     email: "yamusharma529@gmail.com",
    //     linkedin: "http://linkedin.com/in/yamuna-sharma-192a2029b",
    //     github: "https://github.com/yamunasharma24",
    //   },
    // },
    {
      id: 3,
      name: "Krishal Karna",
      role: "Technical Lead",
      bio: "Turning data into decisions — one model at a time.",
      image: tech,
      social: {
        email: "karnakreeshal@gmail.com",
        linkedin: "https://www.linkedin.com/in/krishalkarna/",
        github: "https://github.com/kreeshal17",
      },
    },
    {
      id: 4,
      name: "Shaili Srivastava ",
      role: "Operation Lead",
      bio: "Passionate about technology and problem-solving. I love building efficient systems, optimizing workflows, and constantly learning new stuff to stay ahead.",
      image: operation,
      social: {
        email: "23btrcn026@jainuniversity.ac.in",
        linkedin: "https://www.linkedin.com/in/shaili-srivastava0908/",
        github: "https://github.com/ShailiSrivastava",
      },
    },

    // {
    //   id: 5,
    //   name: "Yashraj Sinha",
    //   role: "Social Media Manager",
    //   bio: "Pushing boundaries and building innovative solutions.",
    //   image: social,
    //   social: {
    //     email: "yashrajsinha05@gmail.com",
    //     linkedin: "https://www.linkedin.com/in/yashraj-sinha-1323062a3/",
    //     github: "https://github.com/Yash05Raj",
    //   },
    // },

    {
      id: 6,
      name: "Aakash Agarwal",
      role: "Resource Lead",
      bio: "Passionate technologist solving real-world challenges",
      image: resource,
      social: {
        email: "aakashrkl603@gmail.com",
        linkedin: "https://www.linkedin.com/in/aakashagarwal1609/",
        github: "https://github.com/AaKaShAgArWaLs",
      },
    },
    {
      id: 7,
      name: "Ayadee Aphiwatamorn",
      role: "Creative lead",
      bio: "Creativity isn’t just what i do…it’s how i see the world. i love turning ideas into something visual, meaningful and uniquely mine",
      image: creative,
      social: {
        email: "ayadee.aphiwatamorn@gmail.com",
        linkedin: "http://linkedin.com/in/ayadee-aphiwatamorn1878",
        github: "https://github.com/AyadeeAphiwatamorn",
      },
    },
    {
      id: 8,
      name: "Suyog Lal Shrestha",
      role: "Photography Lead",
      bio: "Eager and enthusiastic about exploring new things.",
      image: photography,
      social: {
        email: "sathyac2004@gmail.com",
        linkedin: "https://www.linkedin.com/in/",
        github: "https://github.com/",
      },
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Email copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-enigma-50/50 dark:bg-enigma-900/30 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p
            className="text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Meet the dedicated students behind Enigma who work tirelessly to
            create valuable experiences.
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
                      <button
                        onClick={() => copyToClipboard(member.social.email)}
                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </button>

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
                  <h3 className="text-lg font-bold text-enigma-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-enigma-500 dark:text-enigma-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-enigma-700 dark:text-enigma-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Team;
