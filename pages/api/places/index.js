import dbConnect from "@/db/dbConnect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Places.find();
    response.status(200).json(places);
    return;
  } else {
    response.status(405).json({ status: `Method is not allowed!` });
    return;
  }
}
