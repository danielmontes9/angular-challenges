import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LoaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoading = true;

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    window.addEventListener('load', () => {
      this.loadingService.setLoading(false);
    });

    this.loadingService.loading$.subscribe((isLoading) => {
      setTimeout(() => {
        this.isLoading = isLoading;
      }, 3000);
    });
  }
}
