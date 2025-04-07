
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';
import {InactivityTimerComponent} from './inactivity-timer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, InactivityTimerComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sesstion-timeout';
  constructor(private authService: AuthService) { }

  @HostListener('document:keyup', ['$event'])
  @HostListener('document:click', ['$event'])
  @HostListener('document:wheel', ['$event'])
  resetTimer() {
    this.authService.notifyUserAction();
  }
}
