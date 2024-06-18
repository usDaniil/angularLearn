import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[colorRed]',
  standalone: true,
})
export class ColorRedDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
 @HostBinding('style.cursor') cursor = 'pointer';
@HostListener('mouseover')
  onMouseOver() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
@HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }
}
