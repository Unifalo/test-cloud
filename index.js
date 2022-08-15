const express = require("express");
const expressIP = require("express-ip");
const app = express();

app.set('json spaces', 4);
app.use(express.json());
app.use(expressIP().getIpInfoMiddleware);

app.get("/test", (req, res) => {
    res.json(req.ipInfo)
})

app.listen(80, () => {
    console.log("Server is listening on port 80...")
})
