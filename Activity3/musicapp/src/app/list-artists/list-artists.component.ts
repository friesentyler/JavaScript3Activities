import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';
import { CommonModule } from '@angular/common';
import { ListAlbumsComponent } from '../list-albums/list-albums.component';

@Component({
  selector: 'app-list-artists',
  imports: [CommonModule, ListAlbumsComponent],
  templateUrl: './list-artists.component.html',
  styleUrl: './list-artists.component.css'
})
export class ListArtistsComponent {
  selectedArtist: Artist | null = null;
  artists: Artist[] = [];
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Getting data...");
      this.artists = this.service.getArtists();
      this.selectedArtist = null;
    });
  };
  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  };
  constructor(private route: ActivatedRoute, private service: MusicServiceService) { };
}
