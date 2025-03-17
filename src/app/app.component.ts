import { Component, Inject, OnInit } from '@angular/core';
import { MotionService } from './Services/motion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  motionS = Inject(MotionService);

  title = 'angular-motion';
  acelerometer = null
  ngOnInit(): void {
    this.acelerometer = this.motionS.startShakeDetection((e:any)=>{
      return e;
    });
  }
}
