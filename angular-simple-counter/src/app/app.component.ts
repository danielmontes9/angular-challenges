import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
