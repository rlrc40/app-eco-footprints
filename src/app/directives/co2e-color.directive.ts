import { Directive, HostBinding, OnInit, OnChanges, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[co2eColor]'
})
export class Co2eColorDirective implements OnInit, OnChanges {
  @Input() defaultColor: string = '#d9d9d9';
  @Input() highLightColor: string = '#ff4081';
  @Input() isHighLighted: boolean = false;

  @HostBinding('style.color') co2eColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.co2eColor = this.isHighLighted ? this.highLightColor : this.defaultColor;
  }

  ngOnChanges() {
    this.co2eColor = this.isHighLighted ? this.highLightColor : this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.co2eColor = this.isHighLighted ? this.defaultColor : this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.co2eColor = this.isHighLighted ? this.highLightColor : this.defaultColor;
  }
}
