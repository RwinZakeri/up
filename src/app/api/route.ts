// db
import db from "@/db/db.json";

export async function GET() {
  const data = db;
  const response = data.popularSearch;
  return Response.json({ popularSearch: response });
}
