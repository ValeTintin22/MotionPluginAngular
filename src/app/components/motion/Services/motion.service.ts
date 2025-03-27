import { Injectable } from '@angular/core'; 
import { Motion } from '@capacitor/motion';
import { PluginListenerHandle } from '@capacitor/core';
import { MotionData } from '../Model/MotionData.model';

@Injectable({
  providedIn: 'root'
})
export class MotionService {
  private accelListener?: PluginListenerHandle;
  private gyroListener?: PluginListenerHandle;

  constructor() {}

  async startMotionDetection(callback: (data: MotionData) => void) {
    try {
      this.accelListener = await Motion.addListener('accel', (event) => {
        const motionData: MotionData = {
          acceleration: {
            x: event.acceleration?.x ?? 0,
            y: event.acceleration?.y ?? 0,
            z: event.acceleration?.z ?? 0
          },
          rotation: { alpha: 0, beta: 0, gamma: 0 }
        };
        callback(motionData);
      });

      this.gyroListener = await Motion.addListener('orientation', (event) => {
        const motionData: MotionData = {
          acceleration: { x: 0, y: 0, z: 0 },
          rotation: {
            alpha: event.alpha ?? 0,
            beta: event.beta ?? 0,
            gamma: event.gamma ?? 0
          }
        };
        callback(motionData);
      });

    } catch (error) {
      console.error('Error iniciando la detección de movimiento:', error);
    }
  }

  async stopMotionDetection() {
    try {
      if (this.accelListener) {
        await this.accelListener.remove();
        this.accelListener = undefined;
      }
      if (this.gyroListener) {
        await this.gyroListener.remove();
        this.gyroListener = undefined;
      }
    } catch (error) {
      console.error('Error al detener la detección de movimiento:', error);
    }
  }
}
