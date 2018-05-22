import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movies'
import Movies from './Movies';

class Home extends Component {
    
    componentWillMount(){
        this.props.fetchMovies();            
    } 
    
    render(){
        return (
        <main class="main-content">
            <div class="container">
                <div class="page">
                    <div class="breadcrumbs">
                        <a href="index.html">Home</a>
                        <span>Movie Review</span>
                    </div>

                    <div class="filters">
                        <select name="#" id="#" placeholder="Choose Category">
                            <option value="#">Action</option>
                            <option value="#">Drama</option>
                            <option value="#">Fantasy</option>
                            <option value="#">Horror</option>
                            <option value="#">Adventure</option>
                        </select>                        
                    </div>
                    <div class="movie-list">
                        
                        <Movies {...this.props} />                         
                        
                    </div> 
                    <hr/>
                    <div class="pagination">
                        <a href="#" class="page-number prev"><i class="fa fa-angle-left"></i></a>
                        <span class="page-number current">1</span>
                        <a href="#" class="page-number">2</a>
                        <a href="#" class="page-number">3</a>
                        <a href="#" class="page-number">4</a>
                        <a href="#" class="page-number">5</a>
                        <a href="#" class="page-number next"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div> 
        </main>
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
  
export default connect(mapStateToProps, {fetchMovies })(Home);
