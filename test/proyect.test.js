const request = require('supertest');
const chai = require('chai');

const app = require('../index');

const expect = chai.expect;

//GET All
describe('GET /proyects', () => {
    it('1, Deberia devolver todas los proyectos con estatus 200 cuando hay proyectos en memoria', async () => {
        const proyects = [
            {
                id: '5f0dba4a-e8d3-4a63-9cf1-741c53f6be72',
                name: "Nuevo Sistema de Gestion",
                description: "Implementar un sistema de recursos",
                startDate: "2024-09-01",
                endDate: "2025-02-01"   ,
                status: "ongoing",
                teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
                budget: 10000
            },
            {
                id: '5f0dba4a-e8d3-4a63-9cf1-741c53f6be78',
                name: "Nuevo Sistema de Gestion Más nuevo",
                description: "Implementar un sistema de recursos",
                startDate: "2024-09-01",
                endDate: "2026-02-01"   ,
                status: "ongoing",
                teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
                budget: 10000
            },
            {
                id: '5f0dba4a-e8d3-4a63-9cf1-741c53f6be75',
                name: "Si",
                description: "Implementar un sistema de recursos",
                startDate: "2024-09-01",
                endDate: "2035-02-01"   ,
                status: "ongoing",
                teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
                budget: 10000
            },
        ];
        const res = await request(app).get('/proyects');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.deep.equal(proyects);
    });
});

//GET ONE
describe('GET /proyects/:id', () => {
    it('2, Deberia devolver un solo proyecto según el ID que se le indique', async () => {
        const proyects = [
            {
                id: '5f0dba4a-e8d3-4a63-9cf1-741c53f6be72',
                name: "Nuevo Sistema de Gestion",
                description: "Implementar un sistema de recursos",
                startDate: "2024-09-01",
                endDate: "2025-02-01"   ,
                status: "ongoing",
                teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
                budget: 10000
            }
        ];
        const res = await request(app).get('/proyects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        expect(res.body).to.deep.equal(proyects);
    });
});

//POST ONE
describe('POST /proyects', () => {
    it('3, Deberia devolver el proyecto insertado en memoria', async() => {
        const proyects = [
            {
                name: "Asi es",
                description: "Implementar un sistema de compra y venta de productos",
                startDate: "2024-09-01",
                endDate: "2025-02-01"   ,
                status: "ongoing",
                teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
                budget: 10000
            }
        ];
        const res = await request(app).post('/proyects').send(proyects);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
});

//UPDATE ONE
describe('PUT /proyect/:id', () => {
    it('4, Deberia de actualizar un proyecto existente segun el ID proporcionado', async () => {
        const proyects = [
            {
                name: "Proyecto de los Kumbia Kings",
                description: "Implementar un sistema de recursos",
                startDate: "2024-09-01",
                endDate: "2025-02-01"   ,
                status: "ongoing",
                teamMembers: ["Jaime Torres", "Aldo Amaral", "Karina Macedo"],
                budget: 10000
            }
        ];
        const res = await request(app).put('/proyects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72').send(proyects);

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(1);
        expect(res.body).to.have.property('name').to.be.equal('Proyecto de los Kumbia Kings');
    });
});

//DELETE ONE
describe('DELETE /proyect/:id', () => {
    it('5, Deberia eliminar un proyecto segun el ID', async () => {
        chai.request('http://localhost:3000').get('/proyects').end(function(req, res){
            console.log(res.body);
        });
        const res = await request(app).delete('/proyects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(2);
        console.log(res.body);
    });
});