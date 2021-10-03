const express = require("express");
const app = express();

app.listen("8080", function (req, res) {
    console.log("server is up and running");
})

app.use(express.json());

const userRouter=express.Router();
app.use("/user",userRouter);
userRouter.route("/")
.get(getUser)
.post(createUser)
.patch(updateUser)
.delete(deleteUser)

userRouter.route("/:id")
.get(getUserById)

let user={};

function getUser(req,res){
    res.json(user);
}

function createUser(req,res){
    user=req.body;
    res.send('data has been added succesfully');
}

function updateUser(req,res){
    let obj=req.body;
    for(let key in obj){
        user[key]=obj[key];
    }
    res.json(user);
}

function deleteUser(req,res){
    user={};
    res.json(user);
}

function getUserById(req,res){
    let id=req.params.id;
    res.send(id);
}