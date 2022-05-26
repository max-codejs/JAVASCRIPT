class Moto {
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.km = 0;
        this.comb = 10
    }
    info(){
        console.log('Marca...........: ' + this.marca)
        console.log('Modelo..........: ' + this.modelo)
        console.log('Cor.............: ' + this.cor)
        console.log('Ligado..........: ' + (this.ligado ? 'sim' : 'não')) // operador ternário
        console.log('KM..............: ' + this.km)
        console.log('Combustível.....: ' + this.comb)
        console.log('........................ ')

    };
}
    let m1 = new Moto('Honda','Fan','Azul');
    let m2 = new Moto('Yamaha','Factor','Preta')
    let m3 = new Moto('Dafra','Riva','Branca')
    let m4 = new Moto('Shineray','Phoenix G','Vermelha')
    

    