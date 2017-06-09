import { element } from 'protractor';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; >>não recomendado
    // gera vulnerabilidade do código.

    this._renderer.setElementStyle(this._elementRef.nativeElement,
    'background-color', 'yellow');

   }

}
