'use client';

import { useState } from 'react';
import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';
import { EmailClient } from '@azure/communication-email';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.query.trim()) {
      newErrors.query = 'Query is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const sendEmail = async (to, subject, content) => {
    const connectionString = process.env.NEXT_PUBLIC_AZURE_COMMUNICATION_CONNECTION_STRING;
    
    if (!connectionString) {
      throw new Error('Azure Communication connection string is not configured');
    }

    const emailClient = new EmailClient(connectionString);

    const message = {
      senderAddress: "DoNotReply@zero-tek.co.uk",
      content: {
        subject: subject,
        plainText: content,
      },
      recipients: {
        to: [{ address: to }],
      },
    };

    try {
      const poller = await emailClient.beginSend(message);
      const result = await poller.pollUntilDone();
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Send acknowledgment email to user
      const userAckContent = `
Dear ${formData.name},

Thank you for contacting ZeroTEK. We have received your message and will get back to you shortly.

Your message details:
${formData.query}

Best regards,
ZeroTEK Team
      `.trim();

      await sendEmail(
        formData.email,
        'Thank you for contacting ZeroTEK',
        userAckContent
      );

      // Send notification email to ZeroTEK
      const adminContent = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}\n` : ''}
Query:
${formData.query}
      `.trim();

      await sendEmail(
        'hello@zero-tek.co.uk',
        `Contact Form Submission from ${formData.name}`,
        adminContent
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      });
      setFormData({ name: '', email: '', phone: '', query: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in touch with our team</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Information Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <a href="tel:01494314971" className="text-green-600 text-xl hover:text-green-700 transition-colors">
                    01494 314 971
                  </a>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:hello@zero-tek.co.uk" className="text-green-600 text-xl hover:text-green-700 transition-colors">
                    hello@zero-tek.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-md ${
                  submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your phone number (optional)"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Query <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.query ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your query"
                    disabled={isSubmitting}
                  />
                  {errors.query && <p className="mt-1 text-sm text-red-500">{errors.query}</p>}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`bg-green-600 text-white px-8 py-3 rounded-lg text-lg transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs; 