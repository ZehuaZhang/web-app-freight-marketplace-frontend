import * as React from 'react'
import { OfferModel } from '../models'
import { dateUtil } from '../utils'

export namespace Status {
  export interface Props {
    receivedAt: string,
    requestStatus: OfferModel.RequestStatus
  }
}

export class Status extends React.Component<Status.Props> {
  render() {
    const { receivedAt, requestStatus } = this.props

    return (
      <div className='status-container'>
        {
          receivedAt &&
          <div>
            Updated on {dateUtil.getLocaleStringFromEpochTime(parseInt(receivedAt))}
          </div>
        }
        {
          requestStatus !== OfferModel.RequestStatus.NA &&
          <div>
            Status {requestStatus}
          </div>
        }
      </div>
    )
  }
}