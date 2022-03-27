import React, {useContext, useEffect, useState} from "react"
import { PostContext } from "../providers/PostProvider"
import { useNavigate } from "react-router-dom";
import Post from "./Post";


const PostForm = () => {
    const {getAllPosts, addPost} = useContext(PostContext)

    const [post, setPost] = useState({
        title: "",
        imageUrl: "",
        caption:"",
        userProfileId: 1
    });
    
    const navigate = useNavigate();

    useEffect(()=> {
        getAllPosts()
    }, []);


    const handleControlledInputChange = (event)=> {
        const newPost = {...post}
        newPost[event.target.id] = event.target.value
        
        setPost(newPost)
    }

    const handleSavePost = (event) => {
        event.preventDefault()

        if(post.title === "" || post.imageUrl ==="" )
        {
            alert("Please fill out the title and/or image url fields.")
        } else {
            addPost(post)
            .then(navigate("/"));
     }
      
    }
    
    return(
        <form className="postForm">
            {/* form tags sends http request back to controller so that is why we used preventdefault  - telling form do not send anything to server bc we want to send the http request*/}
            <h2>New Post</h2>
            <fieldset>
                <div className="formGroup">
                <label htmlFor="title">Post Title</label>
                <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="post title" value={Post.title}/>
                </div>
           </fieldset>
           <fieldset>
                <div className="formGroup">
                <label htmlFor="title">Gif Url:</label>
                <input type="text" id="imageUrl" onChange={handleControlledInputChange} required className="form-control" placeholder="post imageUrl" value={Post.imageUrl}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="formGroup">
                <label htmlFor="title">Caption:</label>
                <input type="text" id="caption" onChange={handleControlledInputChange} required  className="form-control" placeholder="post caption" value={Post.caption}/>
                </div>
            </fieldset>
            
               
            <div className="form-group row col-sm-12 mx-auto mb-3">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={handleSavePost}>
                            Save Post
                        </button>
                    </div>
                    </div>
        </form>
    )
}
export default PostForm;




//Load the form, user does stuff, we print the changes to the state
//when the user hits save, we make a fetch call to the JSON and database on the API




  //onChange values in Amanda's form is saying as the user types and the input changes
  //we are going to run this function

  //hadnlesavepost
  //form tags in html always send information back
  //preventing a page refresh
  //addpost - creating our own request, post is coming from the state which is a single post
  //Changes line 9 to post

  //in addPost
  //when it is in all caps it is referring to the actual HTML post method
  //body is what the user just typed in, we turn js into JSON send it to the tunnel then our API is going to get it from the tunnel and turn it into C# to deal with it on the server side
  //DELETE THE DATE VARIABLE FROM THE STATE
  //In the state userProfileId: 1