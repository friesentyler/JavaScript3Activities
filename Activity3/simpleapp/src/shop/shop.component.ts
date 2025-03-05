import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InfoComponent } from '../info/info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [ReactiveFormsModule, FormsModule, InfoComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  question: string = "What's your name?";
  answer: string = "unknown";
  appForm = new FormGroup({
    answer: new FormControl(''),
  });
  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer!;
    console.log("Your name is " + this.answer);
  };
}
