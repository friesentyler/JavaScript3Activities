import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vinyl Trader';
  version = 1.0;
  private router: Router;
  displayVersion() {
    alert(this.version);
  };
  displayArtistList() {
    alert("display list here");
  }
  constructor(private r: Router) {
    this.router = r;
  };
}
