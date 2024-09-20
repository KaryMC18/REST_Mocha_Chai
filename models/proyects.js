const { v4: uuidv4 } = require('uuid');

class Proyect {
    constructor(name, description, startDate = new Date(), 
    endDate = new Date(), status, teamMembers, budget){
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.teamMembers = teamMembers;
        this.budget = budget;
    }

}

module.exports = Proyect;