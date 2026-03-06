import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    // Basic validation
    if (!data.email || typeof data.email !== "string" || !/^\S+@\S+$/i.test(data.email)) {
      return NextResponse.json(
        { success: false, message: "Valid email is required." },
        { status: 400 }
      );
    }
    if (!data.name && !data.firstName) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }
    // In a real application, you would save this data to a database here.
    // E.g., const newInquiry = await db.inquiries.create({ data });
    // For now, we simulate saving and generating a unique ID.
    const inquiryId = Math.random().toString(36).substring(2, 8).toUpperCase();
    // You might also send an email notification to the team here.
    // console.log("Received new inquiry data server-side:", data);
    return NextResponse.json(
      { success: true, inquiryId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
