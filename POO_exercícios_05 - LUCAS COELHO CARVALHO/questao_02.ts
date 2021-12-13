class Hora {
    constructor(private hora: number, private minutos: number, private segundos: number) {}

    lerHora() {
        console.log("Hora: " + this.hora);
    }

    lerMinutos() {
        console.log("Minutos: " + this.minutos);
    }

    lerSegundos() {
        console.log("Segundos: " + this.segundos);
    }

    informarHoraTotal() {
        console.log("Hora: Minutos: Segundos: " + this.hora + this.minutos + this.segundos);
    }
}

let h: Hora = new Hora(11, 50, 10);
console.log(h.informarHoraTotal());






