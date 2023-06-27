import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @Input('showClass')
  show!: string

  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    let ele = eve.target as HTMLElement

    // console.log(ele.closest('button'));


    ele.closest('button')?.nextElementSibling?.classList.toggle(this.show)
  }
}
