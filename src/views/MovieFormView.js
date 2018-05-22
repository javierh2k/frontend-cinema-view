import React, { Component}  from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newMovie, saveMovie, fetchMovie, updateMovie } from '../actions/movies';
import MovieForm from '../components/MovieForm';
import { BaseContent } from '../components/base/BaseContent'

class MovieFormView extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { movieId } = this.props.match.params;
    if(movieId){
      this.props.fetchMovie(movieId)
    } else {
      this.props.newMovie();
    }
  }

  submit = (movie) => {
    console.log( movie ,'fff' ); //.target.files[0]
    if(!movie.id) {
      return this.props.saveMovie(movie)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateMovie(movie)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div> {
          this.state.redirect ?
          <Redirect to="/movies" /> :
          <MovieForm movie={this.props.movie} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieStore.movie,
    errors: state.movieStore.errors
  }
}
const MovieFormContent = BaseContent(MovieFormView, 'Movie Form');
export default connect(mapStateToProps, {newMovie, saveMovie, fetchMovie, updateMovie})(MovieFormContent);
