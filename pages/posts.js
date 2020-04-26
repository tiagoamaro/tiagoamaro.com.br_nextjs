import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import fs from 'fs'
import path from 'path'
import PropTypes from 'prop-types'
import Link from 'next/link'
import * as matter from 'gray-matter'

const POST_SLUG_REGEX = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})-(?<slug>.*)\.md/

/**
 * @param {String} filename. Expected filename pattern such as 2020-01-01-name-of-post.md
 * @returns {String}
 */
const postSlug = (filename) => {
  const { day, month, year, slug } = filename.match(POST_SLUG_REGEX).groups
  return `/${year}/${month}/${day}/${slug}`
}

export default function Posts ({ posts }) {
  const postLinks = () => {
    return posts.map(post => {
      const { title } = post
      const slug = postSlug(post.filename)
      return <Link key={slug} href={slug}><a>{title}</a></Link>
    })
  }

  return (
    <Layout>
      <NextSeo title='Posts' />
      {postLinks()}
    </Layout>
  )
}

export async function getStaticProps () {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory).reverse() // Files are read in ASC order by name. We want DESC

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const { title } = matter(fileContents).data

    return {
      filename,
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
      filename: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
}
