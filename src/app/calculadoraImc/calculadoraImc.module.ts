import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CalcularImcComponent } from './calculadora-result/calcular.component';

@NgModule({
    declarations: [CalcularImcComponent],
    exports: [CalcularImcComponent],
    imports: [FormsModule]
})

export class CalculadoraImcModule{
    
}