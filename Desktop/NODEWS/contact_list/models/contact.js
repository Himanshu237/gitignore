const mongoose=require("mongoose");

// now to create a schema
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
            type:String,
            required:true
    }
});
// now since we have created the schema we need to tell the name of the coolection we would be using in the schema
//collection example the contact list as we created in index.js as right now it is the collection which we named as contact list now we need 
// to give the name would would it be called in data base where it would be stored


const Contact= mongoose.model("Contact",contactSchema)//now as we have given the name .. mongoose.model is the naming cinvention that follows
// so i have given name as (Contact)& collection will be defined by the schema which is contact schema
// now finally we just need to export this so module 

module.exports=Contact; // so till now we have created our contact schema now to start using it 

// we will go to index.js and we just need to require it there