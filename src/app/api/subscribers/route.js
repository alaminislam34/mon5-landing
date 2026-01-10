import { NextResponse } from "next/server";

const GROUP_ID = process.env.MAILERLITE_GROUP_ID;
const API_KEY = process.env.MAILERLITE_API_KEY;

export async function GET() {
  try {
    const response = await fetch(
      `https://connect.mailerlite.com/api/subscribers?groups=${GROUP_ID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Failed to fetch subscribers",
          error: data?.message || "Unknown error",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        totalSubscribers: data?.data?.length || 0,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
