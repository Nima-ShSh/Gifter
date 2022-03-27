import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  //This is a hook usestate([])
  //posts and setPosts are state variables
  //takes in an empty list
  //this will be the list were the gifs are going to be stored in

  const getAllPosts = () => {
    return fetch("https://localhost:44387/api/post")
      .then((res) => res.json()) //turns JSON file to javascript
      .then(setPosts);  //taking the js and put the array of objects in to the state
      //Once state is changed, everything is printed back into the setPosts (since posts state was changed)
  };
  //HTTP get verb request is being sent to the api which in return the
  //get method in ASO.Net is triggered and data from the database is
  //retrieved using the SQL statement
  //If we don't specify the verb it automatically goes to HTTP GET
  //Our fetch call is shorter because of the proxy, read the comment lines below

  const addPost = (post) => {
      //we've added the proxy attribute in the package.json file
      //so our url doesn't look like this and is more secure
      //https://localhost:5001/api/posts
    return fetch("https://localhost:44387/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const searchPost = (query) => {
    return fetch(`https://localhost:44369/api/Post/search?q=${query}`)
    .then((res) => res.json())
    .then(setPosts);
  };

  const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json());
};

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, searchPost, getPost }}>
      {props.children}
    </PostContext.Provider>
  );
};