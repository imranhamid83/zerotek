'use client';

import PageTemplate from "@/components/PageTemplate";

export default function GeneralFAQs() {
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We provide our services across the UK, with a focus on major cities including London, Manchester, Birmingham, and surrounding areas. Our team can travel to most locations for installations and maintenance."
    },
    {
      question: "How long does a typical installation take?",
      answer: "Installation times vary depending on the project. Residential solar installations typically take 1-2 days, while commercial projects may take several weeks. We'll provide a detailed timeline during the consultation phase."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer various financing options including payment plans and partnerships with financial institutions. We can help you find the best solution to fit your budget and needs."
    },
    {
      question: "What warranties do you provide?",
      answer: "We offer comprehensive warranties on all our installations. Solar panels typically come with 25-year warranties, while workmanship is guaranteed for 10 years. Battery systems and electrical work also come with extended warranties."
    },
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation through our website, by phone, or by email. We offer both in-person and virtual consultations to discuss your needs and provide a detailed quote."
    },
    {
      question: "Do you handle permits and paperwork?",
      answer: "Yes, we handle all necessary permits, paperwork, and regulatory compliance for your project. Our team ensures everything meets local building codes and regulations."
    }
  ];

  return (
    <PageTemplate title="General FAQs">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services, processes, and company. If you don't 
            find what you're looking for, feel free to contact us directly for more information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Solar panel installation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Battery storage solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Electrical system upgrades</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Maintenance and support</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Getting Started</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Initial consultation process</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Site assessment details</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Project timeline</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Payment options</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
} 