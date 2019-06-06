//Require things
require('dotenv').config()
const express= require('express')
const session= require('express-session')
const massive= require('massive')
const auth_ctrl= require('./controllers/authcontroller')
const dish_ctrl= require('./controllers/dishcontroller')


const app= express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING}= process.env

app.use(express.json())

//Session set up

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*60
    }
}))



//Massive Setup

massive(CONNECTION_STRING).then((database)=>{
    app.set('db', database)
    console.log('DB out here with BDE')
})

//Endpoints for authentication/login

app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/logout', auth_ctrl.logout)


//Endpoints for dishes
app.get('/api/dishes', dish_ctrl.getAllDishes)
app.get('/api/:category', dish_ctrl.getCategory)
app.get('/api/restaurant/:id', dish_ctrl.getRestaurant)

//Endpoints for user profile

app.put('/api/user/:id', auth_ctrl.editUser)


app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} points to griffindor`))
