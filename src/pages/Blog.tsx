import React, { FC } from 'react'
import PostCard from '../components/PostCard/PostCard';
import useContentful from '../hooks/use-contentful';
import { blogQuery } from '../queries/blogQuery';
import { BlogType } from '../types/blogQuery/blogType';

type Props = {
  preview: boolean;
}

const Blog:FC<Props> = ({ preview }) => {
  const { data, errors } = useContentful(blogQuery, preview);


  if (errors) {
		console.log(errors.map(err => err.message).join(", "))
	}

	if (!data) {
		return (
			<div className="App">
				<h6>Loading...</h6>
			</div>
		);
	}

  const blogData = data as BlogType;
  const posts = blogData.blogPostCollection.items;
  
  return (
    <div className="flex-justify-center mt-60">
      {posts.map((it) => {
        return <PostCard data={it} key={it.sys.id}/>
      })} 
    </div>
  );
}

export default Blog;