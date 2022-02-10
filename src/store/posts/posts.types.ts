import { ThunkAction } from "redux-thunk";

import { Post } from "api/posts.types";

import { Statuses } from "../types";
import { type } from "os";

export interface State {
  readonly postsRequestStatus: Statuses;

  readonly posts: Post[];
}

export const SET_POSTS_REQUEST_STATUS_PENDING =
  "SET_POSTS_REQUEST_STATUS_PENDING";

export type SetPostsRequestStatusPendingAction = {
  type: typeof SET_POSTS_REQUEST_STATUS_PENDING;
};

export type SetPostsRequestStatusPendingActionCreator =
  () => SetPostsRequestStatusPendingAction;

export const SET_POSTS_REQUEST_STATUS_FAILURE =
  "SET_POSTS_REQUEST_STATUS_FAILURE";

export type SetPostsRequestStatusFailureAction = {
  type: typeof SET_POSTS_REQUEST_STATUS_FAILURE;
};

export type SetPostsRequestStatusFailureActionCreator =
  () => SetPostsRequestStatusFailureAction;

export const SET_POSTS = "SET_POSTS";

export type SetPostsRequestSuccessAction = {
  type: typeof SET_POSTS;
  payload: Post[];
};

export type SetPostsRequestSuccessActionCreator = (
  posts: Post[]
) => SetPostsRequestSuccessAction;

export const CREATE_POST_REQUEST_STATUS_PENDING =
  "CREATE_POST_REQUEST_STATUS_PENDING";

export type CreatePostRequestStatusPendingAction = {
  type: typeof CREATE_POST_REQUEST_STATUS_PENDING;
};

export type CreatePostRequestStatusPendingActionCreator =
  () => CreatePostRequestStatusPendingAction;

export const CREATE_POST_REQUEST_STATUS_FAILURE =
  "CREATE_POST_REQUEST_STATUS_FAILURE";

export type CreatePostRequestStatusFailureAction = {
  type: typeof CREATE_POST_REQUEST_STATUS_FAILURE;
};

export type CreatePostRequestStatusFailureActionCreator =
  () => CreatePostRequestStatusFailureAction;


export const CREATE_POST = "CREATE_POST";

export type CreatePostRequestSuccessAction = {
  type: typeof CREATE_POST;
  payload: Post ;
};

export type CreatePostRequestSuccessActionCreator = (
  post: Post
) => CreatePostRequestSuccessAction;


export const DELETE_POST_REQUEST_STATUS_PENDING =
  "DELETE_POST_REQUEST_STATUS_PENDING";

export type DeletePostRequestStatusPendingAction = {
  type: typeof DELETE_POST_REQUEST_STATUS_PENDING;
};

export type DeletePostRequestStatusPendingActionCreator =
  () => DeletePostRequestStatusPendingAction;

export const DELETE_POST_REQUEST_STATUS_FAILURE =
  "DELETE_POST_REQUEST_STATUS_FAILURE";

export type DeletePostRequestStatusFailureAction = {
  type: typeof DELETE_POST_REQUEST_STATUS_FAILURE;
};

export type DeletePostRequestStatusFailureActionCreator =
  () => DeletePostRequestStatusFailureAction;

export const DELETE_POST = "DELETE_POST";

export type DeletePostRequestSuccessAction = {
  type: typeof DELETE_POST;
  payload: number;
};

export type DeletePostRequestSuccessActionCreator = (
  post: number
) => DeletePostRequestSuccessAction;



export type Actions =
  | SetPostsRequestStatusPendingAction
  | SetPostsRequestSuccessAction
  | SetPostsRequestStatusFailureAction
  | DeletePostRequestStatusPendingAction
  | DeletePostRequestStatusFailureAction
  | DeletePostRequestSuccessAction
  | CreatePostRequestStatusFailureAction
  | CreatePostRequestStatusPendingAction
  | CreatePostRequestSuccessAction


export type DeletePostThunk = (
  id: number
) => ThunkAction<void, State, number, Actions>;


export type CreatePostThunk = (
  body: Post
) => ThunkAction<void, State, number, Actions>;

export type GetPostsThunk = () => ThunkAction<void, State, void, Actions>;
