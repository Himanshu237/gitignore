const express=require("express"); // ye library hai isko require kr rhe h 
const path=require("path");  // isko bhi kind of library bol skte hain 
const port=8000; // 

const db=require("./config/mongoose");  // ye db ke liye library hai 
const Contact= require("./models/contact"); // schema {data base ka structure } data base ke andr hai waha se import krn rhe h sab data
//contact ke andr agya

const app=express(); // express library ka ab saara cheez app me le liye aur app se use krenge usko 
app.set("view engine","ejs"); // ye hum bata he h ki view engine ejs hai 
app.set("views",path.join(__dirname, "views")); // ye automatic path nikaal dega ki aap konsa path use kr rhe ho 
app.use(express.urlencoded()); // ye middleware hai jab bhi .use lag jaye toh it indicates ki vo middleware hai 
app.use(express.static("assets"));


var contactList=[
  {
    name:"Arpan",
    phone:"1111111"
  },
  {
    name:"Aman",
    phone:"11134111"
  },
  {
    name:"sujeet",
    phone:"1111145346534"
  }
]

app.get("/",function(req,res){
  Contact.find({},function(err,contacts){
    if(err){
      console.log("error in fetching contacts from db");
      return;
    }
    return res.render("home",{
      title:"Contact List",
      contact_list:contacts
    });
  });
});

app.get("/practice",function(req,res){
  return res.render("practice",{
    title:"Let us play with ejs",
    contact_list:contactList
  });
});

// C:\Program Files\MongoDB\Server\5.0\data\

app.post("/create-contact",function(req,res){
  // console.log(req.query.body);
  // contactList.push(req.body);
  // console.log(contactList);
  Contact.create({
    name: req.body.name,
    phone: req.body.phone
  },
  function(err, newContact){
    if(err)
    {
      console.log("error in creating the contact");
      return;
    }
    console.log("**********",newContact);
    return res.redirect("back");
  });

});
app.get("/delete-contact/",function(req,res){
  // get the id from querry in the url
  let id=req.query.id;

  // now next step is just like we were iterating over index and finding list of contacts we will just tell the data base  it is just a 
  // a single opperation goes to the data base fetches the contact and executes the opperation that we want
  // so i will do find the contact in db using id and delete it
  // now to find by id it is prebuilt
  Contact.findByIdAndDelete(id,function(err){ // here there is only one argument bcs we are deleting something
    if(err)
    {
      console.log("error in deleting an object form database");
      return;
    }
    return res.redirect("back");
  });

});

app.listen(port,function(err){
  if(err){
    console.log("error in running the server",err);
  }
  console.log("Yup!My Express Server is running on port:",port);
});