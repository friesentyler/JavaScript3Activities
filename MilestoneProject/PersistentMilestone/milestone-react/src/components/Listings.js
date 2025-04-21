import React, { useState, useEffect } from 'react';
import MilestoneService from '../services/MilestoneService';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newListing, setNewListing] = useState({
    artist: '',
    albumTitle: '',
    condition: '',
    imageUrl: '',
    listerId: 0,
  });

  useEffect(() => {
    MilestoneService.getAllListings().then((response) => {
      setListings(response.data);
    }).catch((error) => {
      console.error('Failed to fetch listings:', error);
    });
  }, []);

  const handleAddListing = () => {
    MilestoneService.createListing(newListing).then((response) => {
      setListings((prevListings) => [...prevListings, response.data]);
      setNewListing({
        artist: '',
        albumTitle: '',
        condition: '',
        imageUrl: '',
        listerId: 0,
      });
    }).catch((error) => {
      console.error('Failed to add listing:', error);
    });
  };

  const handleDeleteListing = (id) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;

    MilestoneService.deleteListing(id).then(() => {
      setListings((prevListings) => prevListings.filter((listing) => listing.listingId !== id));
      if (selectedListing?.listingId === id) {
        setSelectedListing(null);
        setEditMode(false);
      }
    }).catch((error) => {
      console.error('Failed to delete listing:', error);
    });
  };

  const handleSelectListing = (listing) => {
    setSelectedListing({ ...listing }); // Make a copy to allow editing
    setEditMode(false);
  };

  const handleEditListing = () => {
    setEditMode(true);
  };

  const handleUpdateListing = () => {
    if (!selectedListing?.listingId) return;

    const id = selectedListing.listingId;

    MilestoneService.updateListing(id, selectedListing).then((response) => {
      setListings((prevListings) =>
        prevListings.map((listing) => (listing.listingId === id ? response.data : listing))
      );
      setEditMode(false);
      setSelectedListing(null);
    }).catch((error) => {
      console.error('Failed to update listing:', error);
    });
  };

  return (
    <div>
      <h2>Listings</h2>

      <ul>
        {listings.map((listing) => (
          <li key={listing.listingId} onClick={() => handleSelectListing(listing)}>
            {listing.artist} - {listing.albumTitle}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteListing(listing.listingId);
              }}
              className="btn btn-danger btn-sm ms-2"
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectListing(listing);
                handleEditListing();
              }}
              className="btn btn-secondary btn-sm ms-2"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h4>Add New Listing</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddListing();
          }}
        >
          <input
            type="text"
            placeholder="Artist"
            value={newListing.artist}
            onChange={(e) => setNewListing({ ...newListing, artist: e.target.value })}
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            placeholder="Album Title"
            value={newListing.albumTitle}
            onChange={(e) => setNewListing({ ...newListing, albumTitle: e.target.value })}
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            placeholder="Condition"
            value={newListing.condition}
            onChange={(e) => setNewListing({ ...newListing, condition: e.target.value })}
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newListing.imageUrl}
            onChange={(e) => setNewListing({ ...newListing, imageUrl: e.target.value })}
            className="form-control mb-2"
          />
          <input
            type="number"
            placeholder="Lister ID"
            value={newListing.listerId === 0 ? '' : newListing.listerId}
            onChange={(e) => {
              const value = e.target.value;
              setNewListing({
                ...newListing,
                listerId: value === '' ? 0 : parseInt(value)
              });
            }}
            className="form-control mb-2"
            required
          />
          <button type="submit" className="btn btn-primary">Add Listing</button>
        </form>
      </div>

      {selectedListing && (
        <div>
          <h4>{editMode ? 'Edit Listing' : 'Selected Listing Details'}</h4>
          {editMode ? (
            <div>
              <input
                type="text"
                value={selectedListing.artist}
                onChange={(e) => setSelectedListing({ ...selectedListing, artist: e.target.value })}
                className="form-control mb-2"
              />
              <input
                type="text"
                value={selectedListing.albumTitle}
                onChange={(e) => setSelectedListing({ ...selectedListing, albumTitle: e.target.value })}
                className="form-control mb-2"
              />
              <input
                type="text"
                value={selectedListing.condition}
                onChange={(e) => setSelectedListing({ ...selectedListing, condition: e.target.value })}
                className="form-control mb-2"
              />
              <input
                type="text"
                value={selectedListing.imageUrl}
                onChange={(e) => setSelectedListing({ ...selectedListing, imageUrl: e.target.value })}
                className="form-control mb-2"
              />
              <input
                type="number"
                value={selectedListing.listerId}
                onChange={(e) =>
                  setSelectedListing({ ...selectedListing, listerId: parseInt(e.target.value) })
                }
                className="form-control mb-2"
              />
              <button onClick={handleUpdateListing} className="btn btn-success mt-2">Save Changes</button>
            </div>
          ) : (
            <div>
              <p><strong>Artist:</strong> {selectedListing.artist}</p>
              <p><strong>Album Title:</strong> {selectedListing.albumTitle}</p>
              <p><strong>Condition:</strong> {selectedListing.condition}</p>
              <p><strong>Image:</strong> <img src={selectedListing.imageUrl} alt="cover" width="100" /></p>
              <p><strong>Lister ID:</strong> {selectedListing.listerId}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Listings;

