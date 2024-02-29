// basic boilerplate for express
// XPathExpression.json middleware

const express = require("express");
const { createtodo } = require("./types");
const {todo} = require("./db");
const app = express();

const cors = require("cors");
app.use(cors());


app.use(express.json());

app.post("/todo",async function(req,res){
  const createpayload = req.body;
  const parsedpayload = createtodo.safeParse(createpayload);
  console.log(parsedpayload)
  if(!parsedpayload.success){
    res.status(411).json({
        msg:"wrong inputs",
    })
    return;
   }
   //db
   await todo.create({
    title: createpayload.title,
    description:createpayload.description,
    completed:false
   })
   res.json({msg:"task created"})
})

app.post("/",function(req,res){
   res.json({
       msg : "done!"
   })
})

app.get("/todos",async function(req,res){
   const todos= await todo.find({});
   console.log(todos)
   
   res.json({
    todos
   })
})

app.put("/completed",async function(req,res){
    const updatedpayload = req.body;
    const parsedpayload = createtodo.safeParse(updatedpayload);
    if(!parsedpayload.success){
      res.status(411).json({
          msg:"wrong inputs",
      })
      return;
     }
     await todo.update({
        _id: req.body.id
     },{
        completed:true
     })
     res.json({msg:"todo marked as completed"})

  })
  const PORT = 3000;

  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });

