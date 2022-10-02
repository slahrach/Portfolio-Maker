const express = require("express");
const mongoose = require("mongoose");
const resume = require("./models/resume");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*app.get("/", (req, res)=>
{
    res.send("hello there");
});*/

app.get("/user", async (req, res) => {
  let o = await resume.findOne({ email: req.query.email });
  if (o) {
    res.send(o);
  } else {
    res.send("user not found");
  }
});

app.post("/create_resume", async (req, res) => {
  let user = await resume.find({ email: req.body.email } );
  if (user.length > 0) {
    console.log("email taken");
    res.send(`${req.body?.email ? req.body.email : ""} already taken`);
  } else {
    const my_resume = new resume(req.body);
    // my_resume.user = mongoose.Types.ObjectId(req._id);
    my_resume
      .save(my_resume)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
});

app.use((req, res) => {
  res.status(404).send("page not found");
});
mongoose
  .connect(
    "mongodb+srv://slahrach:strongOne@cluster0.bean6if.mongodb.net/resumes?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3001, () => {
      console.log(
        "connection to database, and server is listening to port 3001"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
