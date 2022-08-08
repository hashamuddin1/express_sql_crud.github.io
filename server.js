const express = require("express");
const app = express();
const router = require("./routes/router")
const PORT = process.env.PORT || 3002

app.use(router)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING IN PORT ${PORT}`)
})