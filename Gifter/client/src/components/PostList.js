import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
  const { posts, getAllPosts } = useContext(PostContext);


  //This like an even listener for when the page loads
  //Once it is ran getAllPosts() function os triggered, which is getting all the posts in the API which then puts the information in the state variable (data we want to print) in the posts state ^^
  //When the state variable is changed we are changing what the user sees on the page
  useEffect(() => {
    getAllPosts();
  }, []);

 const user = JSON.parse(localStorage.getItem("gifterUser"))
  //This return does all the printing
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.filter(p => p.userProfileId === user.id ).map((singlePostInLoop) => (
            <Post key={singlePostInLoop.id} postProp={singlePostInLoop} />
          ))}
            {/*rending a component, the information are going to hangout in state until this loop runs and posting each post at a time
            post={post} is where we are passing down the prop, we are naming this prop (the variable of) postProp and we are passing the value of singlePostInLoop */}
        </div>
      </div>
    </div>
  );
};

export default PostList;