import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/", (request, response, next) => {
    try {
        response.sendFile(path.join(__dirname, "../frontend/public"));
    }
    catch {
        const error = new Error(); 
        response.status(404).json({"Resource not found": error}); 
    }
});

router.post("/upload", upload.single("file"), (request, response) => {
    // 'file' in upload.single('file') corresponds to the name attribute in your form
    // For example, if your form has <input type="file" name="file">, then it should be upload.single('file')

    response.send("File uploaded succesfully");
    
});