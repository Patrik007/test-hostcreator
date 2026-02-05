import { createServer } from "node:http";

const server = createServer((req, res) =>{
    res.write(JSON.stringify({"status":"everithing ok"}));
    res.end();
});

server.listen(5000);