const mongoose=require("mongoose");//require the library


mongoose.connect("mongodb://localhost/contacts_list_db");//connect to the database

const db=mongoose.connection;//aquire the connection (to check if it is successfull)


db.on("error",console.error.bind(console,"error connecting to db"));// idf there is an error then print error


db.once("open",function(){
    console.log("succesfully connected to the database");// if running then print succesfull
});

// now after this i have to go to my index .js file and where my express has been fired up just before that i have to do =>