import React from 'react';
import Film from './Film.jsx';

class DirectorFilmDetails extends React.Component {

  render() {
    console.log(this.props.films);
    const filmList = this.props.films.map((film, index) => {
      return(
        <Film title={film.show_title} key={index} summary={film.summary} poster={film.poster}></Film>
      )
    })

    return (
      <div className="film-list">
        {filmList}
      </div>
    )
  }
}

export default DirectorFilmDetails;
