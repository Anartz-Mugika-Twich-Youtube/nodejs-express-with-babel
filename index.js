import http from "http";

const server = http
  .createServer((_, res) => {
    res.end("Estamos en el tutorial de Node+Babel :)");
  })
  .listen(4001);

console.log("El servidor está en funcionamiento en http://localhost:4001");
export default server;
