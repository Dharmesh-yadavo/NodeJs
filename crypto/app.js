import crypto from "crypto";

const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);

const hashValue = crypto.createHash("sha256").update("dharmesh").digest("hex");
console.log(hashValue);
