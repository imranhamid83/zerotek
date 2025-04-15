import PageTemplate from "@/components/PageTemplate";

export default function SolarBatteryAdvice() {
  const faqs = [
    {
      question: "How do solar panels work?",
      answer: "Solar panels convert sunlight into electricity through photovoltaic cells. When sunlight hits these cells, it creates an electric field that generates direct current (DC) electricity. This is then converted to alternating current (AC) by an inverter for use in your home or business."
    },
    {
      question: "What are the benefits of adding battery storage?",
      answer: "Battery storage allows you to store excess solar energy for use when the sun isn&apos;t shining. This increases your energy independence, reduces reliance on the grid, and can provide backup power during outages."
    },
    {
      question: "How long do solar panels last?",
      answer: "Most solar panels come with a 25-year warranty and can last even longer. Their efficiency may decrease slightly over time, but they typically maintain 80-90% of their original capacity after 25 years."
    },
    {
      question: "What maintenance do solar systems require?",
      answer: "Solar systems require minimal maintenance. Regular cleaning to remove dust and debris, and occasional professional inspections are usually sufficient. Most systems come with monitoring software to track performance."
    }
  ];

  return (
    <PageTemplate title="Solar &amp; Battery Advice">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Get expert advice on solar panels and battery storage systems. Whether you&apos;re considering 
            installation or want to optimize your existing system, we&apos;re here to help you make informed 
            decisions about renewable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Solar System Basics</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Understanding solar panel efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Types of solar panels available</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Inverter options and selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>System sizing and optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Battery Storage Guide</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Types of battery technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Capacity and power ratings</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Battery lifespan and warranties</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">&bull;</span>
                <span>Integration with solar systems</span>
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