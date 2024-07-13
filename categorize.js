// routes/data.js

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Data = require('./schema');

// API to fetch data categorized by year
router.get('/data-by-year', async (req, res) => {
    const year = parseInt(req.query.year); // Get the year from query parameter
    if (!year || isNaN(year)) {
        return res.status(400).json({ message: 'Invalid year parameter' });
    }

    try {
        const data = await Data.find();
        const categorizedData = data.filter(item => {
            return item.published && new Date(item.published).getFullYear() === year;
        });
        
        res.json(categorizedData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// // API endpoint to fetch data categorized by end year
// router.get('/data-by-end-year', async (req, res) => {
//   const endYear = parseInt(req.query.end_year); // Get the end_year from query parameter
//   if (!endYear || isNaN(endYear)) {
//       return res.status(400).json({ message: 'Invalid end year parameter' });
//   }

//   try {
//       const data = await collection.find({}).toArray();
//       const categorizedData = data.filter(item => {
//           return item.end_year && parseInt(item.end_year) === endYear;
//       });

//       res.json(categorizedData);
//   } catch (err) {
//       console.error('Error fetching data from MongoDB', err);
//       res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// API to fetch data categorized by topic
router.get('/data-by-topic', async (req, res) => {
    console.log(req.query.topic);
  const topic = req.query.topic; // Get the topic from query parameter
  if (!topic) {
      return res.status(400).json({ message: 'Invalid topic parameter' });
  }

  try {
      const data = await Data.find({ topic: topic });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// API to fetch data categorized by sector
router.get('/data-by-sector', async (req, res) => {
  const sector = req.query.sector; // Get the sector from query parameter
  if (!sector) {
      return res.status(400).json({ message: 'Invalid sector parameter' });
  }

  try {
      const data = await Data.find({ sector: sector });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// API to fetch data categorized by region
router.get('/data-by-region', async (req, res) => {
  const region = req.query.region; // Get the region from query parameter
  if (!region) {
      return res.status(400).json({ message: 'Invalid region parameter' });
  }

  try {
      const data = await Data.find({ region: region });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// API to fetch data categorized by PEST
router.get('/data-by-pest', async (req, res) => {
  const pest = req.query.pest; // Get the PEST from query parameter
  if (!pest) {
      return res.status(400).json({ message: 'Invalid PEST parameter' });
  }

  try {
      const data = await Data.find({ pestle: pest });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// API to fetch data categorized by source
router.get('/data-by-source', async (req, res) => {
  const source = req.query.source; // Get the source from query parameter
  if (!source) {
      return res.status(400).json({ message: 'Invalid source parameter' });
  }

  try {
      const data = await Data.find({ source: source });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


// API to fetch data categorized by SWOT
router.get('/data-by-swot', async (req, res) => {
  const swot = req.query.swot; // Get the SWOT from query parameter
  if (!swot) {
      return res.status(400).json({ message: 'Invalid SWOT parameter' });
  }

  try {
      const data = await Data.find({ swot: swot });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});



// API to fetch data categorized by country
router.get('/data-by-country', async (req, res) => {
  const country = req.query.country; // Get the country from query parameter
  if (!country) {
      return res.status(400).json({ message: 'Invalid country parameter' });
  }

  try {
      const data = await Data.find({ country: country });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// API to fetch data categorized by city
router.get('/data-by-city', async (req, res) => {
  const city = req.query.city; // Get the city from query parameter
  if (!city) {
      return res.status(400).json({ message: 'Invalid city parameter' });
  }

  try {
      const data = await Data.find({ city: city });
      res.json(data);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});




module.exports = router;
