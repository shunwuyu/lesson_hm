import { Route } from 'react-router-dom';
import PostIndex from './post-index';
import PostShow from './post-show';

export const postRoutes = (
  <>
    <Route path="posts" element={<PostIndex />}/>
    <Route path="posts/:postId" element={<PostShow />}/>
  </>
)