const express = require ("express");
const bodyp = require ("body-parser");
const request = require ("request");
const https = require("https");

const app = express();
app.listen(process.env.PORT|| 3000 ,function(){ 
// but for our app to run on both local and global .. we used || ...
  console.log("Server running 3000");
})
app.get("/",function(req,res){
  res.sendFile(__dirname+"/1signup.html")
});
// now inorder for our server to set up static files(local) like css...
// we must use a special function of express called static
// and then put the static files in a folder
app.use(express.static("public"));
// now we access the files through relative url
app.use(bodyp.urlencoded({extended:true}));

app.post("/",function(req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName,lastName,email);

const data = {
  // here we have to write all key-value pairs 
  //that mailchimp is gonna recognise
members: [
    {
    // (check from mailchimp how to write the key-value)
    email_address:email,
    status: "subscribed",
    merge_fields:{
      // check from mailchimp
      FNAME: firstName,
      LNAME: lastName
    }
  }
]

};
// the above is js and we must convert it to json
const jsonData = JSON.stringify(data);


const url = "" // API link has been currently kept empty to avoid 
//unnecessary  billing via web scrapping...
const options = {

  method:"POST",
  // now we must do authentication - check mailchimp website
  auth : "" // used api key API link has been currently kept empty to avoid unnecessary 
  // billing via web scrapping...

}

const request = https.request(url , options , function(response){
if(response.statusCode===200){
  res.sendFile(__dirname+"/2signupSuccess.html");
  console.log("Success");
}else{
    res.sendFile(__dirname+"/3signupFail.html");
    console.log("Failure");
  }
response.on("data",function(data){
  console.log(JSON.parse(data));
})
})
request.write(jsonData); 
request.end();

});

// NOW ADDING FAILURE ROUTE FOR OUR POST REQUEST
app.post("/failure",function(req,res){
  res.redirect("/");
})
