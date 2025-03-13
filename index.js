const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// ভিডিও লিংকগুলোর লিস্ট
const videoLinks = [
  "https://i.imgur.com/upJVizB.mp4",
  "https://i.imgur.com/upJVizB.mp4",
  "https://i.imgur.com/upJVizB.mp4",
  "https://i.imgur.com/upJVizB.mp4"
];

// রুট রাউট (হোমপেজ)
app.get("/", (req, res) => {
  res.send("Welcome to Ri Nirob API!");
});

// র‍্যান্ডম ভিডিও রিটার্ন করা হবে
app.get("/random", (req, res) => {
  const randomVideo = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  res.json({ video: randomVideo });
});

// সার্ভার রান করা হচ্ছে
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});