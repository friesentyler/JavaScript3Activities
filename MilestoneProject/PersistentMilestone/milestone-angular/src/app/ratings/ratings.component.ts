import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneServiceService } from '../service/milestone-service.service';
import { Rating } from '../models/Rating';

@Component({
  selector: 'app-list-ratings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratings: Rating[] | null = null;
  selectedRating: Rating | null = null;

  constructor(private service: MilestoneServiceService) { }

  ngOnInit() {
    // Fetch all ratings from the service
    this.service.getAllRatings().subscribe((ratings: Rating[]) => {
      this.ratings = ratings;
    }, error => {
      console.error("Failed to fetch ratings", error);
    });
  }

  onSelectRating(rating: Rating) {
    this.selectedRating = rating;
  }
}

