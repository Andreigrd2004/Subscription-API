import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import {ARCJET_KEY} from "./env.js";


const aj = arcjet({
  key: ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    tokenBucket({
      mode: "LIVE",
      characteristics: ["ip.src"],
      refillRate: 5, // Refill 5 tokens per interval
      interval: 60, // Refill every 60 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;