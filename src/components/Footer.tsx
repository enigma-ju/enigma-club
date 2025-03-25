import { ArrowUp, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-enigma-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Enigma</h3>
            <p className="text-enigma-300 mb-6 max-w-md">
              A student-led club dedicated to fostering innovation,
              collaboration, and technical excellence among passionate students.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ju_enigma/?hl=en"
                className="p-3 rounded-full bg-enigma-800 hover:bg-enigma-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/enigma-club-ju/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-enigma-800 hover:bg-enigma-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 " />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-enigma-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-enigma-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-enigma-300 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-enigma-300 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-enigma-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-enigma-300">
                JAIN (Deemed-to-be-University)
              </li>
              <li className="text-enigma-300">
                Faculty of Engineering and Technology (FET)
              </li>
              <li className="text-enigma-300">enigmaclub5@gmail.com</li>
              <li className="text-enigma-300">+91 96967 24664</li>
            </ul>
          </div>
        </div>

        <hr className="border-enigma-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-enigma-400 text-sm">
            &copy; {currentYear} Enigma Student Club. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-enigma-800 hover:bg-enigma-700 transition-colors text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
