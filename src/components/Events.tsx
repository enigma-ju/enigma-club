import { Calendar, MapPin, Clock } from "lucide-react";
import hackathon from "/hackathon.jpeg"
// import raceRole from "/race-role.jpeg"

const Events = () => {
  const events = [
    {
      id: 1,
      title: "INCEPTRIX 2025",
      description: "Get ready for INCEPTRIX 2025 – a 24-hour National-Level Hackathon hosted by JAIN (Deemed-to-be University), Faculty of Engineering and Technology.",
      subDescription: "",
      date: "May 8-9, 2025",
      time: "",
      location: "Jain Global Campus",
      image: hackathon,
      url: "https://inceptrix2025.xyz/"
      // image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-enigma-50 dark:from-enigma-950 dark:to-enigma-900 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-lg text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join us for exciting events, workshops, and competitions designed to enhance your skills and expand your network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:gap-8 max-w-xl mx-auto">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group rounded-2xl overflow-hidden shadow-xl border border-enigma-100 dark:border-enigma-800 bg-white dark:bg-enigma-900 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] opacity-0 animate-fade-in" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-enigma-900/90 via-enigma-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{event.title}</h3>
                </div>
              </div>
              
              <div className="p-6 lg:p-7">
                <p className="text-enigma-700 dark:text-enigma-300 text-base lg:text-lg mb-4">{event.description}</p>
                {event.subDescription && (
                  <p className="text-enigma-600 dark:text-enigma-400 mb-6">{event.subDescription}</p>
                )}
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-enigma-600 dark:text-enigma-400">
                    <Calendar className="w-5 h-5 mr-3 text-enigma-500 dark:text-enigma-400" />
                    <span>{event.date}</span>
                  </div>
                  
                  {event.time && (
                  <div className="flex items-center text-sm text-enigma-600 dark:text-enigma-400">
                    <Clock className="w-5 h-5 mr-3 text-enigma-500 dark:text-enigma-400" />
                    <span>{event.time}</span>
                  </div>
                  )}
                  
                  <div className="flex items-center text-sm text-enigma-600 dark:text-enigma-400">
                    <MapPin className="w-5 h-5 mr-3 text-enigma-500 dark:text-enigma-400" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 lg:px-7 py-5 bg-enigma-50 dark:bg-enigma-800/50 border-t border-enigma-100 dark:border-enigma-700">
                <a
                  data-umami-event="Register Race for Roles" 
                  href={event.url}
                  target="_blank"
                  className="block w-full text-center py-2.5 px-6 rounded-xl bg-enigma-600 hover:bg-enigma-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-enigma-600/20"
                >
                  {event.url ? "Register Now" : "Coming Soon"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
