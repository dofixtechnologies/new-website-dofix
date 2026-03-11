import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const RefundPolicy = () => {
  return (
    <>
      <Breadcrumb title={"Refund & Cancellation Policy"} pages={["Refund Policy"]} />

      <section className="w-full min-h-screen bg-gray-50 py-10 sm:py-14 lg:py-20">
        <div className="w-full px-4 sm:px-8 lg:px-20 xl:px-32">
          <div className="bg-white w-full rounded-2xl shadow-lg p-6 sm:p-10 lg:p-16">

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed -mt-20">
              This Refund & Cancellation Policy outlines how you may cancel a booking or request a refund 
              for services purchased through the Platform operated by{" "}
              <span className="font-semibold text-[#3683ab]">
                Dofix Technologies Private Limited
              </span>{" "}
              (“Dofix”, “Company”, “we”, “our”, or “us”).
              <br /><br />
              This policy applies to all services booked via <b>www.dofix.in</b> and related mobile
              applications (collectively, the “Platform”).
              <br /><br />
              By booking a service, you agree to this Refund & Cancellation Policy.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                1. Cancellation Policy
              </h2>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cancellations must be requested before the scheduled service time.</li>
                <li>
                  If cancelled sufficiently in advance (minimum <b>2 hours before scheduled time</b>),
                  no cancellation charges may apply.
                </li>
                <li>Late cancellations may attract time-based cancellation fees.</li>
                <li>
                  If the service professional has already been assigned and is en route,
                  a service visit charge may apply.
                </li>
                <li>
                  If the customer is unavailable at the scheduled time, the booking may be treated
                  as a <b>“No-Show”</b> and cancellation charges may apply.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                2. Refund Policy
              </h2>

              <h3 className="font-semibold text-lg mb-2">(A) Eligible Refund Cases</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Service was not delivered due to professional absence.</li>
                <li>Booking was cancelled by Dofix.</li>
                <li>Duplicate payment due to technical error.</li>
                <li>Verified service deficiencies after internal review.</li>
                <li>Damaged spare parts supplied during service (if proven).</li>
                <li>Refund requests must be raised within <b>48 hours</b> of service completion.</li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">(B) Non-Refundable Situations</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Change of mind after successful service delivery.</li>
                <li>Incorrect service selection by the customer.</li>
                <li>Pre-existing issues not disclosed at booking.</li>
                <li>Dissatisfaction unrelated to agreed service scope.</li>
                <li>Customer refusal after service has commenced.</li>
                <li>
                  Services involving perishable or custom-ordered spare parts once installed.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                3. Service Deficiency & Disputes
              </h2>

              <p className="text-gray-600 leading-relaxed">
                In case of dissatisfaction, you must notify Dofix within <b>48 hours</b> and provide
                supporting evidence (photos/videos if applicable).
                <br /><br />
                After review, Dofix may offer:
              </p>

              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-3">
                <li>Re-service at no additional charge</li>
                <li>Partial refund</li>
                <li>Service credits</li>
                <li>Full refund (where justified)</li>
              </ul>

              <p className="text-gray-600 mt-3">
                The final decision after internal review shall be at the sole discretion of Dofix.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                4. Warranty Related Issues
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Certain services may include a limited warranty as specified at the time of booking.
                Warranty does not cover misuse, normal wear and tear, third-party interference,
                or unrelated defects.
                <br /><br />
                If a product carries manufacturer warranty, customers must directly approach
                the manufacturer.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                5. Refund Processing
              </h2>

              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Approved refunds will be processed within <b>7–10 business days</b>.</li>
                <li>Refunds will be credited to the original payment method.</li>
                <li>
                  For cash payments, refunds (if approved) will be processed via bank transfer
                  upon submission of required details.
                </li>
                <li>
                  Payment gateway or convenience charges may be non-refundable unless required by law.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                6. Contact Us
              </h2>

              <p className="text-gray-600 leading-relaxed">
                For cancellations or refund requests, please contact:
                <br /><br />

                <b>Dofix Technologies Private Limited</b>
                <br />
                B-30, Sector-6, Noida, Uttar Pradesh – 201301
                <br />
                Email: support@dofix.in
                <br />
                Website: www.dofix.in
                <br /><br />
                We aim to respond to refund-related queries within <b>7 working days</b>.
              </p>
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

export default RefundPolicy;