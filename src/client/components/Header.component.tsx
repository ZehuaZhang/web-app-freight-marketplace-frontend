import * as React from 'react'
import { Link } from 'react-router-dom'

export namespace Header {
  export interface Props {
  }
}

export class Header extends React.Component<Header.Props> {
  render() {
    return (
      <div className="convoy-header-container">
        <div className="convoy-header-title">
          <a className="convoy-navigation-header logo" href="/" target="blank">CONVOY</a>
        </div>
        <div className="convoy-navigation-container">
          <Link className="convoy-navigation-item offer" to="/offers">Offers</Link>
          <Link className="convoy-navigation-item job" to="/jobs">Jobs</Link>
        </div>
      </div>
    )
  }
}