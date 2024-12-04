import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app= express();

app.set("view engine", "ejs");
const __dirname = dirname(fileURLToPath(import.meta.url));


const port=3000
app.use(bodyParser.urlencoded({extended:true}));
function dyaLogger(req, res, next){
    const date = new Date();
    req.num=date.getDay();
    // console.log(req.num);
    next()
}

app.use(dyaLogger)


app.get("/", (req, res) => { 
    res.render(__dirname + "/views/index.ejs",
        {num:req.num}
    );
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });