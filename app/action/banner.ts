// import axios from "axios";
// import crypto from "crypto";

// interface PageData {
//   status: boolean;
//   pagedata: {
//     id: number;
//     title: string;
//     slug: string;
//     uuid: string;
//     description: string;
//     cover_image_url: string;
//     status: string;
//     [key: string]: any;
//   };
//   pageItemdataWithSubsection: Array<{
//     id: number;
//     title: string;
//     shortDescription: string;
//     subsections: Array<{
//       id: number;
//       title: string;
//       description: string;
//       image: string;
//       [key: string]: any;
//     }>;
//     [key: string]: any;
//   }>;
// }

// const isPageData = (data: any): data is PageData => {
//   return (
//     data &&
//     typeof data.status === "boolean" &&
//     data.pagedata &&
//     typeof data.pagedata === "object" &&
//     typeof data.pagedata.title === "string" &&
//     typeof data.pagedata.cover_image_url === "string" &&
//     Array.isArray(data.pageItemdataWithSubsection)
//   );
// };

// export async function fetchBannerData(uid: string): Promise<PageData> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const timeStamp = Date.now();

//   const key = process.env.NEXT_PUBLIC_API_KEY;
//   const secret = process.env.NEXT_PUBLIC_API_SECRET;
//   if (!key || !secret) {
//     throw new Error("Missing API_KEY or API_SECRET");
//   }

//   const body = { timestamp: timeStamp };
//   const payload = Buffer.from(JSON.stringify(body)).toString();
//   const signature = crypto
//     .createHmac("sha256", secret)
//     .update(payload)
//     .digest("hex");

//   const headers = {
//     "X-AUTH-APIKEY": key,
//     "X-AUTH-SIGNATURE": signature,
//     "X-AUTH-TIMESTAMP": timeStamp.toString(),
//     "Content-Type": "application/json",
//     "x-host": "localhost:3000",
//   };

//   const response = await axios.get(
//     `${baseUrl}/banner/fetch-single-banner/${uid}`,
//     {
//       headers,
//     }
//   );

//   if (!isPageData(response.data)) {
//     throw new Error("Invalid API response structure");
//   }

//   return response.data;
// }
// import axios from "axios";
// import crypto from "crypto";

// interface BannerItem {
//   id: number;
//   title: string;
//   slug: string;
//   uuid: string;
//   description: string;
//   desktopImage: string;
//   mobileImage: string;
//   status: string;
//   [key: string]: unknown;
// }

// interface BannerResponse {
//   status: boolean;
//   message: string;
//   singlebannerData: BannerItem[];
// }

// const isBannerResponse = (data: unknown): data is BannerResponse => {
//   return (
//     data &&
//     typeof data.status === "boolean" &&
//     Array.isArray(data.singlebannerData) &&
//     typeof data.singlebannerData[0]?.title === "string"
//   );
// };

// export async function fetchBannerData(uid: string): Promise<BannerItem> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const timeStamp = Date.now();
//   const key = process.env.NEXT_PUBLIC_API_KEY;
//   const secret = process.env.NEXT_PUBLIC_API_SECRET;

//   if (!key || !secret) {
//     throw new Error("Missing API_KEY or API_SECRET");
//   }

//   const body = { timestamp: timeStamp };
//   const payload = Buffer.from(JSON.stringify(body)).toString();
//   const signature = crypto
//     .createHmac("sha256", secret)
//     .update(payload)
//     .digest("hex");

//   const headers = {
//     "X-AUTH-APIKEY": key,
//     "X-AUTH-SIGNATURE": signature,
//     "X-AUTH-TIMESTAMP": timeStamp.toString(),
//     "Content-Type": "application/json",
//     "x-host": "localhost:3000",
//   };

//   const response = await axios.get(
//     `${baseUrl}/banner/fetch-single-banner/${uid}`,
//     { headers }
//   );

//   if (!isBannerResponse(response.data)) {
//     console.error("Invalid response structure:", response.data);
//     throw new Error("Invalid API response structure");
//   }

//   return response.data.singlebannerData[0];
// }

import axios from "axios";
import crypto from "crypto";

interface BannerItem {
  id: number;
  title: string;
  slug: string;
  uuid: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  status: string;
  [key: string]: unknown;
}

interface BannerResponse {
  status: boolean;
  message: string;
  singlebannerData: BannerItem[];
}

const isBannerResponse = (data: unknown): data is BannerResponse => {
  if (
    typeof data === "object" &&
    data !== null &&
    "status" in data &&
    "singlebannerData" in data
  ) {
    const d = data as Record<string, unknown>;
    return (
      typeof d.status === "boolean" &&
      Array.isArray(d.singlebannerData) &&
      (d.singlebannerData.length === 0 ||
        typeof (d.singlebannerData as BannerItem[])[0]?.title === "string")
    );
  }
  return false;
};

export async function fetchBannerData(uid: string): Promise<BannerItem> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const timeStamp = Date.now();
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!key || !secret) {
    throw new Error("Missing API_KEY or API_SECRET");
  }

  const body = { timestamp: timeStamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": "localhost:3000",
  };

  const response = await axios.get<BannerResponse>(
    `${baseUrl}/banner/fetch-single-banner/${uid}`,
    { headers }
  );

  if (!isBannerResponse(response.data)) {
    console.error("Invalid response structure:", response.data);
    throw new Error("Invalid API response structure");
  }

  return response.data.singlebannerData[0];
}
