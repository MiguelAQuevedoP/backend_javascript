import http from "http";
import course from "./courses.js";
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      return manageReqGET(req, res);
    case "POST":
      return manageReqPOST(req, res);
    case "PUT":
      return manageReqPUT(req, res);
    case "DELETE":
      return manageReqDELETE(req, res);
    default:
      return console.log(`server cant manage the method ${method}`);
  }
});

const manageReqGET = (req, res, error) => {
  try {
    const path = req.url;
    console.log(path);
    if (path === "/") {
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end('Welcome to the server and API with nodejs');
    } else if (path === '/courses') {
      return res.end(JSON.stringify(course));
    } else if (path === "/courses/programming") {
      return res.end(JSON.stringify(course.programming));
    } else {
      res.statusCode = 404;
      return res.end("Not found");
    }
  } catch (error) {
    res.statusCode = 500;
    return console.error(error);
  }
};

const manageReqPOST = (req, res, error) => {
  try {
    const path = req.url;
    console.log(path);
    if (path === "/") {
      return res.end("the server received a POST request");
    } else if(path === '/courses'){
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        body = JSON.parse(body);
        console.log(body);
        return res.end('The server received a POST request in courses')
      });
    }
    else {
      res.statusCode = 404;
      return res.end("Not found");
    }
  } catch (error) {
    res.statusCode = 500;
    return console.error(error);
  }
};

const manageReqPUT = (req, res, error) => {
  try {
    const path = req.url;
    console.log(path);
    if (path === "/") {
      return res.end("the server received a PUT request");
    } else if (path === "/courses") {
      return res.end("the server received a PUT request in courses");
    } else {
      res.statusCode = 404;
      return res.end("Not found");
    }
  } catch (error) {
    res.statusCode = 500;
    return console.error(error);
  }
};

const manageReqDELETE = (req, res, error) => {
  try {
    const path = req.url;
    console.log(path);
    if (path === "/") {
      return res.end("the server received a DELETE request");
    } else if (path === "/courses") {
      return res.end("the server received a DELETE request in courses");
    } else {
      res.statusCode = 404;
      return res.end("Not found");
    }
  } catch (error) {
    res.statusCode = 500;
    return console.error(error);
  }
};

server.listen(PORT, () => {
  console.log(`server is running on port http://localhost${PORT}`);
});
