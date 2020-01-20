import * as React from 'react'
import { connect } from 'react-redux'
import { toggleApplication } from '../actions/jobs.action'
import { fetchOffersIfNeeded, fetchNextOffers, changeSortOrder, changeSortType } from '../actions/offers.action'
import { fetchApplications } from '../actions/jobs.action'
import { OfferItem, Sort, Status } from '../components'
import { OfferModel } from '../models'
import { IJobState } from '../reducers/jobs.reducer'
import { IOfferState } from '../reducers/offers.reducer'
import { State } from '../reducers'
import '../styles'

export namespace Offers {
  export interface Props {
    jobs: IJobState
    offers: IOfferState
    toggleApplication: (offerId: number) => void
    fetchOffersIfNeeded: (shouldForceUpdate?: boolean) => void
    fetchApplications: () => void
    fetchNextOffers: (originalLength: number) => void
    changeSortOrder: (sortOrder: OfferModel.SortOrder) => void
    changeSortType: (sortType: OfferModel.SortType) => void
  }
}

class Offers extends React.Component<Offers.Props> {
  componentDidMount() {
    const { fetchOffersIfNeeded, fetchApplications } = this.props
    fetchOffersIfNeeded()
    fetchApplications()
  }

  handleClickOnShowMore() {
    const { fetchNextOffers, offers } = this.props
    fetchNextOffers(offers.items.length)
  }

  render() {
    const {
      jobs, offers,
      toggleApplication, changeSortOrder, changeSortType, fetchOffersIfNeeded } = this.props
    const { sortType, sortOrder, receivedAt, requestStatus, } = offers
    return (
      <div className="offer-container">
        <Sort
          changeSortOrder={changeSortOrder}
          changeSortType={changeSortType}
          fetchOffersIfNeeded={fetchOffersIfNeeded}
          sortOrder={sortOrder}
          sortType={sortType}
        />
        {
          offers.items.map(offer =>
            <OfferItem
              offer={offer}
              key={offer.offer}
              toggleApplication={toggleApplication}
              isRequested={jobs.includes(offer.offer)}
            />
          )
        }
        <button onClick={() => this.handleClickOnShowMore()}>
          Show More
        </button>
        <Status
          receivedAt={receivedAt}
          requestStatus={requestStatus}
        />
      </div>
    )
  }
}

const mapStateToProps = (state:State) => {
  const { offers, jobs } = state
  return {
    offers,
    jobs
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  toggleApplication: (offerId: number) => dispatch(toggleApplication(offerId)),
  fetchOffersIfNeeded: (shouldForceUpdate = false) => dispatch(fetchOffersIfNeeded(shouldForceUpdate)),
  fetchApplications: () => dispatch(fetchApplications()),
  fetchNextOffers: (originalLength: number) => dispatch(fetchNextOffers(originalLength)),
  changeSortOrder: (sortOrder: OfferModel.SortOrder) => dispatch(changeSortOrder(sortOrder)),
  changeSortType: (sortType: OfferModel.SortType) => dispatch(changeSortType(sortType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offers)