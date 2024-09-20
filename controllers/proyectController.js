const { v4: uuidv4 } = require('uuid');


let proyects = [
    {
        id: uuidv4(),
        name: "Nuevo Sistema de Gestion",
        description: "Implementar un sistema de recursos",
        startDate: "2024-09-01",
        endDate: "2025-02-01",
        status: "ongoing",
        teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
        budget: 10000
    }
]

function getAllProyects() {
    return proyects;
}

function createProyect(name, description, startDate, endDate, status, teamMembers, budget) {
    const newProyect = {
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
    const proyectFound = proyects.find((proyect) => {
        proyect.id === id;
    });
    return proyectFound;
}

function updateProyect(proyectToUpdated) {
    proyects = proyects.map((p) => (p.id === proyectToUpdated.id ? proyectToUpdated : p));
    return proyectToUpdated;
}

function deleteProyect(id) {
    proyects = proyects.filter(proyect => proyect.id !== id);
    return proyects;
}

module.exports ={
    getAllProyects,
    createProyect,
    getProyectById,
    updateProyect,
    deleteProyect
};