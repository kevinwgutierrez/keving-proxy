import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
  vus: 100,
  rps: 200,
  duration: "1m0s"
};

export default function() {
  let randomNum = Math.floor(Math.random() * 5000);
  let i = Math.floor(Math.random() * 100);
  let res = http.get(`http://localhost:1234/api/listings/${i}/bookings`);
  check(res, {
    "is status 200": r => r.status === 200,
    "transaction time ok": r => r.timings.duration < 3000
  });
  sleep(1);
}