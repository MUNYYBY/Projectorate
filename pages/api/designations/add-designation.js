import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const designationData = req.body;
  try {
    const data = await PrismaDB.Designation.create({
      data: {
        title: designationData.title,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while add new designation at backend: ", error);
    return res
      .status(422)
      .json({ Message: "Error while add new designation at backend: " });
  }
}
