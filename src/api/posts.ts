import axios from "axios";

// https://jsonplaceholder.typicode.com/
// GET	/posts
// POST	/posts
// DELETE	/posts/1

import { Post} from "./posts.types";

export const getPosts = async () => {
    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  
    return data;
  };

export const createPost = async (body: Post) => {
    const {data} = await axios.post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        body
    )

    return data
}  

export const deletePost = async (id: number) => {
    const {data} = await axios.delete<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    return data
}

