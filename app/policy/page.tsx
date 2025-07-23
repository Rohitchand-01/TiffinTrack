'use client';

import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'; // Still used for accordion functionality

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const policySections = [
    {
      category: 'Introduction',
      questions: [
        {
          id: 1,
          question: 'Welcome to TiffinTrack\'s Privacy Policy',
          answer: 'Your privacy is critically important to us. This Privacy Policy describes how TiffinTrack collects, uses, and discloses your personal information when you use our website and services. By using TiffinTrack, you agree to the collection and use of information in accordance with this policy.'
        },
        {
          id: 2,
          question: 'Scope of this Policy',
          answer: 'This policy applies to all users of TiffinTrack, including students and tiffin providers. It covers data collected online and offline, and through our website, mobile applications, and other services.'
        }
      ]
    },
    {
      category: 'Information We Collect',
      questions: [
        {
          id: 3,
          question: 'Personal Information You Provide',
          answer: 'We collect personal information you voluntarily provide to us when you register, place an order, subscribe to services, or contact us. This may include your name, email address, phone number, physical address, payment information, and dietary preferences.'
        },
        {
          id: 4,
          question: 'Information Collected Automatically',
          answer: 'When you access our services, we automatically collect certain information, such as your IP address, browser type, operating system, referring URLs, access times, and how you interact with our website. This data helps us improve our services.'
        },
        {
          id: 5,
          question: 'Cookies and Tracking Technologies',
          answer: 'We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.'
        }
      ]
    },
    {
      category: 'How We Use Your Information',
      questions: [
        {
          id: 6,
          question: 'To Provide and Maintain Our Service',
          answer: 'We use your information to operate, maintain, and provide all features of our service, such as processing your orders, managing subscriptions, and connecting students with providers.'
        },
        {
          id: 7,
          question: 'To Improve and Personalize Our Service',
          answer: 'We use the information to understand and analyze the usage trends and preferences of our users, to improve our service, and to develop new products, services, features, and functionality. We may also use it to personalize your experience.'
        },
        {
          id: 8,
          question: 'For Communication and Support',
          answer: 'We use your information to communicate with you, respond to your inquiries, send you updates about your orders or subscriptions, and provide customer support.'
        },
        {
          id: 9,
          question: 'For Marketing and Promotions',
          answer: 'With your consent, we may use your information to send you promotional communications about TiffinTrack\'s services, special offers, or other information we think may be of interest to you. You can opt-out of marketing communications at any time.'
        }
      ]
    },
    {
      category: 'Sharing and Disclosure of Information',
      questions: [
        {
          id: 10,
          question: 'With Tiffin Providers/Students',
          answer: 'To facilitate the service, we share necessary information between students and providers (e.g., student name and address with provider for delivery; provider menu and ratings with students).'
        },
        {
          id: 11,
          question: 'Third-Party Service Providers',
          answer: 'We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used (e.g., payment processors, analytics providers, delivery partners).'
        },
        {
          id: 12,
          question: 'Legal Requirements and Law Enforcement',
          answer: 'We may disclose your personal data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of TiffinTrack, prevent or investigate possible wrongdoing in connection with the Service, or protect the personal safety of users or the public.'
        }
      ]
    },
    {
      category: 'Data Security and Your Rights',
      questions: [
        {
          id: 13,
          question: 'Data Security',
          answer: 'We are committed to protecting your information. We implement reasonable security measures designed to protect your personal information from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.'
        },
        {
          id: 14,
          question: 'Your Data Protection Rights',
          answer: 'Depending on your location, you may have rights regarding your personal data, including the right to access, update, or delete the information we have on you. Please contact us if you wish to exercise these rights.'
        },
        {
          id: 15,
          question: 'Changes to This Privacy Policy',
          answer: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We advise you to review this Privacy Policy periodically for any changes.'
        },
        {
          id: 16,
          question: 'Contact Us',
          answer: 'If you have any questions about this Privacy Policy, please contact us by email at privacy@tiffintrack.com or by visiting our Contact Us page.'
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is critically important to us. This policy outlines how we handle your data.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {policySections.map((category) => (
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

        {/* Still have questions / Contact info for Privacy */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions about our Privacy Policy?</h3>
            <p className="text-gray-600 mb-6">
              If you have any questions or concerns regarding our privacy practices, please do not hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-warm-yellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Support
              </a>
              <a 
                href="mailto:privacy@tiffintrack.com" // Changed email to a privacy-specific one
                className="border-2 border-warm-yellow text-warm-yellow px-8 py-3 rounded-lg font-semibold hover:bg-warm-yellow hover:text-black transition-colors whitespace-nowrap cursor-pointer"
              >
                Email Privacy Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}