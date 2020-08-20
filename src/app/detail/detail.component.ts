import {
  Component,
  OnInit,
  Input,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() title: string;
  @Input() boundary: string;

  constructor() {}

  ngOnInit() {
    console.log(this.title)
  }

}
