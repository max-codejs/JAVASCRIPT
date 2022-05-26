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
        console.log('Ligado..........: ' + (this.ligado ? "Sim" : "Não")) // operador ternário
        console.log('KM..............: ' + this.km)
        console.log('Combustível.....: ' + this.comb)
        console.log('........................ ')

    }
    ligar(){
        this.ligado = true;
    }
}
    let m1 = new Moto('Honda','Fan','Azul');
    let m2 = new Moto('Yamaha','Factor','Preta')
    let m3 = new Moto('Dafra','Riva','Branca')
    let m4 = new Moto('Shineray','Phoenix G','Vermelha')

    m4.ligar(); // tem q tá em cima dos outros de baixo pra aparecer o operador ternario 
    
    m1.info();
    m2.info();
    m3.info();
    m4.info();

    
    