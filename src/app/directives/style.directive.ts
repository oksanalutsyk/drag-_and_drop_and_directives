import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue'; // color = значення з [appStyle] в det.html
  @Input() fontWeight: string = 'normal'; // не передаємо знач в input бо назви параметра в det.html та змінної одинакові
  @Input() dStyles: { border?: string; borderRadius?: string };

  @HostBinding('style.color') elColor = null;
  @HostBinding('class') elClass ;


  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'green')
  console.log(el)
  }

  @HostListener('click', ['$event.target']) onClick(e: Event) {
    // console.log(e);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    this.elClass = 'elClass';

    // this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'fontWeight',
    //   this.fontWeight
    // );
    // this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);

  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    this.elClass = null;

    // this.renderer.setStyle(this.el.nativeElement, 'color', null);
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.el.nativeElement, 'border', null);
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
