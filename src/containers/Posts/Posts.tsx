import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Post from "../../components/Post";
import { getPosts, getSlice,deletePost } from "../../store/posts";
import { Statuses } from "store/types";

const PostsWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, postsRequestStatus } = useSelector(getSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleClick = (id: number) => {
    
    dispatch(deletePost(id))

  };

  return (
    <PostsWrapper>
      {postsRequestStatus === Statuses.PENDING && "loading..."}
      {postsRequestStatus === Statuses.FAILURE && "some error..."}
      {posts?.map((post) => (
        <Post key={post.id} {...post} onClick={handleClick} />
      ))}
    </PostsWrapper>
  );
};

export default Posts;
