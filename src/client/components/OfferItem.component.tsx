import * as React from 'react'
import { JobModel, OfferModel } from '../models'

export namespace Footer {
  export interface Props {
    offer: OfferModel | JobModel,
    isRequested: boolean,
    toggleApplication: (offerId: number) => void
  }
}

export class OfferItem extends React.Component<Footer.Props> {

  handleClickOnOffer(offerId: number) {
    this.props.toggleApplication(offerId)
  }

  render() {
    const { offer, toggleApplication, isRequested } = this.props
    
    const offerId = typeof offer === 'number' ? offer : offer.offer
    return (
      <div className='offer-item-container' onClick={() => toggleApplication(offerId)}>
        {
          isRequested &&
          <div className='offer-item-title'>
            <span>Requested</span>
          </div>
        }
        {
          typeof offer === 'number' ?
            <div className='offer-item-content'>
              <span> Unable to Retrieve Job Details for {offerId} </span>
            </div>
            :
            <div className='offer-item-content'>
              <span> {offer.origin.city} {offer.destination.city} </span>
            </div>
        }
      </div>
    )
  }
}