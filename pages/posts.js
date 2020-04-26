import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import fs from 'fs'
import path from 'path'
import PropTypes from 'prop-types'
import Link from 'next/link'
import * as matter from 'gray-matter'
import { postSlug } from '../lib/postSlug'
import { postFiles, POSTS_DIRECTORY } from '../lib/postFiles'

function PostLink ({ slug, title }) {
  return (
    <Link key={slug} href='/post/[slug]' as={`/post/${slug}`}>
      <a>{title}</a>
    </Link>
  )
}

function PostList ({ posts }) {
  return posts.map(post => <PostLink key={post.slug} {...post} />)
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

    const slug = postSlug(filename)
    const { title } = matter(fileContents).data

    return {
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
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
}
