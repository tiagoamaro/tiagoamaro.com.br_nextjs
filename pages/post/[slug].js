import Layout from '../../components/layout'
import { postSlug, filenameFromSlug } from '../../lib/postSlug'
import path from 'path'
import fs from 'fs'
import { postFiles, POSTS_DIRECTORY } from '../../lib/postFiles'
import PostBody from '../../components/postBody'
import PostTitle from '../../components/postTitle'
import markdownToHtml from '../../lib/markdownToHtml'
import { postFromFile } from '../../lib/postFromFile'

export default function Post ({ post }) {
  const { content, title } = post

  return (
    <Layout>
      <PostTitle title={title} />
      <PostBody content={content} />
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  const filename = filenameFromSlug(slug)
  const fullPath = path.join(POSTS_DIRECTORY, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { content: rawContent, title } = postFromFile({ filename, fileContents })
  const content = await markdownToHtml(rawContent)

  return {
    props: {
      post: {
        content,
        title
      }
    }
  }
}

export async function getStaticPaths () {
  const paths = postFiles()
    .map(filename => postSlug(filename))
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
