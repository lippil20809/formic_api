import { State as PostsState } from "./posts/posts.types";

export enum Statuses {
  PENDING,
  FAILURE,
  SUCCESS,
  UNCALLED,
}

export interface RootState {
  readonly posts: PostsState;
}
