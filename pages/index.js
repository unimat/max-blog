import { Fragment } from 'react'
import Head from 'next/head'
import Hero from "@/components/home-page/hero"
import FeaturedPosts from "@/components/home-page/featured-posts"
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max's Blog</title>
        <meta 
          name='description' 
          content='I post about programming and development.' 
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 1800  // ha gyakran keletkezik új post 30 prcenként frissít
  };
}

export default HomePage