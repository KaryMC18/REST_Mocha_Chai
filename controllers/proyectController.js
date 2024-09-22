const { v4: uuidv4 } = require('uuid');


let proyects = [
    {
        id: '5f0dba4a-e8d3-4a63-9cf1-741c53f6be72',
        name: "Nuevo Sistema de Gestion",
        description: "Implementar un sistema de recursos",
        startDate: "2024-09-01",
        endDate: "2025-02-01",
        status: "ongoing",
        teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
        budget: 10000
    },
    {
        id: uuidv4(),
        name: "Nuevo Sistema de Gestion Más nuevo",
        description: "Implementar un sistema de recursos",
        startDate: "2024-09-01",
        endDate: "2026-02-01"   ,
        status: "ongoing",
        teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
        budget: 10000
    },
    {
        id: uuidv4(),
        name: "Si",
        description: "Implementar un sistema de recursos",
        startDate: "2024-09-01",
        endDate: "2035-02-01"   ,
        status: "ongoing",
        teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
        budget: 10000
    },
]

function getAllProyects() {
    return proyects;
}

function createProyect(name, description, startDate, endDate, status, teamMembers, budget) {
    const newProyect = {
        id: uuidv4(),
        name,
        description,
        startDate,
        endDate,
        status,
        teamMembers,
        budget
    }
    proyects.push(newProyect);
    return newProyect;
}

function getProyectById(id) {
    return proyects.find(proyect => proyect.id === id);
}

function updateProyect(proyectToUpdated) {
    proyectToUpdatedIndex = proyects.findIndex(proyect => proyect.id === proyectToUpdated.id);
    proyects.splice(proyectToUpdatedIndex, 1, proyectToUpdated);
    return proyectToUpdated;
}

function deleteProyect(id) {
    const eliminatedProyect = proyects.find(proyect => proyect.id === id);
    proyects.splice(proyects.findIndex(proyect => proyect.id === id), 1);
    return eliminatedProyect;
}

module.exports ={
    getAllProyects,
    createProyect,
    getProyectById,
    updateProyect,
    deleteProyect
};