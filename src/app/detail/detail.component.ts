import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() title: string;
  @Input() boundary: string;

  @ContentChild("headerContent", {static:true}) header: ElementRef;

  constructor() {}

  ngOnInit() {
    // console.log(this.title)
    console.log(this.header)
  }



}
