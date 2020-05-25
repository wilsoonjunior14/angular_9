import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input("myForEm") array: number[];

  constructor() { }

  ngOnInit() : void{
    console.log(this.array);
  }
}
