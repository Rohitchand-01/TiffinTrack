'use client';

import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'; // Import specific icons

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'For Students',
      questions: [
        {
          id: 1,
          question: 'How do I find tiffin providers near me?',
          answer: 'Simply enter your pincode or allow location access on our homepage. Our system will show you all verified tiffin providers within a 5km radius of your location.'
        },
        {
          id: 2,
          question: 'What subscription plans are available?',
          answer: 'We offer flexible plans: Daily (₹150/meal), Weekly (₹900 for 7 meals with 10% discount), and Monthly (₹3200 for 30 meals with 20% discount). You can pause or cancel anytime.'
        },
        {
          id: 3,
          question: 'How do I cancel or pause my subscription?',
          answer: 'You can pause or cancel your subscription anytime from your dashboard. For cancellations, you will receive a prorated refund for unused meals.'
        },
        {
          id: 4,
          question: 'What if I am not satisfied with the food quality?',
          answer: 'You can rate and review each meal. If you have quality issues, contact our support team immediately. We will work with the provider to resolve issues and offer refunds for justified complaints.'
        },
        {
          id: 5,
          question: 'Are all providers verified?',
          answer: 'Yes, all providers go through a strict verification process including food license checks, kitchen inspections, and background verification before being listed on our platform.'
        }
      ]
    },
    {
      category: 'For Providers',
      questions: [
        {
          id: 6,
          question: 'How do I register as a tiffin provider?',
          answer: 'Sign up on our provider portal with your business details, upload your food license and kitchen photos. Our team will verify your application within 2-3 business days.'
        },
        {
          id: 7,
          question: 'What documents do I need to register?',
          answer: 'You need a valid food license/FSSAI registration, Aadhaar card, bank account details, and clear photos of your kitchen setup.'
        },
        {
          id: 8,
          question: 'How do I receive and manage orders?',
          answer: 'Orders are sent to your dashboard and mobile app instantly. You can update order status, manage menus, and track deliveries all from your provider dashboard.'
        },
        {
          id: 9,
          question: 'What commission does TiffinTrack charge?',
          answer: 'We charge a competitive commission of 15% on each order. This includes payment processing, customer support, and platform maintenance.'
        },
        {
          id: 10,
          question: 'How do I expand my service area?',
          answer: 'Once you have established good ratings and reviews, you can request to expand your service area through your dashboard. We will review based on your capacity and customer demand.'
        }
      ]
    },
    {
      category: 'Payments & Billing',
      questions: [
        {
          id: 11,
          question: 'What payment methods are accepted?',
          answer: 'We accept all major credit/debit cards, net banking, UPI, and digital wallets like Paytm, PhonePe, and Google Pay.'
        },
        {
          id: 12,
          question: 'When am I charged for my subscription?',
          answer: 'Payment is processed when you subscribe. For monthly plans, you are charged upfront for the entire month. You can track your billing in the dashboard.'
        },
        {
          id: 13,
          question: 'Can I get a refund if I cancel my subscription?',
          answer: 'Yes, you will receive a prorated refund for unused meals. Refunds are processed within 5-7 business days to your original payment method.'
        },
        {
          id: 14,
          question: 'How do providers receive payments?',
          answer: 'Providers receive payments weekly every Monday for the previous week orders. Payments are transferred directly to your registered bank account.'
        }
      ]
    },
    {
      category: 'Delivery & Support',
      questions: [
        {
          id: 15,
          question: 'What are the delivery timings?',
          answer: 'Lunch deliveries are typically between 11:30 AM - 1:30 PM and dinner deliveries between 6:30 PM - 8:30 PM. Exact timing depends on your provider and location.'
        },
        {
          id: 16,
          question: 'What if my order is delayed or not delivered?',
          answer: 'Contact our support team immediately. We will track your order and coordinate with the provider. If the order cannot be delivered, you will receive a full refund.'
        },
        {
          id: 17,
          question: 'How can I track my order?',
          answer: 'You can track your order status in real-time through your dashboard or mobile app. You will receive notifications when your order is prepared and out for delivery.'
        },
        {
          id: 18,
          question: 'How do I contact customer support?',
          answer: 'You can reach our support team through the contact form on our website, email at support@tiffintrack.com, or call +91 1234567890. We are available 24/7 to help you.'
        }
      ]
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-warm-yellow/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about using TiffinTrack
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        {openFAQ === faq.id ? (
                          <RiSubtractLine className="text-warm-yellow text-xl" />
                        ) : (
                          <RiAddLine className="text-warm-yellow text-xl" />
                        )}
                      </div>
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-warm-yellow text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@tiffintrack.com" 
                className="border-2 border-warm-yellow text-warm-yellow px-8 py-3 rounded-lg font-semibold hover:bg-warm-yellow hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}