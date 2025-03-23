/*export interface Listing {
  order_id?: number;
  lister_id: number;
  artist: string;
  title: string;
  record_condition: string;
  image_location: string;
}*/

export interface Listing {
  listingId?: number;
  listerId: number;
  artist: string;
  albumTitle: string;
  condition: string;
  imageUrl: string;
}

