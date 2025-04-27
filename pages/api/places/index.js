import dbConnect from "@/db/dbConnect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Places.find();
    response.status(200).json(places);
    return;
  }

  if (request.method === "POST")
    try {
      const placeData = request.body;
      await Places.create(placeData);

      response.status(201).json({ status: `Place created!` });
      return;
    } catch (error) {
      response.status(400).json({ error: error.message });
      return;
    }

  response.status(405).json({ status: `Method is not allowed!` });
}
