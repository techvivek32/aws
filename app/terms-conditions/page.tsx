import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Arizona Women Specialists",
  description: "Terms and conditions for using Arizona Women Specialists healthcare services and website.",
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the Arizona Women Specialists website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, patients, and users of our healthcare services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Medical Services</h2>
            <h3 className="text-xl font-semibold mb-3">Healthcare Provider Relationship</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Arizona Women Specialists provides obstetrics, gynecology, and medical weight loss services. By becoming a patient, you establish a healthcare provider-patient relationship governed by professional medical standards and applicable laws.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Not Emergency Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our services are not intended for medical emergencies. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately.
            </p>

            <h3 className="text-xl font-semibold mb-3">Appointment Policy</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Appointments must be scheduled in advance</li>
              <li>Please arrive 15 minutes early for new patient appointments</li>
              <li>Cancellations must be made at least 24 hours in advance</li>
              <li>Late cancellations or no-shows may result in a fee</li>
              <li>We reserve the right to refuse service or terminate the patient relationship for repeated no-shows or policy violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Weight Loss Program Terms</h2>
            <h3 className="text-xl font-semibold mb-3">Medical Supervision Required</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our medical weight loss programs, including GLP-1 medications (Ozempic, Wegovy, Mounjaro, Zepbound, compounded semaglutide/tirzepatide) and other treatments, require medical supervision. Participation requires:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Initial medical evaluation and consultation</li>
              <li>Regular follow-up appointments as prescribed</li>
              <li>Compliance with treatment protocols</li>
              <li>Honest disclosure of medical history and current medications</li>
              <li>Adherence to lifestyle modifications as recommended</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">No Guarantees</h3>
            <p className="text-muted-foreground leading-relaxed">
              Individual results vary. We do not guarantee specific weight loss outcomes. Success depends on multiple factors including adherence to the program, individual metabolism, lifestyle factors, and medical conditions.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Medication Safety</h3>
            <p className="text-muted-foreground leading-relaxed">
              All medications carry potential risks and side effects. You will be informed of these risks during your consultation. You must report any adverse reactions immediately. Medications must be used only as prescribed and not shared with others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment and Billing</h2>
            <h3 className="text-xl font-semibold mb-3">Payment Responsibility</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are responsible for payment of all services rendered. We accept various payment methods including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Insurance (we will verify coverage but you are ultimately responsible)</li>
              <li>Cash pay options (see our cash pay pricing page)</li>
              <li>Credit and debit cards</li>
              <li>Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Insurance</h3>
            <p className="text-muted-foreground leading-relaxed">
              While we accept most major insurance plans, coverage varies. You are responsible for understanding your insurance benefits, deductibles, co-pays, and any services not covered by your plan. We will bill your insurance as a courtesy, but you remain ultimately responsible for payment.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Outstanding Balances</h3>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due at the time of service unless other arrangements have been made. Outstanding balances may be sent to collections and may result in termination of the patient relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Website Use</h2>
            <h3 className="text-xl font-semibold mb-3">Acceptable Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use our website only for lawful purposes. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate another person or entity</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Information Accuracy</h3>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and up-to-date information on our website, we make no warranties about the completeness, reliability, or accuracy of this information. Medical information on the website is for educational purposes only and does not constitute medical advice.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">No Medical Advice via Website</h3>
            <p className="text-muted-foreground leading-relaxed">
              The website does not provide medical advice. Content is for informational purposes only. Always seek the advice of your physician or qualified healthcare provider with questions about your medical condition. Never disregard professional medical advice or delay seeking it because of something you read on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Arizona Women Specialists or its content suppliers and is protected by U.S. and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Telehealth Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If we offer telehealth services, the following applies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You must be located in Arizona at the time of the telehealth visit</li>
              <li>You are responsible for ensuring a private, secure location for the visit</li>
              <li>Technical issues may require rescheduling</li>
              <li>The same standards of care apply as in-person visits</li>
              <li>You consent to the use of electronic communications for healthcare</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Arizona Women Specialists shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website. Our liability is limited to the amount you paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Arizona Women Specialists, its officers, employees, and agents from any claims, damages, losses, or expenses arising from your violation of these Terms or your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">HIPAA and Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your health information is protected under HIPAA. Please review our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for detailed information about how we collect, use, and protect your personal health information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the State of Arizona, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Maricopa County, Arizona.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other patients, our staff, or our business interests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms & Conditions:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Arizona Women Specialists</strong></p>
                <p>Phoenix Office: 4700 N 51st Ave Suite 5, Phoenix, AZ 85031</p>
                <p>Glendale Office: 18699 N 67th Ave Suite 320, Glendale, AZ 85308</p>
                <p>Phone: <a href="tel:6238467597" className="text-primary hover:underline">(623) 846-7597</a></p>
                <p>Email: <a href="mailto:info@arizonawomenspecialists.com" className="text-primary hover:underline">info@arizonawomenspecialists.com</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acknowledgment</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our services and website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              <Link href="/" className="text-primary hover:underline">Return to Home</Link> | <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
