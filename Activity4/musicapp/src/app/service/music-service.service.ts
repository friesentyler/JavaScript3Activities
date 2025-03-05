import { Injectable } from '@angular/core';
import * as exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class MusicServiceService {
  albums: Album[] = (exampledata as any).default;
  private host = "http://localhost:3000";

  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(this.host + "/artists").
      subscribe((artists: Artist[]) => {
        callback(artists);
      });
  };

  getAlbums(callback: (artist: Album[]) => void): void {
    this.http.get<Album[]>(this.host + "/albums").
      subscribe((albums: Album[]) => {
        callback(albums);
      })
  };

  // this is a new method that i don't know has its own components
  public getAlbumsOfArtist(artistName: String, callback: (albums: Album[]) => void): void {
    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).
      subscribe((albums: Album[]) => {
        console.log('have albums', albums);
        callback(albums);
      });
  }

  // this method was never changed to work with the new Database system, so not sure what to do with it yet
  getAlbum(artist: string, id: number): Album | null {
    return this.albums.find(album => album.artist === artist && album.albumId === id) || null;
  };

  createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  };

  updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + "/albums", album)
      .subscribe((data) => {
        callback();
      });
  };

  deleteAlbum(id: number, callback: () => void): void {
    this.http.delete(this.host + "/albums/" + id)
      .subscribe((data) => {
        callback();
      });
  };

  constructor(private http: HttpClient) {

  }
}
