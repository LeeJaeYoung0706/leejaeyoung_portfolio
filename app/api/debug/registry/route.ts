import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
    const file = path.join(process.cwd(), "data", "registry.generated.json");
    const json = fs.readFileSync(file, "utf8");
    return NextResponse.json(JSON.parse(json));
}