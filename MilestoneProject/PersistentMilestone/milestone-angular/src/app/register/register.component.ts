import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MilestoneServiceService } from '../service/milestone-service.service';  // Import the service

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    isAdmin: false
  };
  wasSubmitted: boolean = false;

  constructor(private milestoneService: MilestoneServiceService) { } // Inject the MilestoneServiceService

  onSubmit() {
    this.milestoneService.registerUser(this.user).subscribe(response => {
      this.wasSubmitted = true;
      console.log("Registration successful!", response);
    }, error => {
      console.error("Registration failed.", error);
    });
  }
}



