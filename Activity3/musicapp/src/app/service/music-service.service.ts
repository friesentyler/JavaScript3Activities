import { Injectable } from '@angular/core';
// Importing sample music data from a JSON file
import * as exampledata from '../../data/sample-music-data.json';
// Importing the Artist model
import { Artist } from './../models/artists.model';
// Importing the Album model
import { Album } from '../models/albums.model';

// Injectable decorator marks this service as available for dependency injection
@Injectable({
  providedIn: 'root' // This service is available throughout the app
})
export class MusicServiceService {
  // This will hold the albums data fetched from the sample JSON file
  // albums: Album[] = (exampledata as any) as Album[];
  albums: Album[] = (exampledata as any).default;

  // Method to retrieve all unique artists from the album data
  getArtists(): Artist[] {
    // Create a Set to get unique artist names and map them to Artist objects
    const uniqueArtists = new Set(this.albums.map(album => album.artist));
    return Array.from(uniqueArtists).map(artistName => {
      return { artist: artistName }; // Return an array of Artist objects
    });
  };

  // Method to retrieve albums by a specific artist
  getAlbums(artist: string): Album[] {
    // Filter albums by the specified artist's name
    return this.albums.filter(album => album.artist === artist);
  };

  // Method to retrieve a specific album by artist and album ID
  getAlbum(artist: string, id: number): Album | null {
    // Find the album that matches both the artist and albumId
    return this.albums.find(album => album.artist === artist && album.albumId === id) || null;
  };

  // Method to create a new album by adding it to the albums list
  createAlbum(album: Album): number {
    // Log the sample data and current albums to the console
    console.log(exampledata);
    console.log(this.albums);
    // Add the new album to the albums array
    this.albums.push(album);
    // Return the album's ID after adding it
    return album.albumId;
  };

  // Method to update an existing album in the albums array
  updateAlbum(album: Album): number {
    // Find the index of the album with the matching albumId
    const index = this.albums.findIndex(a => a.albumId === album.albumId);
    if (index !== -1) {
      // Replace the existing album with the updated one
      this.albums.splice(index, 1, album);
      return 0; // Return 0 to indicate success
    }
    return -1; // Return -1 if album was not found
  };

  // Method to delete an album by its ID and artist
  deleteAlbum(id: number, artist: string): number {
    // Find the index of the album that matches both albumId and artist
    const index = this.albums.findIndex(a => a.albumId === id && a.artist === artist);
    if (index !== -1) {
      // Remove the album from the array
      this.albums.splice(index, 1);
      return 0; // Return 0 to indicate success
    }
    return -1; // Return -1 if album was not found
  };

  // Constructor method for the service (currently empty)
  constructor() { }
}
