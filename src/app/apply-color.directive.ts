import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplyColor]'
})
export class ApplyColorDirective {

  @HostBinding('style.color') forecolor = 'blue';
  @HostBinding('style.font-size.em') foresize = 1;
  constructor() { }

  @HostListener('mouseenter') handleMouseEnter() {
    this.forecolor = 'red';
    this.foresize = 2;
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.forecolor = 'blue';
    this.foresize = 1;
  }

}
