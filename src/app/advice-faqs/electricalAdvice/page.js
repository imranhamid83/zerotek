'use client';

import PageTemplate from "@/components/PageTemplate";

export default function ElectricalAdvice() {
  const faqs = [
    {
      question: "What are the signs of electrical problems in my home?",
      answer: "Common signs include frequent circuit breaker trips, flickering lights, burning smells, warm outlets, and unusual buzzing sounds. If you notice any of these, it&apos;s important to have a professional electrician inspect your system."
    },
    {
      question: "How often should I have my electrical system inspected?",
      answer: "It&apos;s recommended to have a professional inspection every 3-5 years for residential properties, and more frequently for older homes or commercial buildings. Regular maintenance can prevent potential hazards and ensure optimal performance."
    },
    {
      question: "What should I look for in an electrical contractor?",
      answer: "Choose a licensed, insured contractor with good reviews and experience in your specific needs. They should provide clear quotes, proper documentation, and follow all safety regulations and building codes."
    },
    {
      question: "How can I improve my home&apos;s electrical efficiency?",
      answer: "Consider upgrading to LED lighting, installing smart thermostats, using energy-efficient appliances, and ensuring proper insulation. Regular maintenance and modernizing outdated systems can also significantly improve efficiency."
    }
  ];

  return (
    <PageTemplate title="Electrical Advice">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Expert guidance on electrical systems, safety, and efficiency. From basic maintenance to 
            complex installations, our advice helps you make informed decisions about your electrical 
            needs while ensuring safety and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Electrical Safety</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Home electrical safety tips</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Circuit breaker maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Grounding and surge protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Emergency procedures</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">System Upgrades</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Panel upgrades and replacements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Wiring modernization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Smart home integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Energy efficiency improvements</span>
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