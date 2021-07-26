import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appClickDirective]'
})
export class ClickDirectiveDirective {
@HostListener("dblclick") onDoubleClick(){
  this.textDeco("None");
}


@HostListener('click')  onClick(){
  this.textDeco("blue");
}
  constructor(private elem:ElementRef) { }
private textDeco(action:string){
  this.elem.nativeElement.style.background=action;

}
}
