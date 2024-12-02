import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  increase() {
    this.counter++;
    this.triggerAnimationIncrease();
  }

  reset() {
    this.counter = 0;
    this.triggerAnimationReset();
  }

  decrease() {
    this.counter--;
    this.triggerAnimationDecrease();
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
