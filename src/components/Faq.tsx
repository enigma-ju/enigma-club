import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string | JSX.Element;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-enigma-800">
      <button
        className="flex w-full justify-between py-4 text-left font-medium text-purple-700 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`h-6 w-6 transform text-enigma-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="text-purple-600 dark:text-purple-400">{answer}</div>
      </div>
    </div>
  );
};

export function Faq() {
  const faqData = [
    {
      question: "Who is Enigma for?",
      answer: (
        <div className="space-y-2">
          <p>Enigma is for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The thinkers, the innovators, and the doers</li>
            <li>Students from any department who dare to go beyond the usual</li>
            <li>Those with ideas, drive, and the hunger to grow</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do I need to be a tech expert to join?",
      answer: "No, Enigma welcomes students from all departments. You just need curiosity, creativity, and a willingness to learn and collaborate.",
    },
    {
      question: "What kind of activities does Enigma organize?",
      answer: "Enigma hosts workshops, hackathons, tech talks, project collaborations, and various innovation-centered events that foster learning and growth.",
    },
    {
      question: "How can I become a member?",
      answer: "You can join Enigma by applying during recruitment drives, or reaching out to us through the contact section below.",
    },
    {
      question: "Can first-year students join?",
      answer: "Absolutely! We encourage students from all years to join. Enigma is a great place to start your innovation journey from day one.",
    },
  ];

  return (
    <section id="faq" className="py-16 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-lg text-purple-500 dark:text-purple-500">
            Everything you need to know about Enigma
          </p>
        </div>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}