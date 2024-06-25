class DispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    
    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this.marca;
    }
    
    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `tipoEntrada: ${this._tipoEntrada} marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
   return `idRaton: ${this._idRaton}, ${super.toString()}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
     return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, ${super.toString()}`;
    }
}

class Monitor{
static contadorMonitores = 0;

    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca},  tamaño: ${this._tamaño}` ;
    }
}


class Computadora{
    static  contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

     get idComputadora(){
            return this._idComputadora;
        }

        get nombre(){
            return this._nombre;
        }

        set nombre(nombre){
            this._nombre = nombre;
        }

        toString(){
            return `Computadora ${this._idComputadora}: ${this._nombre} \n monitor: ${this._monitor}
 teclado: ${this._teclado} \n ratón: ${this._raton}`;
        }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_ORDEN(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        if(this._computadoras.length <= Orden.MAX_ORDEN){
            this._computadoras.push(computadora);
        }
        else{
            console.log('Valor excedido de computadoras');
        }
    }

    mostrarOrden(){
           let computadoras = '';
           for(let computadora of this._computadoras){
            computadoras += '\n' + computadora.toString() + ' ';
           }
           console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoras} `);
        }
}

let raton1 = new Raton('ps/2','Razer');

let teclado1 = new Teclado('RF','Microsoft');

let monitor1 = new Monitor('TCL','30');

let computadora1 = new Computadora('Mac',monitor1,teclado1,raton1);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);

orden1.mostrarOrden();
orden2.mostrarOrden();

