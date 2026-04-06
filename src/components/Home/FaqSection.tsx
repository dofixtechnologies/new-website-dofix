"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What exactly is DOFIX?",
    answer:
      "DOFIX is a home services platform that helps you find skilled professionals for a range of household tasks. DOFIX connects you with trusted professionals for AC servicing, plumbing repairs, home cleaning, and electrical work—ensuring every job is handled safely, efficiently, and with care.",
  },
  {
    question: "What is the process to schedule a service on DOFIX?",
    answer:
      "Booking a service on DOFIX is quick and simple. Just choose the service you need on the website, select a convenient date and time, and confirm your booking. Once your request is placed, a professional will be assigned to visit your location.",
  },
  {
    question: "Does DOFIX check the background of its service providers?",
    answer:
      "Yes. All professionals on DOFIX go through proper background checks and skill verification before joining the platform. This ensures that you receive reliable, safe, and high-quality service every time.",
  },
  {
    question: "How is the price of a service calculated?",
    answer:
      "The cost of a service depends on the type of work required. Basic service prices are shown before booking. If additional repairs or parts are needed, the technician will inform you before proceeding.",
  },
  {
    question: "Do you charge for inspection or visiting?",
    answer:
      "Some services may include a small inspection or visit charge. This fee covers the technician’s time and inspection of the issue. The exact amount will be displayed during booking.",
  },
  {
    question: "What payment options does DOFIX accept?",
    answer:
      "DOFIX supports multiple payment methods, including UPI, debit cards, credit cards, and cash after service.",
  },
  {
    question: "Do you offer same-day bookings?",
    answer:
      "In many cases, we offer same-day or quick services depending on availability. During booking, you can easily view and select from the available time slots.",
  },
  {
    question: "Does DOFIX provide AC setup services?",
    answer:
      "DOFIX provides complete AC services, including professional installation, uninstallation, servicing, and repair by trained experts. Our technicians ensure safe installation and proper functioning.",
  },
  {
    question: "How can I get assistance from DOFIX?",
    answer:
      "You can contact our support team through the contact page on the website, email, or customer support number. Our team is always here to assist you whenever you need help.",
  },
  {
    question: "How do I become a service partner with DOFIX?",
    answer:
      "Professionals can apply through the partner registration page to join the DOFIX network.",
  },
  // {
  //   question: "Can I change my booking time after scheduling?",
  //   answer:
  //     "Yes, you can easily reschedule your booking if your plans change. Simply update the booking time from your confirmation page or contact our support team for assistance.",
  // },
  // {
  //   question: "In which cities does DOFIX operate?",
  //   answer:
  //     "DOFIX currently operates in selected cities, and we are continuously expanding to new areas. You can check service availability by entering your location or pin code on our website during booking.",
  // },
  // {
  //   question: "Why choose DOFIX?",
  //   answer:
  //     "DOFIX makes home maintenance simple by connecting you with verified professionals, transparent pricing, and convenient booking. Our goal is to provide reliable services that save you time and effort.",
  // },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#3683ab] mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2c4d]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Find quick answers to the most common questions about DOFIX home
            services, booking process, pricing, and support.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 h-fit ${
                  isOpen
                    ? "bg-[#47a5f0] border-[#47a5f0] shadow-lg"
                    : "bg-white border-[#dbe5ef]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                >
                  <span
                    className={`text-base md:text-lg font-medium leading-snug ${
                      isOpen ? "text-white" : "text-[#0b2c4d]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "text-white rotate-180" : "text-[#0b2c4d]"
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp size={22} strokeWidth={2.2} />
                    ) : (
                      <ChevronDown size={22} strokeWidth={2.2} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 md:px-6 pb-5 pt-0 border-t text-sm md:text-[15px] leading-7 ${
                        isOpen
                          ? "border-white/30 text-white"
                          : "border-transparent text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}