import * as apiPosts from "api/posts";

import * as postTypes from "./posts.types";

export const setPostsRequestStatusPending: postTypes.SetPostsRequestStatusPendingActionCreator =
  () => ({
    type: postTypes.SET_POSTS_REQUEST_STATUS_PENDING,
  });

export const setPostsRequestSuccess: postTypes.SetPostsRequestSuccessActionCreator =
  (posts) => ({
    type: postTypes.SET_POSTS,
    payload: posts,
  });

export const setPostsRequestStatusFailure: postTypes.SetPostsRequestStatusFailureActionCreator =
  () => ({
    type: postTypes.SET_POSTS_REQUEST_STATUS_FAILURE,
  });

export const getPosts: postTypes.GetPostsThunk = () => {
  return (dispatch) => {
    dispatch(setPostsRequestStatusPending());

    apiPosts
      .getPosts()
      .then((posts) => dispatch(setPostsRequestSuccess(posts)))
      .catch(() => dispatch(setPostsRequestStatusFailure()));
  };
};

export const DeletePostRequestStatusPending: postTypes.DeletePostRequestStatusPendingActionCreator =
  () => ({
    type: postTypes.DELETE_POST_REQUEST_STATUS_PENDING,
  });

export const DeletePostRequestSuccess: postTypes.DeletePostRequestSuccessActionCreator =
  (post) => ({
    type: postTypes.DELETE_POST,
    payload: post ,
  });

export const DeletePostRequestStatusFailure: postTypes.DeletePostRequestStatusFailureActionCreator =
  () => ({
    type: postTypes.DELETE_POST_REQUEST_STATUS_FAILURE,
  });

export const deletePost: postTypes.DeletePostThunk = (id) => {
  return (dispatch) => {
    dispatch(DeletePostRequestStatusPending());

    apiPosts
      .deletePost(id)
      .then(() => dispatch(DeletePostRequestSuccess(id)))
      .catch(() => dispatch(DeletePostRequestStatusFailure()));
  };
};

export const CreatePostRequestStatusPending: postTypes.CreatePostRequestStatusPendingActionCreator =
  () => ({
    type: postTypes.CREATE_POST_REQUEST_STATUS_PENDING,
  });

export const CreatePostRequestSuccess: postTypes.CreatePostRequestSuccessActionCreator =
  (post) => ({
    type: postTypes.CREATE_POST,
    payload: post ,
  });

export const CreatePostRequestStatusFailure: postTypes.CreatePostRequestStatusFailureActionCreator =
  () => ({
    type: postTypes.CREATE_POST_REQUEST_STATUS_FAILURE,
  });

export const createPost: postTypes.CreatePostThunk = (body) => {
  return (dispatch) => {
    dispatch(CreatePostRequestStatusPending());

    apiPosts
      .createPost(body)
      .then((post) => dispatch(CreatePostRequestSuccess(post)))
      .catch(() => dispatch(CreatePostRequestStatusFailure()));
  };
};

