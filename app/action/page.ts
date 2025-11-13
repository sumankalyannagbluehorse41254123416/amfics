// "use server";
// import axios from "axios";
// import crypto from "crypto";

// interface ApiResponse {
//   success?: boolean;
//   data?: any;
//   [key: string]: any;
// }

// export async function fetchPageData(uid: string): Promise<ApiResponse> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const timeStamp = Date.now();

//   // const key = process.env.API_KEY;
//   // const secret = process.env.API_SECRET;
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

//   const response = await axios.get(`${baseUrl}/page/fetch-single-page/${uid}`, {
//     headers,
//   });
//   return response.data;
// }
// "use server";
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
//       shortDescription: string;
//       image: string;
//       [key: string]: any;
//     }>;
//     [key: string]: any;
//   }>;
//   editReviedata: Array<{
//     id: number;
//     title: string;
//     shortDescription: string;
//     date: string;
//     subsections: Array<{
//       id: number;
//       title: string;
//       description: string;
//       shortDescription: string;
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

// export async function fetchPageData(uid: string): Promise<PageData> {
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

//   const response = await axios.get(`${baseUrl}/page/fetch-single-page/${uid}`, {
//     headers,
//   });

//   if (!isPageData(response.data)) {
//     throw new Error("Invalid API response structure");
//   }

//   return response.data;
// }

import axios from "axios";
import crypto from "crypto";

interface Subsection {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  [key: string]: unknown;
}

interface Section {
  id: number;
  title: string;
  shortDescription: string;
  subsections: Subsection[];
  [key: string]: unknown;
}

interface EditReview {
  id: number;
  title: string;
  shortDescription: string;
  date: string;
  subsections: Subsection[];
  [key: string]: unknown;
}

interface PageData {
  status: boolean;
  pagedata: {
    id: number;
    title: string;
    slug: string;
    uuid: string;
    description: string;
    cover_image_url: string;
    status: string;
    [key: string]: unknown;
  };
  pageItemdataWithSubsection: Section[];
  editReviedata: EditReview[];
}

const isPageData = (data: unknown): data is PageData => {
  if (
    typeof data === "object" &&
    data !== null &&
    "status" in data &&
    "pagedata" in data &&
    "pageItemdataWithSubsection" in data
  ) {
    const d = data as Record<string, unknown>;
    const pagedata = d.pagedata as Record<string, unknown> | undefined;
    return (
      typeof d.status === "boolean" &&
      pagedata !== undefined &&
      typeof pagedata.title === "string" &&
      typeof pagedata.cover_image_url === "string" &&
      Array.isArray(d.pageItemdataWithSubsection)
    );
  }
  return false;
};

export async function fetchPageData(uid: string): Promise<PageData> {
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

  const response = await axios.get<PageData>(
    `${baseUrl}/page/fetch-single-page/${uid}`,
    { headers }
  );

  if (!isPageData(response.data)) {
    throw new Error("Invalid API response structure");
  }

  return response.data;
}
