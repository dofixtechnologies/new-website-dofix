"use client";

import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";

const Contact = () => {

  // ✅ STATE
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    enquiry: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  // ✅ HANDLE CHANGE
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors: any = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Name is required";
    }

    if (!formData.enquiry.trim()) {
      newErrors.enquiry = "Enquiry is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <>
      <Breadcrumb title={"Contact"} pages={["Contact"]} />

      <section className="py-20 bg-gray">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

          {/* NEW CONTENT SECTION */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#14455b] mb-4">
              Get in Touch with DoFix | Home Services Experts
            </h1>

            <h2 className="text-lg text-gray-600 mb-6">
              Your home deserves proper care. So whenever something feels off — just contact us, and we will handle it from there.
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Home problems never come at a good time. A leaking tap, a broken switch, a wall that needs fixing—we know how frustrating that feels.
              That is exactly why DoFix Home Service is here. We offer a full range of home solutions, including plumbing, electrical, carpentry,
              appliance repair, and painting. No matter the issue with your home, you can trust us to handle it.
              <br /><br />
              We look forward to hearing from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 sm:p-10">

              <h3 className="text-xl font-semibold text-gray-800 mb-8">
                Send a Message
              </h3>

              <p className="text-gray-600 mb-6">
                If you have a specific request, please complete the form. Our DoFix Home Service team will contact you shortly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3683ab] outline-none"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Surname"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3683ab] outline-none"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Enquiry
                    </label>
                    <input
                      type="text"
                      name="enquiry"
                      onChange={handleChange}
                      placeholder="Type your enquiry"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3683ab] outline-none"
                    />
                    {errors.enquiry && (
                      <p className="text-red-500 text-sm">{errors.enquiry}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3683ab] outline-none"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    onChange={handleChange}
                    placeholder="Type your message"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#3683ab] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#3683ab] text-white px-8 py-3 rounded-lg hover:bg-[#14455b] transition"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6">

              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Contact DoFix
              </h3>

              <p className="text-gray-600 mb-6">
                Contact DoFix to let us handle your concerns. Our customer care team listens attentively,
                responds promptly, and ensures you receive the appropriate assistance every time.
              </p>

              <div className="space-y-5 text-gray-600">

                <div>
                  <span className="font-semibold text-[#14455b]">Email Us:</span>
                  <br />
                  <a href="mailto:contact@dofix.in" className="text-black">
                    contact@dofix.in
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-[#14455b]">Call Us:</span>
                  <br />
                  <a href="tel:+918383849291" className="text-black">
                    +91 8383849293
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-[#14455b]">Visit Us:</span>
                  <br />
                  B-30, Sector -06, Noida,<br />
                  Uttar Pradesh, 201301
                </div>

              </div>

              <div className="mt-6 text-sm text-gray-500">
                Show map here
              </div>

            </div>

          </div>
        </div>

        <div className="mt-10 w-full ">
          <div className="w-full max-w-[75%] mx-auto h-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/place/DOFIX/@28.5922201,77.3131555,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5d299ab59bf:0xf344f6052d87445e!8m2!3d28.5922201!4d77.3157304!16s%2Fg%2F11x7dpwbq8!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DoFix Location Map"
            ></iframe>
          </div>
        </div>

      </section>
    </>
  );
};

export default Contact;