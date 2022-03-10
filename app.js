// Module Import
require("dotenv").config();
const http = require("http")
const app = require("./app/app")
const mongoose = require("mongoose")

// Server configuration
 // Server Data
const port = process.env.PORT || 3000;
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dburl = `mongodb+srv://${dbUser}:${dbPass}@backend-projects.p8hmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

 // Server Connection
const server = http.createServer(app);
mongoose.connect(dburl, {useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log("Database is connected...")
    server.listen(port, () => {
        console.log("Server Listening On Port " + port);
    });
})

