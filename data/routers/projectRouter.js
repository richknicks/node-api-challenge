const express = require("express");
const router = express.Router();

const projectDB = require("../helpers/projectModel");


// GET Project actions by :id
router.get("/:id/actions", (req, res)=>{
    const {id}=req.params
    projectDB
    .getProjectActions(id)
    .then(getActions=>{
        res.status(200).json(getActions)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// GET projects
router.get("/", (req, res)=>{
    projectDB
    .get()
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});

// GET project by :id
router.get("/:id", (req, res)=>{
    const {id}= req.params
    projectDB
    .get(id)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// POST a new project
router.post("/", (req, res)=>{
    projectDB
    .insert(req.body)
    .then(()=>{
        res.status(201).json(req.body)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// UPDATE a project by :id
router.put("/:id", (req, res)=>{
    const {id}=req.params
    const updateProject=req.body
    projectDB
    .update(id, updateProject)
    .then(updateProject=>{
        res.status(201).json(updateProject)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});
// DELETE a project by :id
router.delete("/:id", (req, res)=>{
    const {id}=req.params
    projectDB
    .remove(id)
    .then(deleteProject=>{
        res.status(201).json(deleteProject)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});

module.exports = router;