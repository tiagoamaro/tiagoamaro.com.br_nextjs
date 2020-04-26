import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import fs from 'fs'
import path from 'path'
import PropTypes from 'prop-types'
import Link from 'next/link'

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
    posts.map(post => {
      const slug = postSlug(post.filename)
      return <Link key={slug}><a>Link</a></Link>
    })
  }

  postLinks()

  return (
    <Layout>
      <NextSeo title='Posts' />
      List of posts
    </Layout>
  )
}

export async function getStaticProps () {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    console.log(fileContents)

    return {
      filename,
      title: 'Loroteiro'
    }
  })

  console.log(posts)

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
