import React, { Component } from 'react';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import firebaseApp from '../firebaseRequests/connection';
import listingRequests from '../firebaseRequests/listings';
import './App.css';

class App extends Component {
  state = {
    listings: [],
    selectedListingId: -1,
  };

  listingSelectEvent = (id) => {
    this.setState({
      selectedListingId: id,
    });
  };

  componentDidMount () {
    firebaseApp();
    listingRequests.getRequest().then(listings => {
      this.setState({listings});
    }).catch(console.error.bind(console));
  }

  render () {
    return (
      <div className='App'>
        <div className='col-sm-6'><Listings
          listings={this.state.listings}
          onListingSelection={this.listingSelectEvent}
        /></div>
        <div className='col-sm-6'><Building /></div>
        <div className='col-sm-12'><ListingForm /></div>
      </div>
    );
  }
}

export default App;
