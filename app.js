
const express = require ("express");
const session = require('express-session');
const app = express ();
const path = require ("path");
const methodOverride = require('method-override');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')


app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));



app.use(session({
    secret: "Shhh, Its a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);

/*rutas*/

const mainRouter = require('./routes/mainRouter');
const productController = require('./routes/productRouter.js');
const usuariosController = require('./routes/usersRouter');

app.use('/', mainRouter);
app.use('/productos', productController);
app.use('/usuarios', usuariosController);


app.listen(4000, () => {
    console.log("App listening on port http://localhost:4000/");
});