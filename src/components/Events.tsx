import { Calendar, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import hackathon from "/hackathon.jpeg";
import raceRole from "/race-role.jpeg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "INCEPTRIX 2025",
      description:
        "Get ready for INCEPTRIX 2025 – a 24-hour National-Level Hackathon hosted by JAIN (Deemed-to-be University), Faculty of Engineering and Technology.",
      date: "May 8-9, 2025",
      time: "24 hours",
      location: "Jain Global Campus",
      image: hackathon,
      url: "https://inceptrix2025.xyz/",
    },
  ];

  const pastEvents = [
    {
      id: 2,
      title: "Race for Roles 2025",
      description:
        "The race has officially begun — and it's your time to register!",
      subDescription: "Join the Enigma fam and become part of a club.",
      date: "Last Date: Monday, 14th April",
      location: "Jain Global Campus",
      image: raceRole,
      url: "https://forms.gle/7nX5t3Vnb2hgMNy98",
    },
  ];

  interface Event {
    id: number;
    title: string;
    description: string;
    subDescription?: string;
    date: string;
    time?: string;
    location: string;
    image: string;
    url: string;
  }

  const EventCard = ({
    event,
    isPast = false,
  }: {
    event: Event;
    isPast?: boolean;
  }) => (
    <div
      className="group rounded-2xl overflow-hidden shadow-xl border border-enigma-100 dark:border-enigma-800 bg-white dark:bg-enigma-900 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px] opacity-0 animate-fade-in"
      style={{ animationDelay: `0.3s` }}
    >
      <div className="relative aspect-auto overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-enigma-900/90 via-enigma-900/50 to-transparent"></div>
        {isPast && (
          <div className="absolute top-4 right-4 bg-enigma-800/80 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" /> Completed
          </div>
        )}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
            {event.title}
          </h3>
        </div>
      </div>

      <div className="p-6 lg:p-7">
        <p className="text-enigma-700 dark:text-enigma-300 text-base lg:text-lg mb-4">
          {event.description}
        </p>
        {event.subDescription && (
          <p className="text-enigma-600 dark:text-enigma-400 mb-6">
            {event.subDescription}
          </p>
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
      {/* button only for upcoming events */}
      {!isPast && (
        <div className="px-6 lg:px-7 py-5 bg-enigma-50 dark:bg-enigma-800/50 border-t border-enigma-100 dark:border-enigma-700">
          <a
            data-umami-event="Register Event"
            href={event.url}
            target="_blank"
            className="block w-full text-center py-2.5 px-6 rounded-xl bg-enigma-600 hover:bg-enigma-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-enigma-600/20"
          >
            Register Now
          </a>
        </div>
      )}
      {isPast && (
        <div className="px-6 lg:px-7 py-5 bg-enigma-50 dark:bg-enigma-800/50 border-t border-enigma-100 dark:border-enigma-700">
          <button
            data-umami-event="Register Event"
            className="disabled block w-full text-center py-2.5 px-6 rounded-xl bg-enigma-600 hover:bg-enigma-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-enigma-600/20"
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section id="events" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-enigma-50 dark:from-enigma-950 dark:to-enigma-900 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
            Our <span className="text-gradient">Events</span>
          </h2>
          <p
            className="text-lg text-enigma-700/80 dark:text-enigma-200/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Join us for exciting events, workshops, and competitions designed to
            enhance your skills and expand your network.
          </p>
        </div>

        <div className="lg:flex lg:gap-10 justify-between mb-16 lg:items-start lg:max-w-5xl mx-auto">
          {/* Upcoming Events Section */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] flex-grow bg-enigma-200 dark:bg-enigma-800"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-enigma-700 dark:text-enigma-200 mx-4 flex items-center">
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-enigma-500" />{" "}
                Upcoming Events
              </h3>
              <div className="h-[1px] flex-grow bg-enigma-200 dark:bg-enigma-800"></div>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] flex-grow bg-enigma-200 dark:bg-enigma-800"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-enigma-700 dark:text-enigma-200 mx-4 flex items-center">
                <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-enigma-500" />{" "}
                Past Events
              </h3>
              <div className="h-[1px] flex-grow bg-enigma-200 dark:bg-enigma-800"></div>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
