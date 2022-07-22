const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8005;
const HandleData = require("./mongodb");
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

const path = require('path')

app.use(express.static(path.join(__dirname + "/public")))



app.post("/items",async(req, res) => {
    try {
        const Handles = await new HandleData({
            Item: req.body.list
        })
       const handled = await Handles.save();
       res.json("")
    } catch (error) {
        res.send("error");
    }
    });


    app.get("/itemss",async(req, res) => {

     await HandleData.find({}).then((items) => res.json(items))
    .catch((err) => console.log(err));
    });

    app.all("/itemsss",async(req, res) => {
        await HandleData.find({}).then((items) => res.json(items))
       .catch((err) => console.log(err));
       if(typeof req.body.upss!=="undefined" && typeof req.body.idss!=="undefined" && req.body.upss!=="" && req.body.idss!=="" ){
        try{
        await HandleData.updateOne(
            {_id:req.body.idss},
             {Item:req.body.upss},
              {new: true},
              function(err,doc){
                 // console.log(doc)
              }).clone()}
        catch(err){
            console.log(err)
        }
     };

       });

  app.all("/itemssss",async(req, res) => {
        await HandleData.find({}).then((items) => res.json(items))
       .catch((err) => console.log(err));
       if(typeof req.body.idss!=="undefined" && req.body.idss!==""){
        try{
        await HandleData.findOneAndDelete({_id:String(req.body.idss)})
        //res.write("done");
    }
        catch(err){
            console.log(err)
        }
     };

       });



 app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
      });

app.listen(port, () => {
    console.log('listening to the port ${port)');
 });



