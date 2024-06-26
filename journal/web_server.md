# Content

- [http module](#http-module)
  - [include the module](#the-built-in-http-module)
  - [create web server](#nodejs-as-a-web-server)
  - [add header](#add-an-http-header)
  - [read query string](#read-the-query-string)

## http module

### The Built-in HTTP Module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

To include the HTTP module, use the `require()` method:

```js
var http = require("http");
```

### Node.js as a Web Server

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the `createServer()` method to create an HTTP server:
Example

```js
Get your own Node.js Server
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

The function passed into the `http.createServer()` method, will be executed when someone tries to access the computer on port 8080.

### Add an HTTP Header

If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
Example

```js
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
```

The first argument of the `res.writeHead()` method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

### Read the Query String

The function passed into the `http.createServer()` has a req argument that represents the request from the client, as an object (`http.IncomingMessage` object).

This object has a property called "url" which holds the part of the url that comes after the domain name:

```js
demo_http_url.js;
var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);
```
