
import React from 'react';
import { FileText, Scale, AlertCircle, Clock } from 'lucide-react';
import { SITE_INFO } from '../constants';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[3xl] shadow-premium p-8 md:p-16">
          <header className="mb-12 border-b border-cream pb-8">
            <div className="w-16 h-16 bg-gold/5 rounded-2xl flex items-center justify-center mb-6">
              <Scale className="text-gold" size={32} />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">Terms & Conditions</h1>
            <p className="font-body text-slate-800/60 uppercase tracking-widest text-sm font-bold">
              Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-slate max-w-none font-body text-slate-800/80 leading-relaxed space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing this website and booking a session with Derry Hypnosis, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you should not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">2. Professional Disclaimer</h2>
              <p>
                Hypnotherapy is a collaborative process. While we provide professional expertise and techniques, results are not guaranteed and vary between individuals. Hypnotherapy is a complementary therapy and is not a replacement for medical or psychological diagnosis or treatment by a qualified doctor or psychiatrist.
              </p>
              <div className="flex gap-4 items-start bg-gold/5 p-6 rounded-2xl border border-gold/10">
                <AlertCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                <p className="text-sm font-medium">
                  Clients are advised to consult their GP before starting hypnotherapy if they have a history of epilepsy, psychosis, or severe clinical depression.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">3. Booking and Cancellations</h2>
              <div className="flex gap-4 items-start mb-4">
                <Clock className="text-teal flex-shrink-0 mt-1" size={20} />
                <p>
                  We operate a strict <strong>48-hour cancellation policy</strong>. If you fail to attend an appointment or cancel with less than 48 hours' notice, the full session fee will be charged.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appointments can be rescheduled once without penalty if 48 hours' notice is given.</li>
                <li>Late arrival may result in a shortened session time to ensure following clients are seen on schedule.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">4. Fees and Payment</h2>
              <p>
                Fees are payable in advance or at the time of the session unless otherwise agreed. We reserve the right to change our fees with 30 days' notice. Packages (e.g., Weight Loss programmes) are non-refundable once the first session has commenced.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">5. Conduct and Safety</h2>
              <p>
                Derry Hypnosis reserves the right to refuse or terminate treatment if a client is under the influence of alcohol or non-prescribed drugs, or if their behaviour is deemed inappropriate or threatening.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">6. Intellectual Property</h2>
              <p>
                The content of this website, including logos, text, and images, is the property of Derry Hypnosis and is protected by UK and international copyright laws. Any recording of sessions is strictly prohibited without written consent from Tracey McGill.
              </p>
            </section>

            <section className="pt-8 border-t border-cream">
              <h2 className="font-heading text-2xl font-bold text-teal mb-4">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Northern Ireland.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
