import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LocalstorageService } from '../../shared/services/localstorage.service';

@Component({
  selector: 'app-simple-counter',
  imports: [CommonModule],
  templateUrl: './simple-counter.component.html',
  styleUrl: './simple-counter.component.scss',
})
export class SimpleCounterComponent {
  counter: number = 0;
  isAnimatingIncrease = false;
  isAnimatingReset = false;
  isAnimatingDecrease = false;

  activeReset: boolean = false;

  intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private localStorageService: LocalstorageService) {
    this.counter = this.localStorageService.getCounter();
  }

  increase(): void {
    this.counter++;
    if (this.activeReset === false) {
      this.triggerAnimationIncrease();
    }
    this.localStorageService.setCounter(this.counter);
  }

  reset(): void {
    if (this.counter === 0) {
      return;
    }

    this.counter > 0 ? this.startCountdown() : this.startCountup();
    this.triggerAnimationReset();
    this.localStorageService.setCounter(this.counter);
  }

  decrease(): void {
    this.counter--;
    if (this.activeReset === false) {
      this.triggerAnimationDecrease();
    }
    this.localStorageService.setCounter(this.counter);
  }

  triggerAnimationIncrease(): void {
    this.isAnimatingIncrease = true;
    setTimeout(() => {
      this.isAnimatingIncrease = false;
    }, 100);
  }

  triggerAnimationReset(): void {
    this.isAnimatingReset = true;
    setTimeout(() => {
      this.isAnimatingReset = false;
    }, 100);
  }

  triggerAnimationDecrease() {
    this.isAnimatingDecrease = true;
    setTimeout(() => {
      this.isAnimatingDecrease = false;
    }, 100);
  }

  startCountdown(): void {
    this.stopCountdown();
    this.activeReset = true;
    this.intervalId = setInterval(() => {
      if (this.counter > 0) {
        this.decrease();
      } else {
        this.stopCountdown();
      }
    }, 35);
  }

  stopCountdown(): void {
    if (this.intervalId) {
      this.activeReset = false;
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  startCountup(): void {
    this.stopCountup();
    this.activeReset = true;
    this.intervalId = setInterval(() => {
      if (this.counter < 0) {
        this.increase();
      } else {
        this.stopCountup();
      }
    }, 35);
  }

  stopCountup(): void {
    if (this.intervalId) {
      this.activeReset = false;
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
