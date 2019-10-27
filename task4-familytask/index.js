const express = require("express");
const app = express();
const mongoose = require("mongoose");
let cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1/home_tasks", {    useNewUrlParser: true,    useUnifiedTopology: true  })
  .then(_ => console.log("connected to mongo"))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

let taskSchema = new Schema({
  description: String,
  date: Date,
  person: { type: Schema.Types.ObjectId, ref: 'member' },
});

let memberSchema = new Schema ({
  name: String,
  nick: String,
  description: String,
});

let taskModel = mongoose.model("Task", taskSchema);
let memberModel = mongoose.model("member", memberSchema, "member");


app.get('/alltasks', (req, res) => {
    taskModel.find({}).populate('member').exec((err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

app.get('/members', (req, res) => {
    memberModel.find({}, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
      console.log(data)
    });
  });

  app.get('/mama', (req, res) => {
    memberModel.find({'name':'mama'}, (err,mama) => {
        if (err) throw err;
        res.json(mama);
      });
    });
  app.get('/papa', (req, res) => {
    memberModel.find({'name':'papa'}, (err,papa) => {
        if (err) throw err;
        res.json(papa);
      });
    });
  app.get('/ya', (req, res) => {
    memberModel.find({'name':'ya'}, (err,ya) => {
        if (err) throw err;
        res.json(ya);
      });
    });

app.post('/addnew', (req, res) => {
    console.log(req.body);
    let newTask = new taskModel({ description, date, member } = req.body);
    newTask.save();
    res.sendStatus(201).send('ok');
    res.send("saved");
  });

app.listen(3000, _ => console.log("server listening on port 3000"));
