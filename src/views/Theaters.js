import React, {Component} from 'react';
import BootstrapTable, { TableHeaderColumn }  from 'react-bootstrap-table-next';
import { BaseContent } from '../components/base/BaseContent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CircleLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

class Theaters extends Component {
    constructor(props){
        super(props);
        
        this.columns = [{
            dataField: 'name',
            text: 'Product Name'
        }, {
            dataField: 'location',
            text: 'Location'

        }, {
            dataField: 'movies',
            text: 'Movies'
        }];

        this.rows = [{
            name: 'name',
            location: 'Product Name'
        }, {
            name: 'location',
            location: 'Location'

        }, {
            name: 'Movies',
            location: 'movies'
        }];

    }

      
    render(){
        const { loading, theaters } = this.props;

        if (loading) {
            return( <div className="Home-preLoader">
                <CircleLoader
                    color="black"
                    loading={ true }/>
                </div>
            );
        }
       
        return ( 
            <div>
                <BootstrapTable 
                striped = {true}
                hover = {true}
                keyField='id' data={ this.rows } columns={ this.columns } />
            </div>
        )
    }
}

  
const TheatersContent = BaseContent(Theaters, 'List of Theaters');
export default TheatersContent;