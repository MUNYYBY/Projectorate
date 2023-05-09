import fs from "fs";
import path from "path";
import getConfig from "next/config";

const serverPath = (staticFilePath) => {
  return path.join(
    String(getConfig().serverRuntimeConfig.PROJECT_ROOT),
    staticFilePath,
    "resouces"
  );
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: `Method '${req.method}' not allowed! ❌` });
  }

  try {
    const { url } = req.query;

    const rootDir = "/public/uploads";
    const dir = serverPath(rootDir);
    var fileUrl = dir + "/" + url;

    console.log(fileUrl);
    console.log("download started");

    const path = fileUrl;
    const file = fs.createReadStream(path);
    res.setHeader("Content-Disposition", "attachment;filename=" + url);
    file.pipe(res);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error while downloading file:" + error.message });
  }
  // res
  //   .status(200)
  //   .json("This api route is dedicated to downloading converted Images!");
}
