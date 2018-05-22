import React, {Component} from 'react';
import { BaseContent } from '../components/base/BaseContent'

class Home extends Component {
    constructor (props) {
      super(props)
    }
  
    render () {
      return (
        <h1 className="text-center">
            <strong>Welcome to Admin-javier</strong>
        </h1>
      )
    }
}
  

export default BaseContent(Home, 'Welcome')