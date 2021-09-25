const express = require ("express");
const app = express ();
const path = require ("path");


app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));




app.listen(4000, () => {
    console.log("App listening on port http://localhost:4000/");
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})
app.get("/producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/producto.html"));
})
app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
})

app.get("/acceso", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/acceso.html"));
})

app.get("/newuser", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/newuser.html"));
})