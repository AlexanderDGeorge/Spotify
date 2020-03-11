import React, { useState } from 'react';
import Results from './results';
import './search.css';

function Search(props) {

    const [search, setSearch] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input 
                    className="search-input"
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    onBlur={handleSearch}
                    placeholder="search"
                />
            </form>
            <Results search={search}/>
        </div>
    )
}

export default Search;