"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [serviceType, setServiceType] = useState("On-site Service");
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [address, setAddress] = useState<any>(null);

  const [paymentMethod, setPaymentMethod] = useState("Cash After Service");
  const [comment, setComment] = useState("");

  const dates = [
    { day: "Tue", date: "17", full: "17 Mar 2026" },
    { day: "Wed", date: "18", full: "18 Mar 2026" },
    { day: "Thu", date: "19", full: "19 Mar 2026" },
    { day: "Fri", date: "20", full: "20 Mar 2026" },
    { day: "Sat", date: "21", full: "21 Mar 2026" },
  ];

  const slots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM",
    "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  // ✅ Load saved step + address correctly
  useEffect(() => {
    const savedAddress = localStorage.getItem("selectedAddress");
    const savedStep = localStorage.getItem("bookingStep");

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }

    if (savedStep) {
      setStep(Number(savedStep));
    } else {
      setStep(1);
    }
  }, []);

  // ✅ Save step whenever it changes
  useEffect(() => {
    localStorage.setItem("bookingStep", step.toString());
  }, [step]);

  // ✅ Validation
  const validateForm = () => {
    if (step === 1) {
      if (!selectedSlot) {
        alert("Please select a time slot");
        return false;
      }
    }

    if (step === 2) {
      if (!customerName.trim()) {
        alert("Please enter customer name");
        return false;
      }

      if (customerPhone.length !== 10) {
        alert("Phone number must be 10 digits");
        return false;
      }

      if (!customerEmail.trim()) {
        alert("Please enter email");
        return false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
        alert("Invalid email");
        return false;
      }

      if (!address) {
        alert("Please select address");
        return false;
      }
    }

    return true;
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] flex justify-center items-start pt-50 pb-10">
      {/* CONTAINER */}
      <div className="w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[800px] bg-white rounded-3xl shadow-xl overflow-hidden relative pb-28">
        
        {/* HEADER */}
        <div className="flex items-center px-4 py-4 border-b border-gray-200">
          <button onClick={() => router.back()} className="text-xl text-[#1f1f1f]">
            ←
          </button>
          <h2 className="flex-1 text-center text-lg font-semibold text-[#1f1f1f]">
            Book Service
          </h2>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center justify-between px-6 mt-5">
          {["Schedule", "Details", "Review"].map((label, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-base
                ${step >= i + 1 ? "bg-[#3683ab] text-white" : "border border-gray-300 text-gray-400"}`}
              >
                {step > i + 1 ? "✓" : i + 1}
              </div>

              <p
                className={`mt-2 text-sm ${
                  step === i + 1 ? "text-[#3683ab]" : "text-gray-400"
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="px-4 mt-6">
            <h3 className="text-[26px] font-bold text-[#1f1f1f]">
              Step 1 • Schedule Service
            </h3>

            <p className="text-[15px] text-gray-500 mt-2 mb-5">
              Choose service type, date and preferred time slot
            </p>

            <h4 className="font-semibold text-[18px] mb-3 text-[#1f1f1f]">
              Service Preference
            </h4>

            <div className="flex gap-3 mb-6">
              {["On-site Service", "Technician Pickup"].map((type) => (
                <button
                  key={type}
                  onClick={() => setServiceType(type)}
                  className={`flex-1 py-4 rounded-2xl text-sm font-medium ${
                    serviceType === type
                      ? "border-2 border-[#3683ab] text-[#3683ab]"
                      : "bg-white border border-gray-300 text-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <h4 className="font-semibold text-[18px] mb-3 text-[#1f1f1f]">
              Select Date
            </h4>

            <div className="flex gap-3 mb-6 overflow-x-auto pb-1">
              {dates.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDate(i)}
                  className={`min-w-[74px] py-3 rounded-2xl text-sm ${
                    selectedDate === i
                      ? "bg-[#3683ab] text-white"
                      : "bg-white border border-gray-300 text-[#1f1f1f]"
                  }`}
                >
                  <div>{d.day}</div>
                  <div className="font-semibold">{d.date}</div>
                </button>
              ))}
            </div>

            <h4 className="font-semibold text-[18px] mb-3 text-[#1f1f1f]">
              Select Slot
            </h4>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-3 rounded-2xl text-sm ${
                    selectedSlot === slot
                      ? "border-2 border-[#3683ab] text-[#3683ab]"
                      : "border border-gray-300 text-gray-500"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <div className="px-4 mt-6">
            <h3 className="text-[26px] font-bold text-[#1f1f1f]">
              Step 2 • Customer & Address
            </h3>

            <p className="text-[15px] text-gray-500 mt-2 mb-5">
              Assign customer details and select service location
            </p>

            <h4 className="font-semibold text-[18px] mb-3 text-[#1f1f1f]">
              Assign Customer Details
            </h4>

            <div className="space-y-3 mb-6">
              <input
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-2xl p-4 outline-none"
              />

              <input
                placeholder="Customer Phone"
                value={customerPhone}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  if (value.length <= 10) {
                    setCustomerPhone(value);
                  }
                }}
                className="w-full bg-white border border-gray-300 rounded-2xl p-4 outline-none"
              />

              <input
                placeholder="Customer Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-2xl p-4 outline-none"
              />
            </div>

            <h4 className="font-semibold text-[18px] mb-3 text-[#1f1f1f]">
              Service Address
            </h4>

            <div
              onClick={() => {
                localStorage.setItem("bookingStep", "2");
                router.push("/booking-address");
              }}
              className="bg-white border border-gray-300 rounded-2xl p-4 flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-500 text-[15px] pr-3">
                {address ? address.fullAddress : "Select an Address"}
              </span>

              <div className="w-10 h-10 bg-[#e3eef3] rounded-full flex items-center justify-center shrink-0">
                ✏️
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <div className="px-4 mt-6 pb-10">
            <h3 className="text-[28px] font-bold text-[#1f1f1f] leading-tight">
              Step 3 • Payment & Review
            </h3>

            <p className="text-[15px] text-gray-500 mt-2 mb-6 leading-6">
              Choose payment method, add notes and confirm booking
            </p>

            <h4 className="text-[18px] font-semibold text-[#1f1f1f] mb-3">
              Payment Method
            </h4>

            <div className="bg-white border border-gray-200 rounded-[24px] overflow-hidden mb-6">
              <button
                onClick={() => setPaymentMethod("Cash After Service")}
                className="w-full flex items-center gap-4 px-5 py-6 text-left"
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "Cash After Service"
                      ? "border-[#3a8fbe]"
                      : "border-gray-400"
                  }`}
                >
                  {paymentMethod === "Cash After Service" && (
                    <div className="w-4 h-4 rounded-full bg-[#3a8fbe]" />
                  )}
                </div>

                <span className="text-[17px] font-medium text-[#1f1f1f]">
                  Cash After Service
                </span>
              </button>

              <div className="border-t border-gray-200" />

              <button
                onClick={() => setPaymentMethod("Online After Service")}
                className="w-full flex items-center gap-4 px-5 py-6 text-left"
              >
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "Online After Service"
                      ? "border-[#3a8fbe]"
                      : "border-gray-400"
                  }`}
                >
                  {paymentMethod === "Online After Service" && (
                    <div className="w-4 h-4 rounded-full bg-[#3a8fbe]" />
                  )}
                </div>

                <span className="text-[17px] font-medium text-[#1f1f1f]">
                  Online After Service
                </span>
              </button>
            </div>

            <h4 className="text-[18px] font-semibold text-[#1f1f1f] mb-3">
              Any Comment
            </h4>

            <textarea
              rows={3}
              placeholder="Write comment here (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 rounded-[18px] px-5 py-5 text-[16px] outline-none resize-none placeholder:text-gray-400 mb-8"
            />

            <h4 className="text-[18px] font-semibold text-[#1f1f1f] mb-4">
              Booking Summary
            </h4>

            <div className="rounded-[24px] border border-[#d9edf4] bg-[#f8fdff] p-4 shadow-sm">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    ⚙️
                  </div>
                  <div>
                    <p className="text-[15px] text-gray-500 font-medium">
                      Service Preference
                    </p>
                    <p className="text-[18px] font-semibold text-[#1f1f1f]">
                      {serviceType}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    📅
                  </div>
                  <div>
                    <p className="text-[15px] text-gray-500 font-medium">
                      Date & Slot
                    </p>
                    <p className="text-[18px] font-semibold text-[#1f1f1f]">
                      {dates[selectedDate].full} • {selectedSlot || "07:00 PM"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    👤
                  </div>
                  <div>
                    <p className="text-[15px] text-gray-500 font-medium">
                      Assigned Customer
                    </p>
                    <p className="text-[18px] font-semibold text-[#1f1f1f]">
                      {customerName || "Abc"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    📍
                  </div>
                  <div>
                    <p className="text-[15px] text-gray-500 font-medium">Address</p>
                    <p className="text-[18px] font-semibold text-[#1f1f1f] leading-7">
                      {address?.fullAddress || "No address selected"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    💳
                  </div>
                  <div>
                    <p className="text-[15px] text-gray-500 font-medium">Payment</p>
                    <p className="text-[18px] font-semibold text-[#1f1f1f]">
                      {paymentMethod}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-5 flex items-center justify-between">
                <p className="text-[18px] font-semibold text-gray-500">
                  Total Payable
                </p>
                <p className="text-[22px] font-bold text-[#2f8db7]">
                  ₹ 1057.34
                </p>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM BUTTON */}
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
          {step === 1 && (
            <button
              onClick={() => {
                if (!validateForm()) return;
                setStep(2);
              }}
              className="w-full bg-[#3683ab] text-white py-4 rounded-2xl text-lg font-medium"
            >
              Continue
            </button>
          )}

          {step === 2 && (
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/2 border border-gray-300 py-4 rounded-2xl text-[#3683ab] font-medium"
              >
                Back
              </button>

              <button
                onClick={() => {
                  if (!validateForm()) return;
                  setStep(3);
                }}
                className="w-1/2 bg-[#3683ab] text-white py-4 rounded-2xl font-medium"
              >
                Review Booking
              </button>
            </div>
          )}

          {step === 3 && (
            <button
              onClick={() => {
                localStorage.removeItem("bookingStep");
                localStorage.removeItem("selectedAddress");
                router.push("/thank-you");
              }}
              className="w-full bg-[#3a8fbe] text-white py-4 rounded-2xl text-[18px] font-medium shadow-md"
            >
              Create Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}