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
// }

// export async function fetchAllBanners({
//   host,
//   ...rh
// }: FetchBannerDataParams): Promise<ApiResponse> {
//   const baseUrl = process.env.BASE_URL;
//   const timeStamp = Date.now();

//   const key = process.env.API_KEY;
//   const secret =process.env.API_SECRET;

//   const body = { timestamp: timeStamp };
//   const payload = Buffer.from(JSON.stringify(body)).toString();
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
//     const response = await axios.get(`${baseUrl}/banner/fetch-all-banner`, {
//       headers,
//     });
//     // console.log("API Response:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Fetch error details:", {
//       message: error.message,
//       status: error.response?.status,
//       statusText: error.response?.statusText,
//       data: error.response?.data,
//     });
//     throw new Error("Failed to fetch banners.");
//   }
// }
import axios from "axios";
import crypto from "crypto";

interface FetchBannerDataParams {
  host?: string;
  [key: string]: any;
}

interface ApiResponse {
  success?: boolean;
  data?: any;
  [key: string]: any;
}

export async function fetchAllBanners({
  host,
  ...rh
}: FetchBannerDataParams): Promise<ApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const baseUrl = "https://cms.admin.tezcommerce.com:3340/api/client";
  const key = process.env.NEXT_PUBLIC_API_KEY;
  // const key = "3036846a76e83520308663ffbee35e0ef5aa00fa03435c8a";
  const secret = process.env.NEXT_PUBLIC_API_SECRET;
  // const secret =
  // "bc49d7834652add210ec90b8dadc18dbf3154280ccda5585729086703f9fe40c";

  if (!baseUrl || !key || !secret) {
    throw new Error(
      "Missing environment variables (BASE_URL, API_KEY, API_SECRET)."
    );
  }

  const timeStamp = Date.now();
  const body = { timestamp: timeStamp };
  const payload = JSON.stringify(body);

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers: Record<string, string> = {
    ...rh,
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };

  try {
    const response = await axios.get(`${baseUrl}/banner/fetch-all-banner`, {
      headers,
    });
    return response.data;
  } catch (error: any) {
    console.error("Fetch error details:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });
    throw new Error("Failed to fetch banners.");
  }
}
