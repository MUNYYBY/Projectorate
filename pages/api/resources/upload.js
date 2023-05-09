import fs from "fs";
import formidable from "formidable";
import path from "path";
import getConfig from "next/config";
// const sharp = require("sharp");

const serverPath = (staticFilePath) => {
  return path.join(
    String(getConfig().serverRuntimeConfig.PROJECT_ROOT),
    staticFilePath,
    "resouces"
  );
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: `Method '${req.method}' not allowed! ❌` });
  }
  let newFileName = null;
  let originalFileName = null;
  try {
    //Relative directories
    const rootDir = "/public/uploads";

    // directory for saving images
    let dir = serverPath(rootDir);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    // get data from request
    const data = await new Promise(function (resolve, reject) {
      // use formidable to get uploaded image and fields setting upload directory to the specified directory
      // this saves the image with a uuid to the specified directory but with no extension
      const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: dir,
      });
      form.keepExtensions = true;
      //Save image coming from req
      form.parse(req, async function (err, fields, files) {
        if (err) return reject(err);
        console.log("Files:", fields, files);
        newFileName = files["file"].newFilename;
        originalFileName = files["file"].originalFilename;
        resolve({ fields, files });
      });
    });
    const apiResponse = {
      name: originalFileName,
      newName: newFileName,
      imagePath: path.join(dir, newFileName),
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while upload file:" + error.message });
  }
}
export const config = {
  api: {
    bodyParser: false,
  },
};
