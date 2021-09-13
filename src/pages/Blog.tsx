import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';
import useContentful from '../hooks/use-contentful';
import { getAllBlogPosts } from '../queries/getAllBlogPosts';
import { BlogType } from '../types/blog/blogType';

type Props = {
  preview: boolean;
}

const Blog:FC<Props> = ({ preview }) => {
  const { data, errors } = useContentful(getAllBlogPosts, preview);


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
        return (
          <Link key={it.sys.id} to={`blog-detail/${it.sys.id}`}>
            <PostCard data={it}/>
          </Link>
        )
      })} 
    </div>
  );
}

export default Blog;