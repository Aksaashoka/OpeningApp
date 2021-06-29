import React from 'react'
import SearchBar from "./SearchBar"
import OpeningList from './OpeningList'
function Home() {
    return (
        <div>
            <SearchBar/>
            <div> Los Filtros</div>
            <div>
                <OpeningList/>
            </div>
        </div>
    )
}

export default Home
