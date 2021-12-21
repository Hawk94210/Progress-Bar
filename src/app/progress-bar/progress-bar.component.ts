import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() backgroundColor = 'lime';
  @Input() progressColor = 'red';
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    let interval = setInterval(() => {
      this.progress = +this.progress + 5;
      if (this.progress == 100) {
        this.progress = 0;
      }
     },500);
  }
}
