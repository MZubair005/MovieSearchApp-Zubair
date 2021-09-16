

// export default class SearchForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
//     render() {

import React from 'react'

export default function SearchForm(props) {
    return (
        <div>
            <form className="search-form">
                        <input type="text" value={props.searchMovie} placeholder="i.e.Avengers" onChange={props.handleSearchInput} />
                        <button type="btn" onClick={props.handleSearchBtn}>Search</button>
                    </form>
        </div>
    )
}
