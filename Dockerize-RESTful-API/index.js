import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import cors from 'cors';



const router = express.Router();


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
   
  })
)

app.use('/persons',router);

app.get('/', (req, res )=> res.send('Hello from home page'));
app.listen(PORT, () =>console.log(`it's alive on http://localhost:${PORT}`)) ;





let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

//Push user using Postman
router.post("/", (req, res) => {
  const user = req.body;
  // spread operator we spreee the user object using ...user and we add the user id to it
  const userWithID = { ...user, id: uuidv4() };
  users.push(userWithID);
  res.send(`user with the name ${user.name} added to the database `);
});

//search for a user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
});

//delete a user
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`user with id ${id} has been deleted`);
});

//update user name using his id
router.patch('/:id',(req,res)=>{
    const {id}= req.params;
    const {name} = req.body;
    const user = users.find((user)=> user.id === id);
    if(name)  user.name = name ; 
    
res.send(`user has been updated to ${id}`);
});





