const express = require("express");
const router = express.Router();
const Task = require("../model/Task");
var Handler = require('../Utiles/Handler')
var message = require('../localization/en.json')
var fs = require('fs');

router.post("/create", async (req, res) => {
    try {
        const task = new Task();
        task.creation_date = req.body.creation_date;
        task.end_date = req.body.end_date;
        task.edit_date = req.body.edit_date;
        task.description = req.body.description;
        task.assigned = req.body.assigned;
        task.Type = req.body.Type;
        const newTask = await Task.create(task);
        return res.status(200).send({ newTask });
    } catch (err) {
        Handler.handleError(res, err);
    }
});

router.get("/get", async (req, res) => {
    try {
        const tasks = await Task.find({});
        return res.send(tasks);
    } catch (err) {
        return Handler.handleError(res, err);
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        if (await Task.findOne({ _id: req.params.id })){
            Task.findOneAndUpdate({_id :req.params.id}, req.body, function (err, user) {
            });
            const taskData =  await Task.findOne({_id : req.params.id});
            console.log(taskData);
            res.send(taskData);
        }
    } catch (err) {
        Handler.handleError(res, err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        if (await Task.findOne({ _id: req.params.id })){
            Task.findOneAndRemove({ _id: req.params.id },  function (error, response){
                return res.status(200).send({ error: "removed successfully!" });
            });
        }
    } catch (err) {
        return res.status(500).send({ error: "User query error!" });
    }
});

const install = app => app.use("/api/v1/task", router);

module.exports = {
  install
};
