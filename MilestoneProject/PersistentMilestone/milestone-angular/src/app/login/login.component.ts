import { Component } from '@angular/core';
import { MilestoneServiceService } from '../service/milestone-service.service';  // Import the service
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };
  wasSubmitted: boolean = false;
  token: string = '';
  username: string = '';

  constructor(private milestoneService: MilestoneServiceService) { } // Inject the MilestoneServiceService

  onSubmit() {
    this.milestoneService.loginUser(this.credentials).subscribe(response => {
      this.wasSubmitted = true;
      console.log("Login successful!", response);
      this.token = response.token;
      this.username = response.user.username;
    }, error => {
      console.error("Login failed.", error);
    });
  }
}
