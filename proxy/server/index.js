require("newrelic");
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const fs = require("fs");

app.get("/loaderio-180421a2c2c8857a757215a124fb251d/", (req, res) => {
  res.send("./loaderio-180421a2c2c8857a757215a124fb251d.txt");
});

// get request to get all bookings by listing from the proxy
app.get("/api/listings/:listing_id/bookings", (req, res) => {
  axios
    .get(
      "http://13.57.35.247:3000/api/listings/" +
        req.params.listing_id +
        "/bookings"
    )
    .then(innerRes => {
      res.sendStatus(200);
      res.write(JSON.stringify(innerRes.data));
      res.end();
    })
    .catch(err => {
      res.writeHead(500);
      res.end();
      console.log(err);
    });
});

// post request to add booking by listing from the proxy

app.post("/api/listings/:listing_id/add_booking", (req, res) => {
  axios
    .post(
      "http://13.57.35.247:3000/api/listings/" +
        req.params.listing_id +
        "/add_booking"
    )
    .then(innerRes => {
      res.writeHead(200);

      res.end();
    })
    .catch(err => {
      res.writeHead(500);
      res.end();
      console.log(err);
    });
});

// app.get("/api/:id", (req, res) => {
//   axios
//     .get("http://localhost:1337" + req.url)
//     .then(innerRes => {
//       res.writeHead(200);
//       console.log(innerRes.data);
//       res.write(JSON.stringify(innerRes.data));
//       res.end();
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get("/v1/api/:accommodationId/reviews", (req, res) => {
//   axios
//     .get("http://localhost:2020" + req.url)
//     .then(innerRes => {
//       res.writeHead(200);
//       res.write(JSON.stringify(innerRes.data));
//       res.end();
//     })
//     .catch(err => {
//       res.writeHead(500);
//       res.end();
//       console.log(err);
//     });
// });

// app.get("/getHomes", (req, res) => {
//   axios
//     .get("http://localhost:4321" + req.url)
//     .then(innerRes => {
//       res.writeHead(200);
//       res.write(JSON.stringify(innerRes.data));
//       res.end();
//     })
//     .catch(err => {
//       res.writeHead(500);
//       res.end();
//       console.log(err);
//     });
// });

app.use(express.static(path.join(__dirname, "../public")));
app.listen(1234, () => {
  console.log("listening on port 1234");
});
