const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DBConnect = require("./DBconnect");
const bodyParser = require('body-parser');
const DataModel =require("./schema")
const dataRouter = require('./categorize');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
DBConnect();

const corsoption= {
  origin : "http://localhost:3000"
}

app.use(cors(corsoption))

app.post('/populate', async (req, res) => {
    try {
      const data = req.body; // Expecting an array of objects
      if (!Array.isArray(data)) {
        return res.status(400).json({ message: 'Data should be an array of objects' });
      }
      await DataModel.insertMany(data);
      res.status(201).json({ message: 'Data successfully populated' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.use('/api', dataRouter); // Use the router



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});