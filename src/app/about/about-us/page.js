import PageTemplate from "@/components/PageTemplate";

export default function AboutUs() {
  return (
    <PageTemplate title="About ZeroTek">
      
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            ZeroTek is a leading provider of sustainable energy solutions, dedicated to helping businesses and homeowners make the 
            transition to cleaner, more efficient energy systems. With over a decade of experience, we&apos;ve become
            a trusted name in the industry, known for our expertise, reliability, and commitment to customer satisfaction.
          </p>
        </div>
 {/* Certificates & Trainings Section */}
 <div className="mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificates & Trainings</h2>
              <p className="text-lg text-gray-600">
                All members of our team are fully trained and certified professionals. We take pride in ensuring that every staff member meets or exceeds industry standards through continuous education and rigorous certification processes. Our company holds all the relevant licenses and certifications required to perform our work safely, legally, and to the highest professional standard.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower our customers with sustainable energy solutions that reduce costs, minimize environmental impact, 
              and create a better future for generations to come.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading force in the transition to sustainable energy, driving innovation and setting new standards 
              for excellence in the renewable energy sector.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Sustainability</h4>
              <p className="text-gray-600">Committed to environmental responsibility in all our operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Innovation</h4>
              <p className="text-gray-600">Constantly evolving with the latest technology and solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Customer Focus</h4>
              <p className="text-gray-600">Putting our customers&apos; needs at the center of everything we do</p>
            </div>
          </div>
        </div>
       
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Expert Engineers</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
           
          </div>
        </div>

       

        {/* Contact Section */}
      </div>
    </PageTemplate>
  );
} 