import { Directive, HostListener, ElementRef, Renderer,
          HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

    @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
  }

  private backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';


  constructor() { }

  ngOnIt(){
    this.backgroundColor = this.backgroundColor;
  }

}
