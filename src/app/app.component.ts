import { Component, OnInit } from '@angular/core';
import { MotionService } from './Services/motion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(private motionS: MotionService) {}

  title = 'angular-motion';
  acelerometer: any = null;

  ngOnInit(): void {
    this.motionS.startShakeDetection((e: any) => {
      this.acelerometer = e;  
      // console.log(e);
    });
  }
}
