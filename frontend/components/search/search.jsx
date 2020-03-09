import React, { useState } from 'react';

function Search(props) {

    const [search, setSearch] = useState("");

    function handleSearch() {

    }

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onBlur={handleSearch}
                    placeholder="search"
                />
            </form>
        </div>
    )
}

const mapDispatch = dispatch => ({
    
})

export default Search;