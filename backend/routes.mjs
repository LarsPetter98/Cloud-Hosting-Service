import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import passport from "passport";

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

// Handle login route
router.post("/login", (request, response, next) => {
    console.log(request.body.email);
});

export default router;

//Handle signup route
router.post("/signup", (request, response, next) => {
    const saltAndHash = createNewPassword(request.body.password);
    const salt = saltAndHash.salt;
    const hash = saltAndHash.hash;

    const newUser = new User({
        username: request.body.username,
        salt: salt,
        hash: hash,
        admin: true
    });

    newUser.save()
    .then((user) => {
     console.log(user)
     response.redirect("/login");
    });
});


router.post("/upload", /* upload.single("file"), */ (request, response, next) => {
    // 'file' in upload.single('file') corresponds to the name attribute in your form
    // For example, if your form has <input type="file" name="file">, then it should be upload.single('file')

    response.send("File uploaded succesfully");
    
});
