'use client';

import { Inter, Source_Sans_3, Work_Sans, Manrope, Outfit } from "next/font/google";
import PageTemplate from "@/components/PageTemplate";

const inter = Inter({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

const fonts = [
  { name: "Inter", font: inter },
  { name: "Source Sans Pro", font: sourceSans },
  { name: "Work Sans", font: workSans },
  { name: "Manrope", font: manrope },
  { name: "Outfit", font: outfit }
];

export default function FontTest() {
  return (
    <PageTemplate title="Font Options">
      <div className="space-y-12">
        {fonts.map(({ name, font }) => (
          <div key={name} className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800">{name}</h2>
            <div className={`${font.className} space-y-4`}>
              <div className="text-4xl font-light">Light 300</div>
              <div className="text-4xl font-normal">Regular 400</div>
              <div className="text-4xl font-medium">Medium 500</div>
              <div className="text-4xl font-semibold">Semibold 600</div>
              <div className="text-4xl font-bold">Bold 700</div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Sample Paragraph</h3>
                <p className="text-lg leading-relaxed">
                  ZeroTek provides professional solar, battery, and electrical solutions for both residential and commercial properties. 
                  Our expert team delivers sustainable energy solutions that help reduce your carbon footprint while maximizing energy efficiency. 
                  From solar panel installations to EV charging stations, we offer comprehensive services tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
} 