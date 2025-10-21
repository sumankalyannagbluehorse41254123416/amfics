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

  // ✅ Filter only subsections with valid images
  const imageSubsections = data.subsections.filter(
    (sub) => sub.image && sub.image.trim() !== ""
  );

  // ✅ Optional: show the title of the first image subsection
  const sectionTitle = imageSubsections[0]?.title || data.title;

  const imageUrl1 = imageSubsections[0]?.image?.trim();
  const imageUrl2 = imageSubsections[1]?.image?.trim();

  return (
    <section
      className="process-section life_box"
      style={{
        backgroundImage: "url(/images/background/2.jpg)",
      }}>
      <div className="auto-container">
        <div className="life">
          <h3 className="text-3xl font-bold text-white">{sectionTitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {imageUrl1 && (
            <div className="method_img">
              <Image
                src={imageUrl1}
                alt={imageSubsections[0]?.title || "Method 1"}
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
                alt={imageSubsections[1]?.title || "Method 2"}
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
