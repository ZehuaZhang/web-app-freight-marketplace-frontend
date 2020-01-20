import * as React from 'react'
import { OfferModel } from '../models'

export namespace Sort {
  export interface Props {
    sortType: OfferModel.SortType,
    sortOrder: OfferModel.SortOrder,
    changeSortType: (sortType: OfferModel.SortType) => void
    changeSortOrder: (sortOrder: OfferModel.SortOrder) => void
    fetchOffersIfNeeded: (shouldForceUpdate: boolean) => void
  }
}

type A = OfferModel.SortOrder

export class Sort extends React.Component<Sort.Props> {
  handleClickOnDropdown(target: HTMLSelectElement) {
    const { changeSortType, fetchOffersIfNeeded } = this.props

    changeSortType(target.value as OfferModel.SortType)
    fetchOffersIfNeeded(true)
  }

  handleClickOnButton() {
    const { changeSortOrder, fetchOffersIfNeeded, sortOrder } = this.props
    const SortOrderValueList = Object.keys(OfferModel.SortOrder)
      .map(typeName => (OfferModel.SortOrder as any)[typeName])
    const nextValue = SortOrderValueList[(SortOrderValueList.indexOf(sortOrder) + 1) % SortOrderValueList.length]

    changeSortOrder(nextValue)
    fetchOffersIfNeeded(true)
  }

  render() {
    const { sortOrder, sortType } = this.props

    const dropdownOptions = Object.keys(OfferModel.SortType).map(typeName => {
      return ({
        id: typeName,
        value: (OfferModel.SortType as any)[typeName]
      })
    })

    return (
      <div className='sort-container'>
        <select
          className='sort-type-dropdown'
          value={sortType}
          onChange={event => this.handleClickOnDropdown(event.target)}>
          {
            dropdownOptions.map(option =>
              <option
                key={option.id}
                value={option.value}>
                {option.value}
              </option>
            )
          }
        </select>
        <button onClick={() => this.handleClickOnButton()}>
          {sortOrder}
        </button>
      </div>
    )
  }
}