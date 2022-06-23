import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  type!:string;
  wording!:string;
  num!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.type);
    console.log(this.wording);
    console.log(this.num);
  }

}
