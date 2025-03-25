
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-enigma-500" />,
      title: "Email Us",
      details: "info@enigmaclub.edu",
      link: "mailto:info@enigmaclub.edu"
    },
    {
      icon: <Phone className="w-5 h-5 text-enigma-500" />,
      title: "Call Us",
      details: "(123) 456-7890",
      link: "tel:+11234567890"
    },
    {
      icon: <MapPin className="w-5 h-5 text-enigma-500" />,
      title: "Visit Us",
      details: "Student Center, Room 305, University Campus",
      link: "https://maps.google.com"
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
            <a 
              key={item.title}
              href={item.link}
              target={item.title === "Visit Us" ? "_blank" : undefined}
              rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center text-center p-6 rounded-xl glass dark:glass-dark opacity-0 animate-fade-in transition-transform hover:scale-105" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="p-4 rounded-full bg-enigma-100 dark:bg-enigma-800 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-enigma-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-enigma-700 dark:text-enigma-300">{item.details}</p>
            </a>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-enigma-500 hover:bg-enigma-600 text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-enigma-500 hover:bg-enigma-600 text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.998 4.926c-.881.391-1.828.654-2.825.774 1.014-.609 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.015-.628.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-enigma-500 hover:bg-enigma-600 text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
