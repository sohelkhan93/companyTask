const express = require("express");
const { json } = require("express");
const cors = require("cors");
const app = express();

app.use(json());
app.use(cors());

app.get("/obj", (req, res) => {
  res.send([
    {
      Name: "Sameer shaikh",
      mobile: 9012347898554,
      pdac: "mentor",
      Neture: "Smiling",
      color: "yellow",
    },

    // app.get("/color",(req,res)=>{
    //   res.send
    // })

    {
      Name: "ibrahim mohammad",
      mobile: 9977886511,
      pdac: "Mentos",
      Neture: "Smiling",
      color: "red",
    },
    {
      Name: "  vazir shaikh",
      mobile: 727613376,
      pdac: "Manager Mentor",
      Neture: "always Attacking mode",
      color: "pink",
    },
    {
      Name: " zeeshan syed",
      mobile: 8876901124,
      pdac: "Logical boy",
      Neture: "Firing mode",
      color: "blue",
    },
    {
      Name: "faizan king",
      mobile: "Private Number",
      pdac: "Faster Menor in any way",
      Neture: "SRk",
      color: "green",
    },
  ]);
});

app.get("/pdac", (req, res) => {
  res.send("Sameer is a outstanding Mentor of pdac thingking of amjad sir");
});

const Server = app.listen(8114, () => {
  console.log("this server is runnning on port number8111");
});
