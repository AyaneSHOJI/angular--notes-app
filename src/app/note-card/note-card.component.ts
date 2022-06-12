import { Component, ElementRef, OnInit, ViewChild, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input('title') title!: string;
  @Input('body') body!: string;

  @ViewChild('truncator')
  truncator! : ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement> ;
  

  constructor(private renderer: Renderer2){

  }
  ngOnInit() : void {
    // work out if there is a text overflow and if not, then hide the truncator

    // get actual stye=le of #bodyText
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    // 
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight){
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

}
