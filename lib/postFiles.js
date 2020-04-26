import path from 'path'
import fs from 'fs'

export const POSTS_DIRECTORY = path.join(process.cwd(), 'posts')

/**
 * Return an array with the post filenames.
 * Should be used in getStaticProps, getStaticPaths
 * @return {Array<String>}
 */
export function postFiles () {
  const postsDirectory = path.join(process.cwd(), 'posts')
  return fs.readdirSync(postsDirectory).reverse() // Files are read in ASC order by name. We want DESC
}
