// The index.js file of your application
const express = require("express");
const app = express();
const port = 8086;


require("./routes/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.listen(port, () => console.log(`Example app running at http://localhost:${port}`));
