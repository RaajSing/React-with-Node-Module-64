const express = require ('express') ;
const app = express();
const port = process.env.PORT || 5000 ;
var cors = require('cors') ;

app.use(cors());
app.use(express.json());



// Array of Object Here....
const users = [
    {name : "Hrithik", id : 1, email : "hrithik1@gmail.com", password:"qw12"},
    {name : "Arpita", id : 2, email : "arpita2@gmail.com", password:"1254"},
    {name : "Dipa", id : 3, email : "dipa3@gmail.com", password:"12wr"},
    {name : "Rittika", id : 4, email : "rittika4@gmail.com", password:"t1c2"},
]


app.get('/', (req, res) => {
    res.send("Look Mama. Hrithik I can code look now. Run with Nodemon")
})



// Set All Users...
app.get('/users', (req, res) => {
    // Filter by search Query parameter...
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase() ;
        const matched = users.filter(user => user.name.includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
})




// User Post...
app.post('/user', (req, res) => {
    const user = (req.body);
    user.id = users.length + 1 ;
    users.push(user);
    res.send(user);
})




// Dynamic item set....
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id) ;
    const sUser = users.find(ssuser => ssuser.id === id);
    res.send(sUser);
})






app.listen(port, () => {
    console.log("listening to port", port);
})
