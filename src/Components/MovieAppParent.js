import React, { Component } from 'react'
import HeadTitle from './HeadTitle';
import MovieCards from './MovieCards';
import SearchForm from './SearchForm';
import './Style.css'

export default class MovieAppParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchMovie:""
        }
    }

    componentDidMount(e) {
        this.makeApiCall("Avengers");
    }

    handleSearchInput = (e) => {
        this.setState(
            {searchMovie: e.target.value}
            )}

    handleSearchBtn = (e) => { 
        this.makeApiCall(this.state.searchMovie);
        e.preventDefault();
    }


    makeApiCall(movie) {
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=999b871d')
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=999b871d`)
            .then((response) => {
                if (response.status !== 200) throw response;
                return response.json();
            })
            .then((data) => {
                this.setState({
                    movies: data.Search
                })
                console.log(data);
            })
            .catch((error) => {
                alert('Data not found');
            })
    }
    render() {
        const { movies,searchMovie } = this.state;
        return (
            <>
                <header className="header">
                <HeadTitle />
                <div className="search-btn">
                <SearchForm handleSearchInput={this.handleSearchInput}handleSearchBtn={this.handleSearchBtn} searchMovie={searchMovie} />
                </div>
                </header>
                 {movies.map((movie)=>(
                <MovieCards Title={movie.Title} source={movie.Poster} Year={movie.Year}/>)
            )}
            </>
        )
    }
}
