import * as matter from 'gray-matter'
import { postDate, postSlug } from './postSlug'

/**
 * @param {String} fileContents
 * @param {String} filename
 * @returns {{ content: String, date: String, slug: String, title: String }}
 */
export function postFromFile ({ filename, fileContents }) {
  const {
    content,
    data: { title }
  } = matter(fileContents)
  const date = postDate(filename)
  const slug = postSlug(filename)

  return {
    content,
    date,
    slug,
    title
  }
}
