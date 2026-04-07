"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What exactly is DOFIX?",
    answer:
      "DOFIX is a trusted home services platform offering AC repair service, plumbing services, electrical repair services, washing machine repair, appliance repair services, and more at your doorstep.",
  },
  {
    question: "How can I book a service on DOFIX?",
    answer:
      "Booking is simple—choose your required service, select a convenient date and time, and confirm your request for quick doorstep home services.",
  },
  {
    question: "Are DOFIX professionals verified?",
    answer:
      "Yes, all DOFIX professionals are trained, skilled, and background-verified to provide safe, reliable, and trusted home services.",
  },
  {
    question: "What payment options does DOFIX accept?",
    answer:
      "We accept multiple payment methods, including UPI, debit card, credit card, and cash after service for all professional home services.",
  },
  {
    question: "Do you offer same-day bookings?",
    answer:
      "Yes, same-day booking is available for many local home services, depending on service availability in your area.",
  },
  {
    question: "How can I contact DOFIX for help?",
    answer:
      "You can contact us through our website, email, or customer support number for any help related to our home services.",
  },
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