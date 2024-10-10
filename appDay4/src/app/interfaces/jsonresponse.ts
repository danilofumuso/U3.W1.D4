import { iPost } from './ipost';

export interface iJSONresponse {
  posts: iPost[];
  total: number;
  skip: number;
  limit: number;
}
