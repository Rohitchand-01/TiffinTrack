'use client';

import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'; // Still used for accordion functionality

export default function TermsAndConditions() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const termsSections = [
    {
      category: 'Introduction to Terms',
      questions: [
        {
          id: 1,
          question: 'Agreement to Terms',
          answer: 'Welcome to TiffinTrack! These Terms and Conditions ("Terms") govern your use of the TiffinTrack website, mobile applications, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.'
        },
        {
          id: 2,
          question: 'Changes to Terms',
          answer: 'We reserve the right to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.'
        }
      ]
    },
    {
      category: 'User Accounts',
      questions: [
        {
          id: 3,
          question: 'Account Registration',
          answer: 'To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.'
        },
        {
          id: 4,
          question: 'Account Security',
          answer: 'You are responsible for safeguarding your password and for any activities or actions under your account. You agree not to disclose your password to any third party and to notify us immediately of any unauthorized use of your account.'
        },
        {
          id: 5,
          question: 'Eligibility',
          answer: 'You must be at least 18 years old to create an account and use our Service. By using the Service, you represent and warrant that you are at least 18 years of age.'
        }
      ]
    },
    {
      category: 'Service Usage and Obligations',
      questions: [
        {
          id: 6,
          question: 'User Conduct',
          answer: 'You agree not to use the Service for any unlawful purpose or in any way that might harm, abuse, or otherwise interfere with the Service or its users. This includes, but is not limited to, fraudulent activities, harassment, or distribution of malware.'
        },
        {
          id: 7,
          question: 'Student Responsibilities',
          answer: 'Students are responsible for providing accurate delivery information, making timely payments, and adhering to the subscription terms of their chosen provider. Any disputes regarding food quality or delivery should be reported promptly to TiffinTrack support.'
        },
        {
          id: 8,
          question: 'Provider Responsibilities',
          answer: 'Tiffin providers are responsible for maintaining valid licenses (e.g., FSSAI), ensuring food quality and hygiene, adhering to delivery schedules, and fulfilling orders as per their menu and terms. Providers must comply with all local food safety regulations.'
        },
        {
          id: 9,
          question: 'Payments and Refunds',
          answer: 'All payments are processed securely through our platform. Refund policies for students are outlined in our FAQ and are subject to the specific terms of the subscription plan and provider. Providers will receive payments as per the agreed-upon schedule and commission rates.'
        }
      ]
    },
    {
      category: 'Disclaimers and Limitations',
      questions: [
        {
          id: 10,
          question: 'Service "As Is"',
          answer: 'The TiffinTrack Service is provided "as is" and "as available" without any warranties, express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.'
        },
        {
          id: 11,
          question: 'Limitation of Liability',
          answer: 'To the fullest extent permitted by law, TiffinTrack shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.'
        },
        {
          id: 12,
          question: 'Third-Party Links',
          answer: 'Our Service may contain links to third-party websites or services that are not owned or controlled by TiffinTrack. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.'
        }
      ]
    },
    {
      category: 'General Provisions',
      questions: [
        {
          id: 13,
          question: 'Governing Law and Jurisdiction',
          answer: 'These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising out of or related to these Terms or the Service will be subject to the exclusive jurisdiction of the courts located in [Your City, e.g., Noida, Uttar Pradesh], India.'
        },
        {
          id: 14,
          question: 'Termination',
          answer: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.'
        },
        {
          id: 15,
          question: 'Contact Information',
          answer: 'If you have any questions about these Terms, please contact us at legal@tiffintrack.com or visit our Contact Us page.'
        }
      ]
    }
  ];

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-warm-yellow/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using the TiffinTrack service.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {termsSections.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((section) => (
                  <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-gray-800">{section.question}</span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        {openSection === section.id ? (
                          <RiSubtractLine className="text-warm-yellow text-xl" />
                        ) : (
                          <RiAddLine className="text-warm-yellow text-xl" />
                        )}
                      </div>
                    </button>
                    {openSection === section.id && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">{section.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions / Contact info for Terms */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions about our Terms and Conditions?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions or concerns regarding these terms, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-warm-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Support
              </a>
              <a 
                href="mailto:legal@tiffintrack.com" // Changed email to a legal-specific one
                className="border-2 border-warm-yellow text-warm-yellow px-8 py-3 rounded-lg font-semibold hover:bg-warm-yellow hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                Email Legal Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}