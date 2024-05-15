import { NextResponse } from "next/server"
import { limiter } from "../config/limiter"

export async function GET(request: Request) {
  // Origin //
  const origin = request.headers.get("origin")

  // Rate-Limiter //
  const remaining = await limiter.removeTokens(1)
  console.log("remaining: ", remaining)

  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests!",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    })
  }

  return Response.json({ message: "Hello, Next.js!" })
}
