import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Get Search Employee End-point hit!");
  const { search } = req.query;
  try {
    const result = await PrismaDB.employee
      .findMany({
        where: {
          OR: [
            {
              first_name: {
                contains: search,
              },
            },
            {
              last_name: {
                contains: search,
              },
            },
            {
              email: {
                contains: search,
              },
            },
          ],
        },
      })
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch((err) => {
        return res.status(500).json({
          error: 500,
          message:
            "Error while getting Search employees at backend: " + err.message,
        });
      });
  } catch (error) {
    console.log("Error while getting Search employees at backedn: ", error);
    return res
      .status(422)
      .json({ error: "Error while getting Search employees at backend: " });
  }
}
