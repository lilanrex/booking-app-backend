import Hotel from "../models/Hotel.js";

export const createHotel = async function (req,res,next) {
    
    const newHotel = new Hotel(req.body);
      
    try{
       const savedHotel = await newHotel.save();
       res.status(200).json(savedHotel);
      } catch(err) {
       next(err);
      }

} 

export async function updateHotel(req,res,next) {


    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
           {$set: req.body},
           {new:true} // we get the updated document in our const updatedHotel.
           );
        res.status(200).json(updatedHotel);
       } catch(err) {
        next(err);
       }
}

export async function deleteHotel (req,res,next) {

    try{
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.send(200).json("Hotel deleted");
     } catch(err){
          next(err);
     }
}

export async function getHotel(req,res,next) {

    try {
        const hotel = await Hotel.findById(req.params.id);
        res.send(200).json(hotel); 
     } catch (err) {
       next(err);
     }
}

export async function getAllHotels (req,res,next) {
  
    try {
        const hotels = await Hotel.find();
        res.send(200).json(hotels); 
     } catch (err) {
        next(err);
     }
}