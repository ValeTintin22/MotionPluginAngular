import { Component, OnInit, OnDestroy } from '@angular/core';
import { MotionService } from './Services/motion.service';
import { MotionData } from './Model/MotionData.model';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrl: './motion.component.scss'
})
export class MotionComponent implements OnInit, OnDestroy {

  motionData: MotionData = {
    acceleration: { x: 0, y: 0, z: 0 },
    rotation: { alpha: 0, beta: 0, gamma: 0 }
  };
  pasos = 0;

  constructor(private motionS: MotionService) {}

  ngOnInit(): void {
    this.motionS.startMotionDetection((data: MotionData) => {
      this.motionData = data;

      // Detectar pasos basado en la aceleración en el eje Y
      if (this.motionData.acceleration?.y && this.motionData.acceleration.y > 12) {
        this.pasos++;
      }
    });
  }

  ngOnDestroy(): void {
    this.motionS.stopMotionDetection();
  }
}
