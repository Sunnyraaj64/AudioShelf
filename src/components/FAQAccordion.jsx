import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ question, answer, isActive, onToggle }) => {
  return (
    <li className="bg-[#171717] rounded-[10px] text-white my-2 shadow-lg">
      <h2
        onClick={onToggle}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{question}</span>
        <svg
          className={`fill-current text-white h-6 w-6 transform transition-transform duration-500 ${
            isActive ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-2 border-white overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-screen p-3" : "max-h-0"
        }`}
      >
        <p className="text-white">{answer}</p>
      </div>
    </li>
  );
};

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "When will I get access to AudioShelf?",
      answer:
        "AudioShelf is set to launch in early 2025. As a Lifetime Deal holder, you'll be among the first to gain full access upon launch. Make sure to check your inbox, you will be notified by email.",
    },
    {
      question: "What happens after I purchase the Lifetime Deal?",
      answer:
        "You'll receive immediate confirmation and regular updates leading up to the launch. Plus, you'll get access to the private feedback page to start influencing the development of AudioShelf.",
    },
    {
      question: "How does the private feedback page work?",
      answer:
        "As a Lifetime Deal holder, you'll have exclusive access to a platform where you can submit feature requests and suggestions. Our development team prioritizes this feedback to shape future updates.",
    },
    {
      question: " Is there a refund policy?",
      answer:
        "Yes! We offer a 30-day money-back guarantee after the launch date. If you're not satisfied within 30 days after launch, we'll refund your money—no questions asked.",
    },
    {
      question: "Will I really get all future updates?",
      answer:
        "Absolutely. Lifetime access includes all future features and improvements at no additional cost.",
    },
    {
      question: "Can I transfer my lifetime access to someone else?",
      answer:
        " Lifetime access is tied to your account and is non-transferable.",
    },
    {
      question:
        "Will I get access to the mobile and desktop apps when they are released?",
      answer:
        "Yes! Lifetime Deal holders will receive access to all future apps and features at no additional cost.",
    },
    {
      question: " How can I influence the development of AudioShelf?",
      answer:
        "Through the exclusive private feedback page, you can submit your ideas and requests directly to our development team. Your input will be given priority consideration.",
    },
    {
      question: " What if I have more questions before purchasing?",
      answer:
        "Feel free to contact our support team anytime. We're here to help!",
    },
    {
      question: " How is this better than the regular pay-as-you-go option?",
      answer:
        "Regular users must deposit funds (minimum $25) and pay per character for each conversion. With the Lifetime Deal, you pay once, get unlimited conversions after launch, and enjoy exclusive perks like influencing the software's development.",
    },
    {
      question: " What payment methods do you accept?",
      answer:
        "We accept all major credit cards and PayPal for your convenience.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-standard encryption to protect your personal and financial information.",
    },
    {
      question: "What happens if I miss out on the Lifetime Deal?",
      answer:
        "Once all 350 licenses are sold, the Lifetime Deal will no longer be available. You'll still be able to use AudioShelf upon launch, but under the regular pay-as-you-go pricing model.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-[1200px] my-1 mx-auto max-sm:p-5">
      <h2 className="lg:text-3xl max-sm:text-2xl font-semibold text-center text-white mb-5">
        FAQ - Order, Shipping, Etc.
      </h2>
      <ul className="flex flex-col">
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQAccordion;
