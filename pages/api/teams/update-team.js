import PrismaDB from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("Update Team End-point hit!");

  const reqBody = req.body;
  if (
    !reqBody.team_name ||
    !reqBody.id ||
    !reqBody.description ||
    !reqBody.team_domain_id
  ) {
    return res.status(500).json({
      error: 500,
      message:
        "Team name, description, user id, project id & team domains id are madatory!",
    });
  }
  try {
    const data = await PrismaDB.Teams.update({
      where: {
        id: parseInt(reqBody.id),
      },
      data: {
        team_name: reqBody.team_name,
        description: reqBody.description,
        TeamDomains: {
          connect: {
            id: reqBody.team_domain_id,
          },
        },
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while updating Team at backend: ", error);
    return res
      .status(422)
      .json({ error: "Error while updating Team at backend:", error });
  }
}
