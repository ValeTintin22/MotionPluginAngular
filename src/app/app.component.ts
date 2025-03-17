import { Component, Inject } from '@angular/core';
import { MotionService } from './Services/motion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  motionS = Inject(MotionService);

  title = 'angular-motion';

  acelerometer = this.motionS.startShakeDetection((e:any)=>{
    return e;
  });
}
