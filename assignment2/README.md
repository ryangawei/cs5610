# Cat for Adoption

This is a website for cat adoption. Each card in the windows represents an available cat, with information including name, gender, age, etc.

It supports CRUD operations on cats' records.

## Setup (host locally)

1. Install dependencies with `npm install`
2. Create a `.env` file in the root folder, and put in the MongoDB URI (provide if needed).
3. Start the server using `node ./bin/www` or `nodemon ./bin/www`. Once success you should see the following terminal outputs,
   
   ```text
   [nodemon] 2.0.20
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `node .\bin\www`
   Debugger listening on ws://127.0.0.1:8508/e6c8ee90-549d-4d19-95e1-5ab21c4c3a89
   For help, see: https://nodejs.org/en/docs/inspector
   Debugger attached.
   App listening to port 3000
   ```

4. Client accesses service using `localhost:3000`
