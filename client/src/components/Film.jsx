import React from 'react';

const Film = (props) => {

    if(!props) {
      return null;
    }
    return (
      <section>
        <h2>
          {props.title}
        </h2>
          <img src={props.poster}/>
        <p>
          {props.summary}
        </p>
      </section>
    );
  }


export default Film;
