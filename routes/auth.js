import  express  from "express";

const router = express.Router();

router.get("/", function(req,res){
    res.send("Bienvenue!");
});

router.get("/register", function(req,res){
      res.send("click to......");
});

export default router;