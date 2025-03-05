import { Component, Input } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';
import { CommonModule } from '@angular/common';
import { DisplayAlbumComponent } from '../display-album/display-album.component';

@Component({
  selector: 'app-list-albums',
  imports: [CommonModule, DisplayAlbumComponent],
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent {
  @Input() artist: Artist | null;
  albums: Album[] | null;
  selectedAlbum: Album | null = null;

  ngOnInit() {
    this.albums = this.service.getAlbums(this.artist!.artist);
  }

  onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
  constructor(private service: MusicServiceService) {
    this.artist = null;
    this.albums = null;
  };
}
