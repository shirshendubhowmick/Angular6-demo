import { Directive, HostListener, HostBinding, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        console.log(this.elementRef.nativeElement);
        if (this.isOpen) {
            this.renderer.addClass(this.elementRef.nativeElement.childNodes[0], 'show');
            this.renderer.addClass(this.elementRef.nativeElement.childNodes[1], 'show');
            this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'true');
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement.childNodes[0], 'show');
            this.renderer.removeClass(this.elementRef.nativeElement.childNodes[1], 'show');
            this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'false');
        }
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
    }
}
