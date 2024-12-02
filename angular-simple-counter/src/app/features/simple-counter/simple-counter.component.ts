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

  constructor(private localStorageService: LocalstorageService) {
    this.counter = this.localStorageService.getCounter();
  }

  increase() {
    this.counter++;
    this.triggerAnimationIncrease();
    this.localStorageService.setCounter(this.counter);
  }

  reset() {
    this.counter = 0;
    this.triggerAnimationReset();
    this.localStorageService.setCounter(this.counter);
  }

  decrease() {
    this.counter--;
    this.triggerAnimationDecrease();
    this.localStorageService.setCounter(this.counter);
  }

  triggerAnimationIncrease() {
    this.isAnimatingIncrease = true;
    setTimeout(() => {
      this.isAnimatingIncrease = false;
    }, 100);
  }

  triggerAnimationReset() {
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
}
