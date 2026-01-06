import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "About us | Obiram",
};

export default function AboutUs() {
  return (
    <>
     <Navbar />
    <section className="py-16 h-full mb-96">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Our Story
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-8 text-base">
          <p>
            Obiram is an all-in-one commerce platform built to help businesses
            start, manage, and grow—without complexity.
          </p>

          <p>
            We support small retailers, independent sellers, D2C brands, and
            growing enterprises with simple tools to sell online, manage
            orders, handle payments, and scale with confidence.
          </p>

          <p>
            Obiram was created with one simple belief: growing a business
            shouldn’t be complicated.
          </p>

          <p>
            We saw many businesses struggle to move online—not because they
            lacked ambition, but because existing tools were too complex,
            expensive, or hard to manage. So we built Obiram to change that.
          </p>

          <p>
            A platform that’s easy to start, simple to run, and powerful enough
            to grow with you—from your first sale to high-volume daily
            operations.
          </p>

          <p>
            We believe businesses shouldn’t outgrow their platform. That’s why
            Obiram is built for long-term growth—from local sellers to
            large-scale commerce.
          </p>

          <p>
            Obiram is more than store-building tools.
            <br />
            It’s a platform built to help businesses grow with confidence.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
