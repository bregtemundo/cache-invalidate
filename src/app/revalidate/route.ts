export const dynamic = "force-dynamic";

import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const id = 2;

  revalidateTag(`time-${id}`);

  return new Response("Revalidation triggered");
}