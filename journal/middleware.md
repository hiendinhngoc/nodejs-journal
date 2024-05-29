# Content

1. what is middleware
   -> it's anything between request and reponse

2. three type of middleware
   a. build in
   b. custom
   c. third parties
3. cors
   In Node.js, req.headers.origin refers to the Origin header in the incoming HTTP request. The Origin header is used to indicate the origin (scheme, hostname, and port) of the request, which is particularly relevant in the context of CORS (Cross-Origin Resource Sharing).

   When you fetch your local URL http://localhost:3500/ from a different origin, such as a webpage served from https://www.google.com, the browser includes the Origin header to inform the server about the origin of the request. This helps the server decide whether to allow or deny the request based on its CORS policy.

   Here’s a breakdown of what is happening in your scenario:

   1. You visit Google and use its console to run the fetch command:

   ```js
   fetch("http://localhost:3500/");
   ```

   2. The browser sends an HTTP request to http://localhost:3500/. This request includes an Origin header like this:

   ```sh
      Origin: https://www.google.com
   ```

   3. Your Node.js server receives the request and you log req.headers.origin:

   ```js
   console.log(req.headers.origin);
   ```

   4. The logged output is `https://www.google.com`, indicating that the request originated from a webpage hosted at `https://www.google.com`.

4.
