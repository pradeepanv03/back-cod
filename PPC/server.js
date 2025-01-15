
const mongoose = require('mongoose');
const express = require('express');
const port = 1000;
const UserRouter = require('./User/UserRouter');
const AdminRouter = require('./Admin/AdminRouter');
const AddRouter = require('./AddRouter');


const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors())
app.use(express.json()); 

app.use('/uploads', express.static(path.join(__dirname,'config', 'serviceAccountKey.json', 'uploads')));

mongoose.connect("mongodb://localhost:27017/PPCPondy")
.then( ( ) =>
{
    
    console.log("Database conneted");
    
})
.catch(() =>
{
    console.log("Database Failed to Connect");

})

app.listen(port , ()=>
{
    console.log("Server Running in", port);
    
})


app.use("/PPC", UserRouter);
app.use("/PPC", AdminRouter);
app.use("/PPC", AddRouter);




