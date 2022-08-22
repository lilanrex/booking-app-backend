import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


mongoose.connect("mongodb://localhost:27017/bookingDB", { useNewUrlParser: true , useUnifiedTopology: true } );

//MIDDLEWARES

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//ERROR HANDLING MIDDLEWARE
app.use(function(err,req,res,next){
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
        return res.status(errorStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack
        });
});


app.listen(8000, function(req,res){
    console.log("server started on port 8000");
});