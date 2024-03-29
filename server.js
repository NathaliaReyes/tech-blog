const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

// This expression is requiring the connect-session-sequelize package and storing it in the SequelizeStore variable
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// This object is creating a session for the user to store their information
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  rolling: true,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// This statement is telling the app to use the session created above
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
