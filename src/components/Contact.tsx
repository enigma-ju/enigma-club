
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-enigma-500" />,
      title: "Email Us",
      details: "enigmaclub5@gmail.com",
      link: "mailto:info@enigmaclub.edu"
    },
    {
      icon: <Phone className="w-5 h-5 text-enigma-500" />,
      title: "Call Us",
      details: "+91 96967 24664",
      link: "+91 96967 24664"
    },
    {
      icon: <MapPin className="w-5 h-5 text-enigma-500" />,
      title: "Visit Us",
      details: "JAIN (Deemed-to-be-University), Faculty of Engineering and Technology (FET)",
      link: ""
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-enigma-950 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Have questions or want to join Enigma? Reach out to us through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div 
              key={item.title}
              rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center text-center p-6 rounded-xl glass dark:glass-dark opacity-0 animate-fade-in transition-transform hover:scale-105" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="p-4 rounded-full bg-enigma-100 dark:bg-enigma-800 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-enigma-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-enigma-700 dark:text-enigma-300">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="https://www.instagram.com/ju_enigma/?hl=en" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-enigma-500 hover:bg-enigma-600 text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/enigma-club-ju/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-enigma-500 hover:bg-enigma-600 text-white transition-colors">
          <Linkedin className="w-5 h-5 text-white" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
