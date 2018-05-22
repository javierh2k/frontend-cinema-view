import React, { Component}  from 'react';
import { Link } from 'react-router-dom'

class Movies extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { movies } = this.props;
    console.log(movies);

    return (      
      <div>        
        { movies.map(row => 
          <div class="movie">
              <figure class="movie-poster">
              <img height="200" src={`http://localhost:1337/${row.id}.jpg`} alt=""/></figure>
              <div class="movie-title">
                <Link to={`/detail/${row.id}`}> {row.name} </Link>
              </div>
              <p>{row.date}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Movies;
