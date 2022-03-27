import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ApplicationViews from "./components/ApplicationViews";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { UserProvider } from "./providers/UserProvider";

//This is th eneginning point of our React sied app

function App() {
  return (
    <div className="App">
     <Router>
       <UserProvider>
       <PostProvider>
         <Header />
         <ApplicationViews />
         {/* <SearchBar />  */}
                    {/* Why are you (Search) not working? */}
         {/* <PostList /> triggering the PostList to start printing */}
       </PostProvider>
       </UserProvider>
     </Router>
      
    </div>
  );
}

export default App;