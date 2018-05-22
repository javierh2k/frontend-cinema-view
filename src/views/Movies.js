import React, {Component} from 'react';
import BootstrapTable, { TableHeaderColumn }  from 'react-bootstrap-table-next';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { BaseContent } from '../components/base/BaseContent'
import { bindActionCreators } from 'redux'
import { fetchMovies, deleteMovie } from '../actions/movies'
import { connect } from 'react-redux'
import { CircleLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

function renderButtonActions(cell, row, rowIndex, dispatchRemoveRow ) {
    function removeRow(id) {
        dispatchRemoveRow(id);
    }    

    return (<div>
        <Link to={`/movies/${row.id}`}><i className='glyphicon glyphicon-pencil'/></Link>
        <a data-id={row.id} onClick={ (e) => removeRow(row.id) }> <i className="glyphicon glyphicon-trash"></i> </a>
    </div>);
}

class Movies extends Component {
    constructor(props){
        super(props);
        
        this.columns = [{
            dataField: 'name',
            text: 'Product Name'
        }, {
            dataField: 'date',
            text: 'Date'

        }, {
            dataField: 'languaje',
            text: 'Languaje'
        },{
            text: 'Actions',
            align: 'center',
            formatter: renderButtonActions,
            formatExtraData: this.handleDeleteRow.bind(this),
        }];
    }

    componentWillMount(){
        this.props.fetchMovies();            
    }    

    handleDeleteRow(row) {        
        const conf = window.confirm('Are you sure you wish to delete this Movie?');
        if(conf){
            this.props.deleteMovie(row);
        }

    }

    render(){
        const { loading, movies } = this.props;

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
                <Link to='/movies/new'> <button type="button" > New </button> </Link>
                <BootstrapTable 
                striped = {true}
                hover = {true}
                keyField='id' data={ movies } columns={ this.columns } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies : state.movieStore.movies,
        loading: state.movieStore.loading,
        errors: state.movieStore.errors
    }
}
  
const MoviesContent = BaseContent(Movies, 'List of Movies');
export default connect(mapStateToProps, {fetchMovies, deleteMovie })(MoviesContent);