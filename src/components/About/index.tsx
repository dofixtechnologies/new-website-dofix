import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} pages={["About"]} />

      <section className="w-full min-h-screen bg-gray-50 py-10 sm:py-14 pt-20 
      lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-32">
          
          <div className="bg-white w-full rounded-2xl shadow-lg p-6 sm:p-10 lg:p-16">
<h3 className="text-[#14455b] text-xl sm:text-3xl lg:text-4xl font-semibold leading-relaxed mb-6 -mt-20">

Your Trusted Partner for Affordable & Reliable Home Services

</h3>
            <p className="text-gray-600 text-base sm:text-5 leading-relaxed mb-6 ">
               Welcome to <span className="font-semibold text-[#3683ab]">Dofix</span>.
             where convenience meets quality.
Based in Noida, Uttar Pradesh, we proudly serve homes and businesses across the Delhi NCR region, delivering trusted home services right to your doorstep.
<br></br>
At DoFix, we understand that maintaining a home can be time-consuming and stressful. That’s why we bring together skilled professionals, transparent pricing, and reliable service — all in one place. Whether it’s a quick repair, a complete home refresh, or routine maintenance, we ensure every job is done with care and precision.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                1. Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed">
 DoFix is a customer-focused home service company committed to simplifying your daily life. We combine affordability, professionalism, and convenience to deliver services that meet modern home needs.
<br></br>
From AC repairs to home cleaning, painting to plumbing — we make sure your home stays comfortable, functional, and beautiful.             </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
               2. Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
  Our mission is simple:
<br></br>
<span className="font-semibold text-[#14455b]">To provide high-quality, affordable home services that deliver comfort, reliability, and peace of mind.
<br></br></span>
We aim to become your long-term service partner by offering dependable solutions backed by trained professionals and responsive customer support.            </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                3. What We Offer
              </h2>
              <p className="text-gray-600 leading-relaxed">
          We provide a comprehensive range of home services to keep your property in top condition:
<br></br>
<br></br>
<span className="font-semibold text-[#14455b]">Appliance Services</span>
<br></br>
1. AC Repair & Installation
<br></br>
2. AC Rental Installation
<br></br>
3. Refrigerator Repair
<br></br>
4. Washing Machine Repair
<br></br>
5. Water Purifier Repair
<br></br>
<span className="font-semibold text-[#14455b]">Home Maintenance</span>
<br></br>
1. Electrician Services
<br></br>
2. Plumbing Solutions
<br></br>
3. Carpentry Work
<br></br>
4. Professional Painting
<br></br>
5. Sofa Repair
<br></br>
<span className="font-semibold text-[#14455b]">Specialized Work</span>
<br></br>
1. Interior Work
<br></br>
2. Steel Fabrication
<br></br>
3. Glass Fabrication
<br></br>
<span className="font-semibold text-[#14455b]"> Cleaning Services</span>
<br></br>
1. Deep Home Cleaning
<br></br>
2. Kitchen Cleaning
<br></br>
3. Bathroom Cleavning
<br></br>
4. Sofa & Mattress Cleaning
<br></br>
<span className="font-semibold text-[#14455b]">Event Services</span>
<br></br>
1. Wedding Event Support
<br></br>
2. On-site Assistance for Special Occasions    </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                4. Why Choose DoFix?
              </h2>
              <p className="text-gray-600 leading-relaxed">
              ✔ Affordable & Transparent Pricing
              <br></br>
✔ Skilled & Verified Professionals
<br></br>
✔ Quick Response & On-Time Service
<br></br>
✔ Service Across Delhi NCR
<br></br>
✔ Customer Satisfaction Focused
<br></br>
We believe every service should be delivered with professionalism, honesty, and attention to detail.     </p>
            </div>

             <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 mt-8">
               5. Our Commitment
              </h2>
              <p className="text-gray-600 leading-relaxed">
At DoFix, your comfort is our priority. Whether it’s repairing an appliance, refreshing your walls, or preparing your home for a special event, we ensure every service meets the highest standards of quality and reliability.
<br></br>
Let DoFix take care of your home — so you can focus on what truly matters.  </p>          </div>


 
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
