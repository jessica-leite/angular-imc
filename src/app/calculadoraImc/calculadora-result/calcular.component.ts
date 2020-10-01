import {Component} from "@angular/core"

@Component({
    selector: "calculadora-resultado",
    templateUrl: "./calcular.component.html",
    styleUrls: ["./calcular.component.css"]
})

export class CalcularImcComponent{
    peso: number;
    altura: number;
    imc: number;

    constructor(){

    }

    calcularImc(): number {
        let imc = 0;
        let altura = this.altura;
        let peso = this.peso;

        this.imc = Math.round(peso / (altura * altura));

        return this.imc;
    }
}