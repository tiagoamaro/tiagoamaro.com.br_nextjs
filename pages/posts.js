import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import fs from 'fs'
import path from 'path'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { postFiles, POSTS_DIRECTORY } from '../lib/postFiles'
import { postFromFile } from '../lib/postFromFile'

function PostLink ({ slug, title }) {
  return (
    <Link key={slug} href='/post/[slug]' as={`/post/${slug}`}>
      <a>{title}</a>
    </Link>
  )
}

function PostListItem ({ post }) {
  const { date } = post

  return (
    <li>
      <PostLink {...post} /> {date}
    </li>
  )
}

function PostList ({ posts }) {
  return (
    <ul>
      {posts.map(post => <PostListItem key={post.slug} post={post} />)}
    </ul>
  )
}

export default function Posts ({ posts }) {
  return (
    <Layout>
      <NextSeo title='Posts' />
      <PostList posts={posts} />
    </Layout>
  )
}

export async function getStaticProps () {
  const posts = postFiles().map(filename => {
    const filePath = path.join(POSTS_DIRECTORY, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const { date, slug, title } = postFromFile({ filename, fileContents })

    return {
      date,
      slug,
      title
    }
  })

  return {
    props: {
      posts
    }
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
}
