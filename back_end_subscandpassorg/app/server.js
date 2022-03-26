const express = require ('express');
const cors = require ('cors');
const app = express();
var mongo = require('mongodb');
const bodyParser = require('body-parser');

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});


app.post('/signup', async (req,res)=>{

  console(req.body);





})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});