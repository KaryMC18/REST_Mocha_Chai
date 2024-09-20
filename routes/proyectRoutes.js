const express = require('express');
const router = express.Router();
const proyectController = require('../controllers/proyectController');

router.get('/', (req, res) => {
    const proyects = proyectController.getAllProyects();
    if (proyects.length > 0)
        res.status(200).json(proyects);
    else
        res.status(404).json({ code: 404, message: "Proyects not found" });
});

router.post('/', (req, res) => {
    const { name, description, startDate, endDate, status, teamMembers, budget } = req.body;
    const newProyect = proyectController.createProyect(name, description, startDate,
        endDate, status, teamMembers, budget);
    res.status(200).json(newProyect);
});

router.get('/:id', (req, res)=> {
    const { id } = req.params;
    const proyect = proyectController.getProyectById(id);
    console.log(proyect);
    if(proyect)
        res.status(200).json(proyect);
    else
        res.status(404).json({code: 404, message: 'Proyect not found'});
});

router.put('/', (req, res) => {
    const proyectUpdated = proyectController.updateProyect(req.body);
    res.status(201).json(proyectUpdated);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const proyectDeleted = proyectController.deleteProyect(id);
    res.status(200).json(proyectDeleted);
});

module.exports = router;
