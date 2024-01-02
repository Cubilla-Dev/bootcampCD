class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 10;
        this.fuerza = 10;

    }
    drinkSake = () => {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}

class sensei extends Ninja{
    constructor(nombre){
        super();
        this.nombre = nombre;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        this.drinkSake()
        console.log('La perfeccion es la enemiga de lo bueno')
    }
    showStats = () => {
        console.log(`Nombre: ${this.nombre}, salud: ${this.salud}, Velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`)
    }
};


const superSensei = new sensei('Master splinter');
superSensei.speakWisdom();
superSensei.showStats();
