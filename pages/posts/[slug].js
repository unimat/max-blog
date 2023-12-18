import { Fragment } from 'react';

import PostContent from '../../components/posts/post-detail/post-content';

function PostDetailPage(props) {
  return (
    <Fragment>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export default PostDetailPage;