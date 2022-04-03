const mongoose = require('mongoose');

//connecting mongoose to mongodb local server
mongoose.connect("mongodb://127.0.0.1:27017/Sample1").then(() => {
 console.log("Successfully Connect to mongodb",)
}).catch(err => {
 console.log(err);
})

//creating a schema
const student = new mongoose.Schema({

 name: String,
 workout: Boolean,
 height: Number
});

//creating a model for that schema
const Student = new mongoose.model("Student", student);


//now we can start insert data

const adder = async () => {

 //first method to add data
 const ss = new Student({
  name: "tejas",
  workout: true,
  height: 6
 })


 await ss.save();

 //second method to add data
 const ss1 = await Student.create({
  name: "Tejas Singh",
  workout: true,
  height: 6
 })



}

adder();


