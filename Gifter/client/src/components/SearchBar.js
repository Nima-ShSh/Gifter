import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const { searchPost } = useContext(PostContext);
    const handleSearch = () => {
        console.log("ya clicked the search button", searchTerm)
        searchPost(searchTerm)
    }
    return (<>
        <input type="text" id="search" placeholder="Enter your search phrase here..." onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
    </>)
}
export default SearchBar;