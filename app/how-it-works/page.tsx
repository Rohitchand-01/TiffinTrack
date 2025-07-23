
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Import specific icons from react-icons
import { CiBellOn } from "react-icons/ci";
import { CiRepeat } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { BiSolidCheckShield } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { HiOutlineChip } from "react-icons/hi";
// Additional icons for steps and process flow
import { MdOutlineLocationOn, MdOutlineSearch, MdOutlineCalendarMonth, MdOutlineDeliveryDining, MdOutlineTrackChanges, MdOutlineRestaurantMenu, MdOutlineManageAccounts, MdOutlinePlaylistAddCheck, MdOutlineShoppingBag, MdOutlineShowChart, MdOutlineSmartphone, MdOutlineNotificationsActive, MdOutlineFastfood, MdOutlineLocalShipping } from "react-icons/md";
import { FaCheck } from 'react-icons/fa';


export default function HowItWorks() {
  const [activeUserType, setActiveUserType] = useState('student');
  useEffect(() => {
    document.title = "TiffinTrack - How It Works";
  }, []);

  const studentSteps = [
    {
      step: 1,
      title: "Set Your Location",
      description: "Enter your pincode or allow location access to find nearby tiffin providers in your area.",
      icon: <MdOutlineLocationOn />,
      color: "warm-yellow",
      details: [
        "Enter your exact location or pincode",
        "Our system finds verified providers within 5km radius",
        "See delivery areas and estimated delivery times",
        "Filter by distance and delivery charges"
      ]
    },
    {
      step: 2,
      title: "Browse & Compare",
      description: "View detailed profiles of providers including menus, ratings, reviews, and pricing.",
      icon: <MdOutlineSearch />,
      color: "warm-green",
      details: [
        "See weekly menus with daily meal options",
        "Compare prices across different providers",
        "Read authentic reviews from other students",
        "Check ratings and service quality indicators"
      ]
    },
    {
      step: 3,
      title: "Choose Your Plan",
      description: "Select from daily, weekly, or monthly subscription plans that fit your needs and budget.",
      icon: <MdOutlineCalendarMonth />,
      color: "orange-500",
      details: [
        "Daily plans for trying new providers",
        "Weekly plans for short-term stays",
        "Monthly plans with maximum savings",
        "Flexible pause and resume options"
      ]
    },
    {
      step: 4,
      title: "Customize Delivery",
      description: "Set your preferred delivery times, special instructions, and dietary requirements.",
      icon: <MdOutlineDeliveryDining />,
      color: "blue-500",
      details: [
        "Choose lunch or dinner delivery slots",
        "Set recurring delivery schedule",
        "Add special dietary requirements",
        "Include delivery instructions and landmarks"
      ]
    },
    {
      step: 5,
      title: "Track & Enjoy",
      description: "Monitor your deliveries, rate meals, and manage your subscription from your dashboard.",
      icon: <MdOutlineTrackChanges />,
      color: "warm-yellow",
      details: [
        "Real-time order tracking and updates",
        "Rate and review your meals",
        "Manage subscription and billing",
        "Contact provider directly if needed"
      ]
    }
  ];

  const providerSteps = [
    {
      step: 1,
      title: "Register Your Business",
      description: "Sign up with your kitchen details, food license, and business information for verification.",
      icon: <MdOutlineRestaurantMenu />,
      color: "warm-green",
      details: [
        "Provide business registration details",
        "Upload food safety license and certifications",
        "Add kitchen photos and setup information",
        "Complete identity verification process"
      ]
    },
    {
      step: 2,
      title: "Set Up Your Profile",
      description: "Create an attractive profile with photos, specialties, pricing, and service areas.",
      icon: <MdOutlineManageAccounts />,
      color: "warm-yellow",
      details: [
        "Add high-quality photos of your kitchen and food",
        "List your specialties and cuisine types",
        "Set competitive pricing for your meals",
        "Define your delivery radius and areas"
      ]
    },
    {
      step: 3,
      title: "Create Weekly Menus",
      description: "Plan and upload your weekly menus with detailed meal descriptions and ingredients.",
      icon: <MdOutlinePlaylistAddCheck />,
      color: "orange-500",
      details: [
        "Upload detailed daily menus for lunch and dinner",
        "Include ingredient lists and nutritional info",
        "Add photos of your signature dishes",
        "Set meal availability and portions"
      ]
    },
    {
      step: 4,
      title: "Manage Orders",
      description: "Receive orders through our platform and track preparation and delivery status.",
      icon: <MdOutlineShoppingBag />,
      color: "blue-500",
      details: [
        "Get instant notifications for new orders",
        "Update order status in real-time",
        "Coordinate with delivery partners",
        "Handle special requests and modifications"
      ]
    },
    {
      step: 5,
      title: "Grow Your Business",
      description: "Build relationships with customers, gather feedback, and expand your service area.",
      icon: <MdOutlineShowChart />,
      color: "warm-green",
      details: [
        "Access detailed business analytics",
        "Respond to customer feedback and reviews",
        "Expand to new service areas",
        "Increase revenue through quality service"
      ]
    }
  ];

  const features = [
    {
      title: "Smart Matching",
      description: "Our algorithm matches students with providers based on location, preferences, and dietary needs.",
      icon: <HiOutlineChip />,
      color: "warm-yellow"
    },
    {
      title: "Quality Assurance",
      description: "All providers are verified for food safety standards and receive regular quality checks.",
      icon: <BiSolidCheckShield />,
      color: "warm-green"
    },
    {
      title: "Flexible Subscriptions",
      description: "Pause, resume, or modify your subscription anytime with no hidden charges.",
      icon: <CiRepeat />,
      color: "orange-500"
    },
    {
      title: "Real-time Tracking",
      description: "Track your order from preparation to delivery with live updates and notifications.",
      icon: <CiBellOn />,
      color: "blue-500"
    },
    {
      title: "Secure Payments",
      description: "Multiple payment options with secure transactions and transparent billing.",
      icon: <CiWallet />,
      color: "warm-yellow"
    },
    {
      title: "24/7 Support",
      description: "Customer support available round the clock to help with any issues or questions.",
      icon: <BiSupport />,
      color: "warm-green"
    }
  ];

  const faqs = [
    {
      question: "How do I know if a provider is reliable?",
      answer: "All providers are verified by our team with proper food licenses and safety certifications. You can also check ratings, reviews, and photos from other students."
    },
    {
      question: "Can I change my subscription plan?",
      answer: "Yes, you can upgrade or downgrade your plan anytime. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What if I'm not satisfied with the food?",
      answer: "You can rate and review meals, and our team will work with providers to address any quality issues. We also offer refunds for justified complaints."
    },
    {
      question: "How do providers ensure food safety?",
      answer: "All providers must have valid food licenses and follow strict hygiene protocols. We conduct regular quality checks and gather customer feedback."
    },
    {
      question: "Can I pause my subscription during holidays?",
      answer: "Absolutely! You can pause your subscription anytime and resume when you're back. No charges during pause period."
    },
    {
      question: "What areas do you currently serve?",
      answer: "We currently serve major areas in Noida, Gurgaon, Delhi, Bangalore, and Pune. We're expanding to more cities soon."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20platform%20interface%20showing%20food%20delivery%20process%20students%20using%20mobile%20app%20ordering%20tiffin%20meals%20technology%20meets%20traditional%20cooking%20warm%20lighting%20contemporary%20design&width=1920&height=1080&seq=howitworkshero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            How <span className="text-warm-yellow">TiffinTrack</span> Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connecting students with home-cooked meals has never been easier. 
            Learn how our platform brings together food lovers and providers seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveUserType('student')}
              className={`px-8 py-4 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeUserType === 'student'
                  ? 'bg-warm-yellow text-white'
                  : 'bg-white text-warm-yellow border-2 border-warm-yellow hover:bg-warm-yellow hover:text-white'
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveUserType('provider')}
              className={`px-8 py-4 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeUserType === 'provider'
                  ? 'bg-warm-green text-white'
                  : 'bg-white text-warm-green border-2 border-warm-green hover:bg-warm-green hover:text-white'
              }`}
            >
              For Providers
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {activeUserType === 'student' ? 'How Students Get Started' : 'How Providers Join Us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {activeUserType === 'student' 
                ? 'Simple steps to start enjoying home-cooked meals daily'
                : 'Easy process to start your tiffin business with us'
              }
            </p>
          </div>

          <div className="space-y-16">
            {(activeUserType === 'student' ? studentSteps : providerSteps).map((step, index) => (
              <div key={step.step} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${step.color}/20 rounded-full flex items-center justify-center mr-4`}>
                      {step.icon && <span className={`text-${step.color} text-2xl`}>{step.icon}</span>}
                    </div>
                    <div className={`w-10 h-10 bg-${step.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center mt-1">
                          <FaCheck className={`text-${step.color}`} />
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=${
                      activeUserType === 'student' 
                        ? step.step === 1 ? 'Young Indian student using mobile app to search for local tiffin providers location-based service modern interface warm lighting' 
                        : step.step === 2 ? 'Indian student Browse food options on laptop comparing tiffin providers ratings reviews menus comfortable study room'
                        : step.step === 3 ? 'Young person selecting subscription plan on mobile device payment options flexible plans student-friendly pricing'
                        : step.step === 4 ? 'Student setting delivery preferences on app customizing meal schedule dietary requirements user-friendly interface'
                        : 'Happy Indian student receiving tiffin delivery at home enjoying home-cooked meal satisfaction rating experience'
                        : step.step === 1 ? 'Indian home cook registering business on laptop kitchen background food license documents verification process professional setup'
                        : step.step === 2 ? 'Traditional Indian kitchen owner creating business profile uploading food photos menu planning professional presentation'
                        : step.step === 3 ? 'Home cook planning weekly menu writing down daily meals ingredients list traditional Indian cuisine preparation'
                        : step.step === 4 ? 'Tiffin provider managing orders on tablet kitchen background order tracking preparation delivery coordination'
                        : 'Successful Indian home cook reviewing business analytics growth charts customer feedback expanding tiffin service'
                    }&width=600&height=400&seq=step${activeUserType}${step.step}&orientation=landscape`}
                    alt={step.title}
                    className="rounded-2xl shadow-lg object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose TiffinTrack?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced features that make ordering and providing tiffin services seamless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {feature.icon && <span className={`text-${feature.color} text-2xl`}>{feature.icon}</span>}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gradient-to-r from-warm-yellow/10 to-warm-green/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">The Complete Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From order placement to delivery, here's how we ensure quality and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineSmartphone className="text-warm-yellow text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Placed</h3>
              <p className="text-gray-600">Student places order through app or website</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineNotificationsActive className="text-warm-green text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Provider Notified</h3>
              <p className="text-gray-600">Provider receives instant notification and confirms</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineFastfood className="text-orange-500 text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Meal Prepared</h3>
              <p className="text-gray-600">Fresh meal prepared with quality ingredients</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineLocalShipping className="text-blue-500 text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivered</h3>
              <p className="text-gray-600">Meal delivered fresh to student's location</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about using TiffinTrack
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-warm-yellow/20 to-warm-green/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students and providers who are already part of the TiffinTrack community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login/student" className="bg-warm-yellow text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap cursor-pointer">
              Start as Student
            </Link>
            <Link href="/login/provider" className="border-2 border-warm-green text-warm-green px-8 py-4 rounded-full font-semibold hover:bg-warm-green hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Join as Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}