const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();

app.use(json());
app.use(cors());
app.get("/actobj",(req, res)=>{
  data = [
    {
      Actor: "Shahrukh khan",
      Age: 57,
      Flim: 100,
      Blockbouster: 8,
      SuperHit: 10,
      Hit: 70,
      Floop: 18,
      Image: "image.png",
    },
    {
      Actor: "Salman khan",
      Age: 57,
      Flim: 125,
      Blockbouster: 13,
      SuperHit: 17,
      Hit: 50,
      Floop: 45,
      Image: "image.png",
    },
    {
      Actor: "Ammer khan",
      Age: 59,
      Flim: 97,
      Blockbouster: 8,
      SuperHit: 9,
      Hit: 40,
      Floop: 40,
      Image: "image.png",
    },
    {
      Actor: "Akshay kumar",
      Age: 62,
      Flim: 135,
      Blockbouster: 4,
      SuperHit: 10,
      Hit: 50,
      Floop: 70,
      Image: "image.png",
    },
    {
      Actor: "Ajay devgan",
      Age: 61,
      Flim: 130,
      Blockbouster: 3,
      SuperHit: 10,
      Hit: 50,
      Floop: 65,
      Image: "image.png ",
    },
    {
      Actor: "Varun dhanwan",
      Age: 29,
      Flim: 35,
      Blockbouster: 1,
      SuperHit: 3,
      Hit: 19,
      Floop: 12,
      Image: "image.png ",
    },
    {
      Actor: "Sidhart malutra",
      Age: 29,
      Flim: 30,
      Blockbouster: 1,
      SuperHit: 2,
      Hit: 13,
      Floop: 14,
      Image: "image.png ",
    },
    {
      Actor: "Shahed kapoor",
      Age: 40,
      Flim: 70,
      Blockbouster: 1,
      SuperHit: 10,
      Hit: 29,
      Floop: 30,
      Image: "image.png ",
    },
  ];
  res.send(data)
});

const Server = app.listen(4440, () => {
  console.log("this server connected on port4444");
});
