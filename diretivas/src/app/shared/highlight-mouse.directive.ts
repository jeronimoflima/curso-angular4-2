import { Directive, HostListener, ElementRef, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

    @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color', 'white'
    );*/
    this.backgroundColor = 'white';
  }

  // Se não precisa manipular a variável, pode fazer assim...
  //@HostBinding('style.backgroundColor') backGroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    // código extra, pode manipular a variável...
    return this.backgroundColor;
  }
  private backgroundColor: string;




  constructor(
    //private _elementRef: ElementRef,
   // private _renderer: Renderer

    ) { }

}
