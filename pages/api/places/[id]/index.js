import dbConnect from "@/db/dbConnect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Places.findById(id);

    if (!place) {
      response.status(404).json({ status: "Page not found!" });
      return;
    }
    response.status(200).json(place);
    return;
  }

  if (request.method === "PUT") {
    const placeData = request.body;
    await Places.findByIdAndUpdate(id, placeData);
    response.status(200).json({ status: `Joke ${id} updated!` });
    return;
  }

  if (request.method === "DELETE") {
    await Places.findByIdAndDelete(id);
    response.status(200).json({ status: `Joke ${id} successfully deleted.` });
  }

  response.status(405).json({ status: "Method not allowed." });
}
