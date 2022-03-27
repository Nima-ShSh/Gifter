import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";
//1. to print an empty form
    //2. as the user type, we need to update the state
//3. the user clicks the save, we send the state info to the database
export const SearchBar = () => {
   const [searchPost, getAllPosts] = useContext(PostContext)
    const [ searchTerm, setSearchPosts ] = useState("");
    useEffect(() => {
        getAllPosts()
    }, [])
    const handleControlledInputChange = (props) => {
        const newSearchTerms= { ...searchTerm }
        newSearchTerms[props.target.id] = props.target.value
                setSearchPosts(newSearchTerms)
      }
      const handleClickSearchEvent = (props) =>{
          props.preventDefault()
                searchPost(searchTerm)
                }
 return (
    <>
    Post search:
    <input type="text"
      className="input--wide"
      id="search"
      placeholder="Search for a post... " onChange={handleControlledInputChange} value={searchTerm}/>
            <button id="saveEvent-button"className="btn btn-secondary"
              onClick={handleClickSearchEvent}>
               Search Event
            </button>
        </>
      )
  }
export default PostSearch;