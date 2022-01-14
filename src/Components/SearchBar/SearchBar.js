import React, { useState } from 'react'
import './SearchBar.css'


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    // const handleClearClick = () => {
    //     setSearchValue("")
    // }

    return (
        <div>
            <h2>Search bar</h2>
            <input className='inPutSearchBar' type="text" value={searchValue} onChange={handleInputChange} />
            {searchValue}
            <button>Clear</button>
        </div>

    )
}

export default SearchBar