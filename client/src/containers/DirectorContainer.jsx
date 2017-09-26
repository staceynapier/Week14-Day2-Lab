import React from 'react'
import DirectorInput from '../components/DirectorInput'
import DirectorFilmDetails from '../components/DirectorFilmDetails'

class DirectorContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      films: [],
      director: null
    }
  }

  handleSearch(director) {
    director = encodeURIComponent(director.director);
    console.log(director);
    let url = `http://netflixroulette.net/api/api.php?director=${ director }`;

    var myHeaders = new Headers();

    var init = {
      method: "GET",
      headers: myHeaders,
      mode: 'no-cors',
      cache: 'default'
    }

      fetch(url)
        .then((res) => res.json())
        .then((res) => this.setState({ films: res}));

  }

  render(){
    return (
      <div>
        <h1>Search Netflix By Director</h1>
        <DirectorInput onSearch={this.handleSearch.bind(this)}/>
        <DirectorFilmDetails films={this.state.films}/>
      </div>
    )
  }
}

export default DirectorContainer
