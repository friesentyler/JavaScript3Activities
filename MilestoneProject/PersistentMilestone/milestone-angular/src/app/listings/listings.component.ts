import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneServiceService } from '../service/milestone-service.service';
import { Listing } from '../models/Listing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-listings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings: Listing[] | null = null;
  selectedListing: Listing | null = null;
  editMode: boolean = false;

  newListing: Listing = {
    artist: '',
    albumTitle: '',
    condition: '',
    imageUrl: '',
    listerId: 0
  };

  constructor(private milestoneService: MilestoneServiceService) { }

  ngOnInit() {
    // Fetch all listings from the service
    this.milestoneService.getAllListings().subscribe((listings: Listing[]) => {
      this.listings = listings;
    }, error => {
      console.error("Failed to fetch listings", error);
    });
  }

  onSelectListing(listing: Listing) {
    this.selectedListing = listing;
  }

  onAddListing() {
    this.milestoneService.createListing(this.newListing).subscribe((response: Listing) => {
      console.log('Listing added successfully', response);
      this.listings?.push(response);
      this.newListing = { artist: '', albumTitle: '', condition: '', imageUrl: '', listerId: 0 };
    }, error => {
      console.error('Failed to add listing', error);
    });
  }

  onDeleteListing(id: string) {
    if (confirm('Are you sure you want to delete this listing?')) {
      this.milestoneService.deleteListing(id).subscribe(() => {
        this.listings = this.listings?.filter(listing => listing.listingId !== Number(id)) || null;
        console.log('Listing deleted successfully');
        this.selectedListing = null;
      }, error => {
        console.error('Failed to delete listing', error);
      });
    }
  }

  onEditListing(listing: Listing) {
    this.selectedListing = listing;
    this.editMode = true;
  }

  onUpdateListing() {
    if (this.selectedListing) {
      const updatedListing: Listing = {
        artist: this.selectedListing.artist,
        albumTitle: this.selectedListing.albumTitle,
        condition: this.selectedListing.condition,
        imageUrl: this.selectedListing.imageUrl,
        listerId: this.selectedListing.listerId
      };

      this.milestoneService.updateListing(this.selectedListing.listingId!.toString(), updatedListing).subscribe((response: Listing) => {
        console.log('Listing updated successfully', response);
        this.editMode = false;
        this.selectedListing = null;
        this.ngOnInit();
      }, error => {
        console.error('Failed to updated listing', error);
      });
    }
  }
}
