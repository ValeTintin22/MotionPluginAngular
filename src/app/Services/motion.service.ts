import { Injectable } from '@angular/core';
import { Motion } from '@capacitor/motion';

@Injectable({
  providedIn: 'root'
})
export class MotionService {

  constructor() { }

  async startShakeDetection(callback: (x:any) => void) {
    await Motion.addListener('accel', (event)=>{
      const acceleration = event.acceleration;
      callback(acceleration);
    })
    
  }
}
