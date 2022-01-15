import React, { useState } from 'react'
import './SearchBar.css'


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('') // searchvalue is de de state..

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)// user typed in, stored in searchValue state..ustestate en is te delen met parentlevel app/component.
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0 // = true when there's input.
    
   
    const filteredProducts = props.products.filter((product) => {
            return product.includes(searchValue)
        }) //filteredProducts is de nieuwe array met de searchinput. React lifecycle. 
    

        return (
            <div className='containerSearchbar'>
                <h2>Search bar</h2>
                <input className='inPutSearchBar' type="text" value={searchValue} onChange={handleInputChange} />
                {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}

                <ul>
                    {filteredProducts.map((product) => {
                        return <li key={product}>{product}</li>

                    })}
                </ul>
                

            </div>

        ) 
    }

    export default SearchBar