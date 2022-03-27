import React, {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { PostProvider } from "../providers/PostProvider";
import { UserContext } from "../providers/UserProvider";

import { Login } from "./Login";
import { Register } from "./Register";


const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserContext);

  if(!isLoggedIn){

  

return(
  <Routes>

          <Route path="*" element={<Navigate to="login" />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />

  </Routes>
)

  }
  else{
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/" element= {<PostList />} />

      <Route path="posts/add" element={<PostForm />} />

      {/* <Route path="/posts/:id" element={<PostDetails />} /> */}
    </Routes>
  );
  }
 };

export default ApplicationViews;