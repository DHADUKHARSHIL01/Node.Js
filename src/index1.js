import http from "http";
import data from "./api.data.js";

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(6001);
