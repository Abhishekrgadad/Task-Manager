const express = require('express');
const Task = require('../models/task');

const router = express.Router();

//Get All tasks
router.get('/', async(req,res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});

//Add a new Task
router.post('/',async(req,res)=>{
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

//Update a task
router.put('/', async(req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(task);
});

//Delete a Task
router.delete('/:id', async(req,res) =>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message: 'Task Delelted'
    });
});

module.exports = router;