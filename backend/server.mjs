import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//Body Parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../frontend/public")));

//Define where the files are stored
const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null, __dirname + "/uploads")
    },
    filename: function (request, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

//Initialize multer
const upload = multer({storage: storage});



app.listen(port);