import React from 'react'


// export default class MovieCards extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             movies:[]
//         }
//     }
//     render() 
const MovieCards = (props) => (
    <div>
        <div className="card">
            <img className="movie-img" src={props.source} alt="Card Img" />
            <div className="movieInfo">
                <h4 className="movie-title">{props.Title}</h4>
                <span className="movie-year">{props.Year}</span>
                
            </div>
        </div>

    </div>
);
export default MovieCards;
