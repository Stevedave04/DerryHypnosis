
import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { SITE_INFO } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[3xl] shadow-premium p-8 md:p-16">
          <header className="mb-12 border-b border-cream pb-8">
            <div className="w-16 h-16 bg-teal/5 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-teal" size={32} />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">Privacy Policy</h1>
            <p className="font-body text-slate-800/60 uppercase tracking-widest text-sm font-bold">
              Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-slate max-w-none font-body text-slate-800/80 leading-relaxed space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">1. Introduction</h2>
              <p>
                Derry Hypnosis ("we", "us", or "our") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. We are compliant with the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">2. Information We Collect</h2>
              <p>We may collect and process the following data about you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> Name, date of birth, and gender.</li>
                <li><strong>Contact Data:</strong> Email address, telephone numbers, and residential address.</li>
                <li><strong>Health Data:</strong> As a hypnotherapy practice, we collect "Special Category Data" regarding your physical and mental health to ensure safe and effective treatment.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">3. How We Use Your Data</h2>
              <p>We use information held about you in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide you with clinical hypnotherapy services and treatment plans.</li>
                <li>To manage bookings, appointments, and payments.</li>
                <li>To notify you about changes to our service.</li>
                <li>To comply with legal and professional indemnity insurance obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">4. Confidentiality and Security</h2>
              <p>
                All information you provide to us is stored on secure servers or in locked physical filing systems. We maintain strict confidentiality in accordance with the standards of the National Council for Hypnotherapy (NCH) and other relevant professional bodies.
              </p>
              <div className="bg-cream p-6 rounded-2xl border-l-4 border-gold italic">
                Confidentiality may only be breached if we believe there is a significant risk of harm to yourself or others, or if required by a court of law.
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">5. Your Legal Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data (commonly known as a "data subject access request").</li>
                <li>Request correction of the personal data that we hold about you.</li>
                <li>Request erasure of your personal data (subject to legal retention requirements).</li>
                <li>Object to processing or request restriction of processing.</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-cream">
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact our data controller at:
              </p>
              <p className="mt-4 font-bold text-teal">
                Email: {SITE_INFO.email}<br />
                Address: {SITE_INFO.location}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
