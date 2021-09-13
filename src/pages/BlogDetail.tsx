import React, {FC} from 'react'
import { useParams } from 'react-router';
import useContentful from '../hooks/use-contentful';
import { getBlogPostById } from '../queries/getBlogPostById';
import Loader from 'react-loaders'
import { SingleBlogType } from '../types/blog/singleBlogType';

type Props = {
  preview: boolean;
}

const BlogDetail:FC<Props>  = ({ preview }) => {
  const { slug }: {[key:string]:string} = useParams();
  const { data, errors } = useContentful(getBlogPostById, preview, slug);

  if (errors) {
		console.log(errors.map(err => err.message).join(", "))
	}

	if (!data) {
		return (
      <div className="App">
			  <Loader active={!data} type="ball-scale-ripple" />
      </div>
		);
	}

  const blogData = data as SingleBlogType;
  const post = blogData.blogPost;
  
  return (
    <h2 className="flex-justify-center mt-60">{post.title}</h2>
  );
}

export default BlogDetail;