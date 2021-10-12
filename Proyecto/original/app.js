const express = require ("express");
const app = express ();
const path = require ("path");
const methodOverride = require('method-override');


app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


/*rutas*/

const mainRouter = require('./src/routes/mainRouter');
const productController = require('./src/routes/productRouter.js');
const usuariosController = require('./src/routes/usersRouter');

app.use('/', mainRouter);
app.use('/productos', productController);
app.use('/usuarios', usuariosController);


app.listen(4000, () => {
    console.log("App listening on port http://localhost:4000/");
});