const express = require ("express");
const app = express ();
const path = require ("path");

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

app.listen(5000, () => {
    console.log("App listening on port http://localhost:5000/");
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})