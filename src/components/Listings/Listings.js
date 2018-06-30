import React from 'react';
import PropTypes from 'prop-types';

import './Listings.css';
import ListingItem from '../ListingItem/ListingItem';
import {listingShape} from '../../props/listingProp';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  };

  render () {
    const {listings} = this.props;
    const listingsItemComponents = listings.map(item => {
      return (
        <ListingItem key={item.id} listing={item}/>
      );
    });

    return (
      <div className='Listings'>
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
