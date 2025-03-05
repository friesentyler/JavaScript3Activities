import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from '../shop/shop.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'simpleapp';
}
