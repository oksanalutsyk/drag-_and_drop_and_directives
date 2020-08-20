import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreateElement]'
})
export class CreateElementDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    let div = this.renderer.createElement('div');
    let text  =this.renderer.createText('Hello World');
    this.renderer.addClass(div, 'divClass')
    this.renderer.appendChild(this.el.nativeElement, div)
    this.renderer.appendChild(div, text)
  }

}
