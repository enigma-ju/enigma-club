
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Hackathon",
      description: "A 24-hour coding marathon to solve real-world problems through technology",
      date: "April 15, 2025",
      time: "10:00 AM - 10:00 AM (Next day)",
      location: "SET Jain",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "AI Workshop Series",
      description: "Learn the fundamentals of artificial intelligence and machine learning",
      date: "May 5-7, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "SET Jain, Room 003",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "Industry Connect",
      description: "Networking event with tech industry professionals and alumni",
      date: "June 12, 2025",
      time: "4:00 PM - 7:00 PM",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-enigma-950 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join us for exciting events, workshops, and competitions designed to enhance your skills and expand your network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="rounded-xl overflow-hidden shadow-lg border border-enigma-100 dark:border-enigma-800 bg-white dark:bg-enigma-900 transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] opacity-0 animate-fade-in" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-enigma-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-enigma-900 dark:text-white">{event.title}</h3>
                <p className="text-enigma-700 dark:text-enigma-300 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-enigma-600 dark:text-enigma-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-enigma-600 dark:text-enigma-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-enigma-600 dark:text-enigma-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-enigma-50 dark:bg-enigma-800/50 border-t border-enigma-100 dark:border-enigma-700">
                <a 
                  href="#" 
                  className="block w-full text-center py-2 px-4 rounded-lg bg-enigma-600 hover:bg-enigma-700 text-white font-medium transition-colors"
                >
                  Register Now
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
