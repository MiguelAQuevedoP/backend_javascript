import http from "http";
//import express from 'express';
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("===> req (solicitud)");
  console.log(req.method);
  console.log(req.url);

  console.log("===> res (respuesta)");
  res.setHeader("content-type", "application/json");
  console.log(res.getHeaders());
  res.end("hello world");
});

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
