import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Privacy Policy | Obiram",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. INTRODUCTION
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to Obiram, a commerce platform operated by Nextup Global
              Ltd (“we”, “us”, or “our”).
            </p>
            <p className="text-gray-700 mb-4">
              This Privacy Policy explains how we collect, use, store, and share
              your information when you use the Obiram website, applications,
              and services (collectively, the “Service”). It also outlines your
              privacy rights and the legal protections available to you.
            </p>
            <p className="text-gray-700">
              We use your personal data to operate, improve, and provide our
              Service. By using Obiram, you agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. INFORMATION COLLECTION AND USE
            </h2>
            <p className="text-gray-700 mb-4">
              To provide and improve our Service, we may collect certain
              personally identifiable information, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details</li>
              <li>Payment and billing information</li>
              <li>Device and usage information</li>
            </ul>
            <p className="text-gray-700">
              The information we collect is retained and used only as described
              in this Privacy Policy and for lawful business purposes.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. APP & PLATFORM PERMISSIONS
            </h2>
            <p className="text-gray-700 mb-4">
              Depending on how you use Obiram (web or mobile), we may request
              access to certain device permissions to ensure proper
              functionality:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Camera – for uploading product images or documents</li>
              <li>Storage / Media – for accessing files and images</li>
              <li>
                Location – for approximate location (e.g., shipping zones,
                analytics)
              </li>
              <li>
                Network Information – to ensure connectivity and performance
              </li>
              <li>
                Bluetooth / Device Access (if applicable) – for integrations
                such as POS or external devices
              </li>
            </ul>
            <p className="text-gray-700">
              You can control or revoke permissions through your device or
              browser settings.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. LOG DATA
            </h2>
            <p className="text-gray-700 mb-4">
              Whenever you use Obiram, and in the event of an application error
              or system issue, we may collect log data through third-party
              tools. This data may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Internet Protocol (IP) address</li>
              <li>Device type and operating system</li>
              <li>Browser type and version</li>
              <li>Date and time of access</li>
              <li>Pages visited and usage statistics</li>
            </ul>
            <p className="text-gray-700">
              This information is used for troubleshooting, security, and
              service improvement.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. COOKIES & TRACKING TECHNOLOGIES
            </h2>
            <p className="text-gray-700 mb-4">
              Cookies are small data files stored on your device that help
              improve user experience.
            </p>
            <p className="text-gray-700 mb-4">
              Obiram uses cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Maintain user sessions</li>
              <li>Remember preferences</li>
              <li>Analyze platform usage</li>
              <li>Improve performance and security</li>
            </ul>
            <p className="text-gray-700">
              You may disable cookies through your browser settings, though some
              features of the Service may not function properly.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. SERVICE PROVIDERS
            </h2>
            <p className="text-gray-700 mb-4">
              We may employ trusted third-party companies and individuals to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>Facilitate our Service</li>
              <li>Provide infrastructure and hosting</li>
              <li>Process payments</li>
              <li>Analyze usage and performance</li>
            </ul>
            <p className="text-gray-700">
              These third parties have access only to the information necessary
              to perform their tasks and are obligated not to disclose or use it
              for any other purpose.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. DATA SECURITY
            </h2>
            <p className="text-gray-700 mb-4">
              We value your trust and take commercially reasonable steps to
              protect your personal information using administrative, technical,
              and physical safeguards.
            </p>
            <p className="text-gray-700">
              However, no method of transmission over the internet or electronic
              storage is 100% secure. While we strive to protect your data, we
              cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date.
            </p>
            <p className="text-gray-700">
              You are encouraged to review this Privacy Policy periodically.
              Continued use of the Service after changes are posted constitutes
              acceptance of the revised policy.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. USER DATA DELETION
            </h2>
            <p className="text-gray-700 mb-4">
              You may request deletion of your personal data by contacting us.
            </p>
            <p className="text-gray-700 mb-4">
              Upon receiving a valid request, we will delete, anonymize, or
              de-identify your information within a reasonable timeframe, unless
              retention is required for legal, regulatory, or operational
              reasons.
            </p>
            <p className="text-gray-700">
              Data may be retained where necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Complete transactions or services you requested</li>
              <li>Detect and prevent fraud or security incidents</li>
              <li>Debug and fix platform errors</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
