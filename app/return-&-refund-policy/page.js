import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Return and Refund Policy | Obiram",
};

export default function ReturnAndRefundPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="py-16 h-full mb-96">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Return and Refund Policy
          </h1>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-8 text-base">
            <p>
              All payments made to Obiram are non-refundable. Refunds may be
              issued only in cases of duplicate transactions or erroneous
              charges caused by system errors.
            </p>

            <p>
              Approved refunds will be processed within 7–10 business days and
              credited to the original payment method.
            </p>

            <p>
              If auto-renewal is enabled, any payment automatically deducted
              (including via bKash) is non-refundable.
            </p>

            <p>
              For questions or concerns, please contact us at{" "}
              <a
                href="mailto:myobiram@gmail.com"
                className="text-blue-600 hover:underline"
              >
                myobiram@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
