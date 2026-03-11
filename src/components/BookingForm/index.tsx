"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {

  const router = useRouter();

  const [address, setAddress] = useState<any>(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("selectedAddress");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);


const dates = [
  { day: "Thu", date: "26 Feb" },
  { day: "Fri", date: "27 Feb" },
  { day: "Sat", date: "28 Feb" },
  { day: "Sun", date: "01 Mar" },
  { day: "Mon", date: "02 Mar" },
];

const slots = [
  "09:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","01:00 PM","02:00 PM",
  "03:00 PM","04:00 PM","05:00 PM",
  "06:00 PM","07:00 PM","08:00 PM"
];



  // Service
  const [serviceType, setServiceType] = useState("On-site Service");
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Customer Details
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {

    if (!customerName || !customerPhone || !selectedSlot) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const bookingData = {
      serviceType,
      date: dates[selectedDate],
      slot: selectedSlot,
      paymentMethod,
      customerName,
      customerPhone,
      customerEmail,
      comment,
    };

    console.log("Booking Data:", bookingData);

    // 👉 Replace this with your Laravel API
    // await fetch("/api/create-booking", { method: "POST", body: JSON.stringify(bookingData) });

    setTimeout(() => {
      setLoading(false);
      alert("Booking Created Successfully ✅");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 pt-55">
      <div className="max-w-[800px] mx-auto bg-white rounded-3xl shadow-xl p-6 space-y-6">

        <div>
          <h2 className="text-2xl font-semibold text-[#14455b]">
            Book Service
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose your location and fill address details
          </p>
        </div>

        {/* Service Preference */}
        <div>
          <h3 className="font-medium mb-3">Service Preference</h3>
          <div className="flex gap-3">
            {["On-site Service", "Technician Pickup"].map((type) => (
              <button
                key={type}
                onClick={() => setServiceType(type)}
                className={`flex-1 py-2 rounded-xl border transition ${
                  serviceType === type
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Select Date */}
        <div>
          <h3 className="font-medium mb-3">Select Date</h3>
          <div className="flex gap-3 overflow-x-auto">
            {dates.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`min-w-[80px] py-2 rounded-xl border text-sm ${
                  selectedDate === index
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                <div>{item.day}</div>
                <div>{item.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Select Slot */}
        <div>
          <h3 className="font-medium mb-3">Select Slot</h3>
          <div className="grid grid-cols-3 gap-3">
            {slots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 rounded-xl border text-sm ${
                  selectedSlot === slot
                    ? "bg-[#3683ab] text-white border-[#3683ab]"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="font-medium mb-3">Payment Method</h3>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              Cash After Service
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
              />
              Online After Service
            </label>
          </div>
        </div>

        {/* Customer Details */}
        <div>
          <h3 className="font-medium mb-3">Assign Customer Details</h3>

          <div className="space-y-4">

            <div className="relative">
              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:border-[#3683ab]"
              />
              <span className="absolute left-3 top-3.5 text-gray-400">👤</span>
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder="Customer Phone"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:border-[#3683ab]"
              />
              <span className="absolute left-3 top-3.5 text-gray-400">📞</span>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Customer Email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:border-[#3683ab]"
              />
              <span className="absolute left-3 top-3.5 text-gray-400">✉️</span>
            </div>

          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-medium mb-3">Add Address</h3>
          <div
            onClick={() => router.push("/booking-address")}
            className="w-full border p-3 rounded-xl cursor-pointer flex justify-between items-center text-gray-500 hover:border-[#3683ab]"
          >
           <span>
             {address ? address.fullAddress : "Select an Address"}
           </span>
            ✏️
          </div>
        </div>

        {/* Comment */}
        <div>
          <h3 className="font-medium mb-3">Any Comment</h3>
           <textarea
            placeholder="Write comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#3683ab]"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleBooking}
          disabled={loading}
          className="w-full bg-[#3683ab] hover:bg-[#14455b] text-white py-4 rounded-2xl font-semibold text-lg transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Create Booking"}
        </button>

      </div>
    </div>
  );
}