import Layout from '../../components/layout'
import { postSlug, filenameFromSlug } from '../../lib/postSlug'
import remark from 'remark'
import remarkHtml from 'remark-html'
import * as matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { postFiles, POSTS_DIRECTORY } from '../../lib/postFiles'

export default function Post ({ post }) {
  const { content } = post

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  const filename = filenameFromSlug(slug)
  const fullPath = path.join(POSTS_DIRECTORY, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { content: markdownContent } = matter(fileContents)

  const content = remark()
    .use(remarkHtml)
    .processSync(markdownContent)
    .toString()

  return {
    props: {
      post: {
        content
      }
    }
  }
}

export async function getStaticPaths (slug) {
  const paths = postFiles()
    .map(filename => postSlug(filename))
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
