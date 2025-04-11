import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneServiceService } from '../service/milestone-service.service';
import { User } from '../models/User';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] | null = null;
  selectedUser: User | null = null;

  constructor(private service: MilestoneServiceService) { }

  ngOnInit() {
    // Fetch all users from the service
    this.service.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      console.error("Failed to fetch users", error);
    });
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}

