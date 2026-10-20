import tinify from "tinify";
import fs from "fs";
import path from "path";

// Set your TinyPNG API Key here
tinify.key = "N4cXwB228kHQZrYL3JF2mwkrYpyl9r";
// Define the path to your assets images folder
const imagesDir = path.join(process.cwd(), "src/assets");

console.log("Starting image compression...");

// Read all files in the assets directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory or the folder does not exist.", err);
    return;
  }

  // Filter and find image files
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
  });

  if (imageFiles.length === 0) {
    console.log("No images found in src/assets to compress.");
    return;
  }

  imageFiles.forEach((file) => {
    const filePath = path.join(imagesDir, file);
    console.log(`Compressing: ${file}`);
    
    // Process and overwrite the image
    const source = tinify.fromFile(filePath);
    source.toFile(filePath, (err) => {
      if (err) {
        console.error(`Error compressing ${file}:`, err);
      } else {
        console.log(`Successfully compressed: ${file}`);
      }
    });
  });
});