"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useSelector } from "react-redux";

type CartItem = {
  id?: string | number;
  title?: string;
  name?: string;
  price?: number | string;
  quantity?: number;
  category?: string;
  subCategory?: string;
  subcategory?: string;
};

export default function BookingForm() {
  const router = useRouter();

  // ✅ REDUX CART
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const tax = Math.round(totalPrice * 0.05);
  const fee = 9.44;
  const taxAndFee = tax + fee;
  const finalAmount = totalPrice + taxAndFee;

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

  // Load saved data
  useEffect(() => {
    const savedAddress = localStorage.getItem("selectedAddress");
    const savedStep = localStorage.getItem("bookingStep");
    const savedBookingData = localStorage.getItem("bookingFormData");

    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }

    if (savedStep) {
      setStep(Number(savedStep));
    } else {
      setStep(1);
    }

    if (savedBookingData) {
      const data = JSON.parse(savedBookingData);

      setServiceType(data.serviceType || "On-site Service");
      setSelectedDate(data.selectedDate ?? 0);
      setSelectedSlot(data.selectedSlot || "");
      setCustomerName(data.customerName || "");
      setCustomerPhone(data.customerPhone || "");
      setCustomerEmail(data.customerEmail || "");
      setPaymentMethod(data.paymentMethod || "Cash After Service");
      setComment(data.comment || "");
    }
  }, []);

  // Save step
  useEffect(() => {
    localStorage.setItem("bookingStep", step.toString());
  }, [step]);

  // Save all form data
  useEffect(() => {
    const bookingData = {
      serviceType,
      selectedDate,
      selectedSlot,
      customerName,
      customerPhone,
      customerEmail,
      paymentMethod,
      comment,
    };

    localStorage.setItem("bookingFormData", JSON.stringify(bookingData));
  }, [
    serviceType,
    selectedDate,
    selectedSlot,
    customerName,
    customerPhone,
    customerEmail,
    paymentMethod,
    comment,
  ]);

  // Validation
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

                {/* ALL CART SERVICES */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    🛠️
                  </div>
                  <div className="w-full">
                    <p className="text-[15px] text-gray-500 font-medium">
                      Booked Services
                    </p>

                    <div className="space-y-3 mt-2">
                      {cartItems.length > 0 ? (
                        cartItems.map((item: CartItem, index: number) => {
                          const serviceName = item.title || item.name || "Service";
                          const servicePrice = Number(item.price || 0);
                          const quantity = Number(item.quantity || 1);
                          const category = item.category || "N/A";
                          const subCategory =
                            item.subCategory || item.subcategory || "N/A";

                          return (
                            <div
                              key={item.id || index}
                              className="border border-[#dcecf3] rounded-2xl p-3 bg-white"
                            >
                              <p className="text-[17px] font-semibold text-[#1f1f1f]">
                                {index + 1}. {serviceName}
                              </p>

                              <p className="text-[14px] text-gray-600 mt-1">
                                Category: <span className="font-medium">{category}</span>
                              </p>

                              <p className="text-[14px] text-gray-600">
                                Subcategory: <span className="font-medium">{subCategory}</span>
                              </p>

                              <div className="flex justify-between items-center mt-2">
                                <p className="text-[14px] text-gray-600">
                                  Qty: <span className="font-medium">{quantity}</span>
                                </p>

                                <p className="text-[16px] font-semibold text-[#2f8db7]">
                                  ₹ {(servicePrice * quantity).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-[18px] font-semibold text-[#1f1f1f]">
                          No service selected
                        </p>
                      )}
                    </div>
                  </div>
                </div>

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
                      {dates[selectedDate].full} • {selectedSlot || "Not Selected"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                    👤
                  </div>
                  <div>
                    <p className="text-[15px] text-gray-500 font-medium">
                      Customer Details
                    </p>
                    <p className="text-[18px] font-semibold text-[#1f1f1f]">
                      {customerName || "Not Provided"}
                    </p>
                    <p className="text-[15px] text-gray-600 mt-1">
                      📞 {customerPhone || "No Phone"}
                    </p>
                    <p className="text-[15px] text-gray-600">
                      ✉️ {customerEmail || "No Email"}
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

                {comment && (
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#edf5f9] flex items-center justify-center text-[24px]">
                      📝
                    </div>
                    <div>
                      <p className="text-[15px] text-gray-500 font-medium">Comment</p>
                      <p className="text-[18px] font-semibold text-[#1f1f1f]">
                        {comment}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* PRICE BREAKDOWN */}
              <div className="border-t border-gray-200 mt-6 pt-5 space-y-3">
                <div className="flex justify-between text-[16px] text-gray-600">
                  <span>Item Total</span>
                  <span>₹ {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-[16px] text-gray-600">
                  <span>Tax & Fee</span>
                  <span>₹ {taxAndFee.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <p className="text-[18px] font-semibold text-gray-700">
                    Total Payable
                  </p>
                  <p className="text-[22px] font-bold text-[#2f8db7]">
                    ₹ {finalAmount.toFixed(2)}
                  </p>
                </div>
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
                localStorage.removeItem("bookingFormData");
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