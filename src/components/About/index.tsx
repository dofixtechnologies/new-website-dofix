"use client";

import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} pages={["About"]} />
      
      <section className="w-full min-h-screen bg-gray-50 py-10 sm:py-14 pt-20 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-32">
          <div className="bg-white w-full rounded-2xl shadow-lg p-6 sm:p-10 lg:p-16">
            
            <h3 className="text-[#14455b] text-xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed mb-6 -mt-20">
              DOFIX - Trusted Home Repair Services in Delhi NCR
            </h3>

            {/* Top Intro Section */}
            <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-6 items-start mb-6">
              {/* Left Image */}
              <div className="w-full flex justify-center lg:justify-start">
                <Image
                  src="/images/about/first.webp"
                  alt="Customer Satisfaction"
                  width={600}
                  height={400}
                  className="w-full max-w-[320px] h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Right Paragraph */}
              <p className="text-gray-600 text-base sm:text-5 leading-relaxed">
                <span className="font-semibold text-[#3683ab]">DoFix</span> is a trusted home maintenance company dedicated to providing reliable and high-quality home repair services across Delhi NCR.
                We understand that your home is more than just a place to live—it’s where your life happens.
                From small repairs to complete home maintenance solutions, our goal is to make home care simple, convenient, and stress-free.
                <br />
                <br />
                Founded with the vision of transforming the way homeowners access repair and maintenance support, DoFix connects customers with experienced home repair experts who deliver professional service with attention to detail.
                We believe that every homeowner deserves quick, dependable, and affordable home repair services without the hassle of searching for multiple vendors.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                  1. Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our team comprises trained technicians, skilled craftsmen, and service professionals specializing in a range of home services, including electrical work, plumbing, appliance repair, carpentry, painting, and more.
                  As a reliable home maintenance service provider in the region, we aim to offer comprehensive solutions for all household maintenance needs.
                  <br />
                  <br />
                  Today, DoFix proudly serves homeowners, tenants, landlords, and property managers in Delhi NCR who require dependable home services.
                </p>
              </div>

              <div className="w-full flex justify-center lg:justify-end">
                <Image
                  src="/images/about/who-we-are.webp"
                  alt="Who We Are"
                  width={600}
                  height={400}
                  className="w-full max-w-[320px] h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="w-full flex justify-center lg:justify-start order-1 lg:order-1">
                <Image
                  src="/images/about/our-mission.webp"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="w-full max-w-[320px] h-auto rounded-2xl object-cover"
                />
              </div>

              <div className="order-2 lg:order-2">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                  2. Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is simple — to deliver professional home repair services that make home maintenance easy, affordable, and accessible for everyone.
                  <br />
                  <br />
                  We aim to become the most trusted house maintenance company by focusing on three core values:
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Quality Service</span>
                  <br />
                  We believe every repair should be done with precision and care. Our technicians are trained to deliver professional home repairs that last.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Transparency & Trust</span>
                  <br />
                  Customers should always know what they’re paying for. That’s why we maintain clear pricing, honest recommendations, and reliable service.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Convenience for Customers</span>
                  <br />
                  Homeowners shouldn’t have to struggle to find dependable service providers. Our platform makes it easy to book expert home repair services in just a few clicks.
                  <br />
                  <br />
                  Our goal is not only to fix problems but also to help homeowners maintain their properties efficiently and prevent future issues.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                  3. What We Do
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At DoFix, we provide a wide range of home repair services designed to keep your home functioning smoothly and looking its best.
                  Whether you need a small repair or complete maintenance support, our experts are ready to help.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Our services include:</span>
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">AC Repair and Installation / Uninstallation Services</span>
                  <br />
                  From quick repairs to safe setup or removal, our experts provide reliable doorstep service.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Electrical Repairs & Installations</span>
                  <br />
                  From fixing faulty switches to installing lighting systems, our technicians ensure safe and efficient electrical solutions.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Plumbing Services</span>
                  <br />
                  Leaking taps, clogged drains, pipe repairs, or bathroom fittings—our professionals handle all plumbing tasks with expertise.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Appliance Repair</span>
                  <br />
                  We repair and service appliances like washing machines, refrigerators, water purifiers, and air conditioners.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Carpentry & Woodwork</span>
                  <br />
                  Our skilled carpenters provide furniture repairs, door and window fixes, and custom woodwork.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Painting & Home Improvement</span>
                  <br />
                  Give your home a fresh look with our painting and renovation solutions.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">Deep Cleaning & Maintenance</span>
                  <br />
                  We also offer professional cleaning and maintenance services to ensure your home remains hygienic and comfortable.
                  <br />
                  <br />
                  As one of the dependable housing maintenance companies, we aim to provide a complete solution under one roof so customers don’t need to contact multiple service providers.
                </p>
              </div>

              <div className="w-full flex justify-center lg:justify-end">
                <Image
                  src="/images/about/what-we-do.webp"
                  alt="What We Do"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                4. Our Process
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We have designed a simple and efficient process that allows homeowners to book professional home repair services quickly and easily.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Step 1: Book a Service</span>
                <br />
                Customers can easily schedule their required home repair services through our website or app. Simply select the service you need and choose a convenient time.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Step 2: Technician Assignment</span>
                <br />
                Once the booking is confirmed, we assign a skilled technician who specializes in the required service.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Step 3: Inspection & Estimate</span>
                <br />
                Our expert visits your home, inspects the issue, and provides a transparent estimate before starting the work.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Step 4: Repair & Service</span>
                <br />
                After approval, our home repair experts complete the job using professional tools and quality materials.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Step 5: Quality Check & Completion</span>
                <br />
                Before finishing the service, we ensure everything works perfectly and meets our quality standards.
                <br />
                <br />
                This streamlined process helps customers get quick and hassle-free home services in Delhi NCR.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 mt-8">
                5. What Makes DoFix Different
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Unlike traditional repair services, DoFix focuses on technology-driven service booking combined with professional workmanship.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Verified Professionals</span>
                <br />
                All technicians associated with DoFix go through background checks and skill verification.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Easy Online Booking</span>
                <br />
                Customers can book home repair services online in minutes.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Transparent Pricing</span>
                <br />
                We provide clear pricing before work begins, ensuring no hidden charges.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Fast Doorstep Services</span>
                <br />
                Our professionals arrive at your home with proper tools and equipment to solve problems efficiently.
                <br />
                <br />
                <span className="font-semibold text-[#14455b]">Customer Support</span>
                <br />
                Our support team ensures smooth service coordination and customer satisfaction.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="w-full flex justify-center lg:justify-start order-1 lg:order-1">
                <Image
                  src="/images/about/customer-satisfaction.webp"
                  alt="Customer Satisfaction"
                  width={600}
                  height={400}
                  className="w-full max-w-[320px] h-auto rounded-2xl object-cover"
                />
              </div>

              <div className="order-2 lg:order-2">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 mt-8">
                  6. Customer Satisfaction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Customer satisfaction is at the heart of everything we do.
                  At DoFix, we focus on delivering high-quality home repair services that solve problems effectively and build long-term trust with our customers.
                  <br />
                  <br />
                  Our team listens carefully to customer requirements and ensures that every repair or maintenance task is completed with professionalism.
                  We continuously improve our services based on customer feedback and strive to maintain the highest industry standards.
                  <br />
                  <br />
                  Many homeowners across Delhi NCR trust DoFix as their preferred house maintenance company because we value transparency, reliability, and quality workmanship.
                  <br />
                  <br />
                  <span className="font-semibold text-[#14455b]">
                    Our commitment is simple:
                  </span>
                  <br />
                  Your comfort and satisfaction are our top priorities.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t pt-6 text-sm text-gray-500">
              Last Updated: {new Date().getFullYear()}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;