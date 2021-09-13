import React, { FC, useState } from 'react'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard/PostCard';
import Sidebar from '../components/Sidebar/Sidebar';
import useContentful from '../hooks/use-contentful';
import { getBlogData } from '../queries/getBlogData';
import { BlogType } from '../types/blog/blogType';

type Props = {
  preview: boolean;
}

const Blog:FC<Props> = ({ preview }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { data, errors } = useContentful(getBlogData, preview, undefined, selectedTags);

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

  const blogData = data as BlogType;
  const postDuplicates: string[] = [];
  const fileteredPosts = blogData.filteredByTags.items
    .map(it => it.linkedFrom.blogPostCollection.items)
    .flat()
    .filter(it => {
      if (!postDuplicates.includes(it.sys.id)) {
        postDuplicates.push(it.sys.id)
        return true;
      } else {
        return false;
      }
    });

  const allPosts = blogData.blogPostCollection.items;

  const tagDuplicates: string[] = [];
  const blogTags = allPosts.map((it) => {
    return it.tagsCollection.items
    .map(i => ({name: i.name, id: i.sys.id}))})
    .flat()
    .filter(it => {
      if (!tagDuplicates.includes(it.name)) {
        tagDuplicates.push(it.name)
        return true;
      } else {
        return false
      }
    });

  const selectTag = (id:string) => {
    const newTags = [...selectedTags];
    if (!newTags.includes(id)) {
      newTags.push(id);
      setSelectedTags(newTags);
    } else {
      const tagId = newTags.indexOf(id);
      newTags.splice(tagId, 1)
      setSelectedTags(newTags);
    }
  }
  
  return (
      <div className="row">
        <div className="col-xs-12 col-sm-9 col-md-9">
          <div className="flex-justify-center flex-wrap mt-60">
            {(selectedTags[0] ? fileteredPosts : allPosts).map((it) => {
              return (
                <Link key={it.sys.id} to={`blog-detail/${it.sys.id}`}>
                  <PostCard data={it}/>
                </Link>
              )
            })} 
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-3">
          <Sidebar tags={blogTags} selectTag={(id) => selectTag(id)} selectedTags={selectedTags}/>
        </div>
      </div>
  );
}

export default Blog;