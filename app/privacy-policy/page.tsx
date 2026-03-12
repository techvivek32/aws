import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Arizona Women Specialists",
  description: "Privacy Policy and HIPAA compliance information for Arizona Women Specialists healthcare services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Arizona Women Specialists ("we," "our," or "us") is committed to protecting your privacy and maintaining the security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable federal and state laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">HIPAA Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a covered healthcare provider, we comply with HIPAA Privacy and Security Rules. Your Protected Health Information (PHI) is handled with the highest level of confidentiality and security.
            </p>
            <h3 className="text-xl font-semibold mb-3">Your Rights Under HIPAA</h3>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li>Right to access your medical records</li>
              <li>Right to request corrections to your health information</li>
              <li>Right to receive a copy of this privacy notice</li>
              <li>Right to request restrictions on certain uses and disclosures</li>
              <li>Right to request confidential communications</li>
              <li>Right to file a complaint if you believe your privacy rights have been violated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Protected Health Information (PHI)</h3>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li>Personal identifiers (name, address, date of birth, Social Security number)</li>
              <li>Medical history and current health conditions</li>
              <li>Treatment and diagnosis information</li>
              <li>Prescription and medication records</li>
              <li>Laboratory and test results</li>
              <li>Insurance and billing information</li>
              <li>Appointment and scheduling information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Website Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Contact form submissions</li>
              <li>Appointment request information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <h3 className="text-xl font-semibold mb-3">Treatment, Payment, and Healthcare Operations</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your PHI for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li><strong>Treatment:</strong> Providing, coordinating, and managing your healthcare services</li>
              <li><strong>Payment:</strong> Billing and collecting payment for services rendered</li>
              <li><strong>Healthcare Operations:</strong> Quality improvement, training, and business management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li><strong>With Your Consent:</strong> When you provide written authorization</li>
              <li><strong>Healthcare Providers:</strong> With other providers involved in your care</li>
              <li><strong>Insurance Companies:</strong> For billing and payment purposes</li>
              <li><strong>Business Associates:</strong> With vendors who assist in our operations (under HIPAA-compliant agreements)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authorities</li>
              <li><strong>Public Health:</strong> For disease prevention and reporting as required by law</li>
              <li><strong>Emergency Situations:</strong> To prevent serious harm to you or others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li>Encrypted data transmission and storage</li>
              <li>Secure, password-protected electronic health records systems</li>
              <li>Limited access to PHI on a need-to-know basis</li>
              <li>Regular security audits and risk assessments</li>
              <li>Staff training on HIPAA compliance and data security</li>
              <li>Physical security measures at our facilities</li>
              <li>Secure disposal of paper and electronic records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Weight Loss Program Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Information related to our medical weight loss programs, including GLP-1 medications and other treatments, is protected as PHI. This includes your weight measurements, treatment plans, medication prescriptions, progress notes, and any related health information. All weight loss program data is subject to the same HIPAA protections as other medical services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Website Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies and similar technologies to improve user experience. These do not collect PHI. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect information from minors without parental consent, except as required for medical treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. We will notify you of significant changes as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Choices and Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-dark/70">
              <li>Request a copy of your medical records</li>
              <li>Request amendments to your health information</li>
              <li>Request an accounting of disclosures</li>
              <li>Request restrictions on how we use or share your information</li>
              <li>Request confidential communications by alternative means</li>
              <li>Revoke authorizations (except where action has already been taken)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about this Privacy Policy, to exercise your rights, or to file a complaint:
              </p>
              <div className="space-y-2 text-teal-dark/70">
                <p><strong>Arizona Women Specialists</strong></p>
                <p>Privacy Officer</p>
                <p>Phoenix Office: 4700 N 51st Ave Suite 5, Phoenix, AZ 85031</p>
                <p>Glendale Office: 18699 N 67th Ave Suite 320, Glendale, AZ 85308</p>
                <p>Phone: <a href="tel:6238467597" className="text-primary hover:underline">(623) 846-7597</a></p>
                <p>Email: <a href="mailto:info@arizonawomenspecialists.com" className="text-primary hover:underline">info@arizonawomenspecialists.com</a></p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You also have the right to file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights if you believe your privacy rights have been violated.
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-teal-dark/70">
              <Link href="/" className="text-primary hover:underline">Return to Home</Link> | <Link href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
