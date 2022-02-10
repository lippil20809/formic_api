import { Post } from '../../api/posts.types';

export interface FormValues extends Pick<Post, 'title' | 'body'> {}

export interface FormProps {
  initial?: FormValues | null;
 
}


