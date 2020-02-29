import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
  vus: 800,
  rps: 800,
  duration: "3m0s"
};

// add ip address
export default function() {
  let randomNum = Math.floor(Math.random() * 1000000);
  let res = http.post(
    `http://13.56.233.71:1234/api/listings/${randomNum}/add_booking`
  );
  check(res, {
    "is status 200": r => r.status === 200,
    "transaction time ok": r => r.timings.duration < 3000
  });
  sleep(1);
}
