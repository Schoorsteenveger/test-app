import React from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'

function Searchbar() {
    return (
        <div>
            <SearchBar products={['tooth paste',
                'mouth thingy',
                'tooth brush',
                'dental floss',
                'mouth guard']}
            />

            <SearchBar products={['Banaan',
                'Aardbei',
                '5 dozen aardbei',
                '3 banaan',
                'Druiven',
                '3 kilo druiven'
            ]}
            />
        </div>
    )
}

export default Searchbar



// import React, { useState, useEffect } from 'react'
// import SearchBar from '../Components/SearchBar/SearchBar'



// function Searchbar() {

//     const [productsState, setProductsState] = useState([])

//     useEffect(() => {
//         setTimeout(() => {
//             setProductsState = ['tooth paste',
//                 'mouth thingy',
//                 'tooth brush',
//                 'dental floss',
//                 'mouth guard'
//             ]
//         }, 2000)
//     }, [])

//     return (
//         <div>
//             <SearchBar products={productsState}
//             />

//             {/* <SearchBar products={['Banaan',
//                 'Aardbei',
//                 '5 dozen aardbei',
//                 '3 banaan',
//                 'Druiven',
//                 '3 kilo druiven'
//             ]}
//             /> */}
//         </div>
//     )
// }

// export default Searchbar