## Content

- [Normal file](#methods-to-work-with-normal-files)
- [Stream file](#stream)
  - [pipe method](#pipe)
- [Directory](#directory)
  - [mkdir](#mkdir)
  - [rmdir](#rmdir)
  - [existsSync](#existssync)

### Methods to work with normal files

- `readFile`
- `writeFile`
- `appendFile`
- `rename`

### Stream

#### pipe

In Node.js, the pipe method is used to asynchronously transfer data from one readable stream to a writable stream. It is a convenient way to handle data flowing between streams without manually managing the flow.

Here's how the pipe method works:

- Source Stream: The stream from which data will be read. This stream must be readable.
- Destination Stream: The stream to which data will be written. This stream must be writable.
  Syntax:

```js
readableStream.pipe(writableStream, [options]);
```

- Options (Optional): An object that can contain options to customize the behavior of the pipe operation. Some common options include:
  - `end`: A boolean value indicating whether to end the destination stream when the source stream ends. Default is true.
  - `error`: A boolean value indicating whether to automatically handle errors from the source stream by emitting them on the destination stream. Default is true.

Example:

```js
const fs = require("fs");

const readableStream = fs.createReadStream("source.txt");
const writableStream = fs.createWriteStream("destination.txt");

readableStream.pipe(writableStream);
```

In this example, data is read from the file `source.txt` using a readable stream created with `createReadStream`. Then, the `pipe` method is called on the readable stream, with the writable stream `writableStream` as the argument. This pipes the data from the readable stream to the writable stream, asynchronously transferring data between the two.

It's worth noting that the `pipe` method returns the destination stream, which allows for chaining. For example:

```js
readableStream.pipe(writableStream1).pipe(writableStream2);
```

This code pipes the data from the readable stream to `writableStream1`, and then pipes the same data from `writableStream1` to `writableStream2`. This chaining can be useful for handling multiple streams in sequence.

Overall, the `pipe` method simplifies the process of working with streams in `Node.js` by providing a straightforward way to transfer data between them while also handling flow control and error management.

### Directory

#### mkdir

`mkdir` is used to create a new directory.
Syntax:

```js
fs.mkdir(path[, options], callback)
```

- `path`: The path of the directory to be created.
- `options` (Optional): An object specifying options for directory creation, such as recursive to create parent directories if they do not exist. Available since Node.js v10.12.0.
- `callback`: A callback function that is called once the operation is complete. It takes one argument, which is an error object if an error occurred, or null otherwise.

#### rmdir

`rmdir` is used to remove an existing directory.
Syntax:

```js
fs.rmdir(path[, options], callback)
```

- `path`: The path of the directory to be removed.
- `options` (Optional): An object specifying options for directory removal.
- `callback`: A callback function that is called once the operation is complete. It takes one argument, which is an error object if an error occurred, or null otherwise.

#### existsSync

`existsSync` is a synchronous function used to check if a file or directory exists.
Syntax:

```js
fs.existsSync(path);
```

- `path`: The path to the file or directory to check.
  Returns true if the path exists, and false otherwise.
