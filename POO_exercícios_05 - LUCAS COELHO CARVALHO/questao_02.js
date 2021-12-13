var Hora = /** @class */ (function () {
    function Hora(hora, minutos, segundos) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    Hora.prototype.lerHora = function () {
        console.log("Hora: " + this.hora);
    };
    Hora.prototype.lerMinutos = function () {
        console.log("Minutos: " + this.minutos);
    };
    Hora.prototype.lerSegundos = function () {
        console.log("Segundos: " + this.segundos);
    };
    Hora.prototype.informarHoraTotal = function () {
        console.log("Hora: Minutos: Segundos: " + this.hora + this.minutos + this.segundos);
    };
    return Hora;
}());
var h = new Hora(11, 50, 10);
console.log(h.informarHoraTotal());
