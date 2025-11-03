// app/action/blog.ts
"use server";

import axios from "axios";
import crypto from "crypto";

interface BlogPost {
  title: string;
  slug: string;
  uuid: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  author_image_url: string;
  cta: string;
  status: string;
  author_name: string;
  tag: string;
  [key: string]: any;
}

interface BlogResponse {
  status: boolean;
  userPostdata: BlogPost[];
}

const isBlogResponse = (data: any): data is BlogResponse => {
  return (
    data && typeof data.status === "boolean" && Array.isArray(data.userPostdata)
  );
};

export async function fetchBlogData(): Promise<BlogResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!baseUrl || !apiKey || !apiSecret) {
    throw new Error("Missing environment variables");
  }

  const timestamp = Date.now();
  const body = { timestamp };
  const payload = Buffer.from(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": apiKey,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timestamp.toString(),
    "Content-Type": "application/json",
    "x-host": "localhost:3000", // keep same as your other action
  };

  try {
    const response = await axios.get(`${baseUrl}/post/fetch-post`, { headers });

    if (!isBlogResponse(response.data)) {
      throw new Error("Invalid API structure");
    }

    return response.data;
  } catch (error: any) {
    console.error("Error fetching blog data:", error.message);
    throw new Error("Failed to fetch blog data");
  }
}
