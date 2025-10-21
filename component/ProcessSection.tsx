// const ProcessSection: React.FC = () => {
//   return (
//     <section
//       className="process-section life_box"
//       style={{
//         backgroundImage: "url(https://amfics.io/images/background/2.jpg)",
//       }}>
//       <div className="auto-container">
//         <div className="life">
//           <h3 className="text-3xl font-bold text-white">Life Cycle Method</h3>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//           <div className="method_img">
//             <img
//               src="https://amfics.io/images/Method_1.png"
//               alt="Method 1"
//               className="w-full"
//             />
//           </div>
//           <div className="method_img_2">
//             <img
//               src="https://amfics.io/images/Method_2.png"
//               alt="Method 2"
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

"use client";

import Image from "next/image";
import React from "react";

interface Subsection {
  id: number;
  title: string;
  // description?: string;
  image?: string;
  backgroundImage?: string;
}

interface PageItem {
  title: string;
  subsections?: Subsection[];
}

interface ProcessSectionClientProps {
  data?: PageItem | null;
}

const ProcessSectionClient: React.FC<ProcessSectionClientProps> = ({
  data,
}) => {
  if (!data || !data.subsections) return null;

  // Get all subsections that have a non-empty image (ignoring title)
  const imageSubsections = data.subsections
    .filter((sub) => sub.image && sub.image.trim() !== "")
    .map((sub) => sub.image!.trim());

  const imageUrl1 = imageSubsections[0];
  const imageUrl2 = imageSubsections[1];

  return (
    <section
      className="process-section life_box"
      style={{
        backgroundImage: "url(/images/background/2.jpg)",
      }}>
      <div className="auto-container">
        <div className="life">
          <h3 className="text-3xl font-bold text-white">{}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {imageUrl1 && (
            <div className="method_img">
              <Image
                src={imageUrl1}
                alt="Method 1"
                className="w-full"
                height={900}
                width={1400}
              />
            </div>
          )}

          {imageUrl2 && (
            <div className="method_img_2">
              <Image
                src={imageUrl2}
                alt="Method 2"
                className="w-full"
                height={900}
                width={1400}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionClient;
