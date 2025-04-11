import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Music Collection';
  version = 1.0;
  private router: Router;
  displayVersion() {
    alert(this.version);
  };
  displayArtistList() {
    alert("display list here");
    this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
  };
  constructor(private r: Router) {
    this.router = r;
  };
}
