// import axios from "axios";
// import crypto from "crypto";

// interface FetchBannerDataParams {
//   host?: string;
//   [key: string]: any;
// }

// interface ApiResponse {
//   success?: boolean;
//   data?: any;
//   [key: string]: any;
//   uid: string;
// }

// export async function fetchPageData({
//   host,
//   ...rh
// }: FetchBannerDataParams): Promise<ApiResponse> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const key = process.env.NEXT_PUBLIC_API_KEY;
//   const secret = process.env.NEXT_PUBLIC_API_SECRET;
//   if (!baseUrl || !key || !secret) {
//     throw new Error(
//       "Missing environment variables (BASE_URL, API_KEY, API_SECRET)."
//     );
//   }

//   const timeStamp = Date.now();
//   const body = { timestamp: timeStamp };
//   const payload = JSON.stringify(body);

//   const signature = crypto
//     .createHmac("sha256", secret)
//     .update(payload)
//     .digest("hex");

//   const headers: Record<string, string> = {
//     ...rh,
//     "X-AUTH-APIKEY": key,
//     "X-AUTH-SIGNATURE": signature,
//     "X-AUTH-TIMESTAMP": timeStamp.toString(),
//     "Content-Type": "application/json",
//     "x-host": host || "localhost:3000",
//   };

//   try {
//     const response = await axios.get(
//       `${baseUrl}/page/fetch-single-page/${uid}
// `,
//       {
//         headers,
//       }
//     );
//     return response.data;
//   } catch (error: any) {
//     console.error("Page Data Fetch error details:", {
//       message: error.message,
//       status: error.response?.status,
//       statusText: error.response?.statusText,
//       data: error.response?.data,
//     });
//     throw new Error("Page Data Failed to fetch banners.");
//   }
// }

import axios from "axios";
import crypto from "crypto";

interface ApiResponse {
  success?: boolean;
  data?: any;
  pageItemdataWithSubsection?: any[];
  [key: string]: any;
}

interface FetchPageDataParams {
  uid: string;
  host?: string;
}

export async function fetchPageData({
  uid,
  host = "localhost:3000",
}: FetchPageDataParams): Promise<ApiResponse> {
  const timeStamp = Date.now();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!baseUrl || !key || !secret) {
    throw new Error(
      "Missing environment variables: BASE_URL, API_KEY, or API_SECRET."
    );
  }

  const body = { timestamp: timeStamp };
  const payload = JSON.stringify(body);

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host,
  };

  try {
    const response = await axios.get(
      `${baseUrl}/page/fetch-single-page/${uid}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error: any) {
    console.error("Page Data Fetch Error:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });
    throw new Error("Page Data: Failed to fetch page.");
  }
}
