const { faker } = require('@faker-js/faker');


class Company {
    constructor(){
    this._id = faker.string.uuid();
    this.nombre = faker.company.name();
    this.direccion = {
        'calle': faker.location.streetAddress(),
        'ciudad': faker.location.city(),
        'estado': faker.location.state(),
        'codigo_postal': faker.location.countryCode('numeric'),
        'pais': faker.location.country(),
    }
    }
}

class Usuario {
    constructor(){
        this._id = faker.string.uuid();
        this.primer_nombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        // this.telefono = phone.phoneNumber();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }
}
const apiCompany= (req, res) => {
    const company = new Company();
    res.json(company);
};


const apiUser = (req, res) => {
    const user = new Usuario();
    res.json(user);
};

const apiUserCompany= (req, res) => {
    const user = new Usuario();
    const company = new Company();
    res.json({
        "company": company,
        "user": user
    });
};

module.exports = {
    apiUser: apiUser,
    apiCompany: apiCompany,
    apiUserCompany: apiUserCompany
}