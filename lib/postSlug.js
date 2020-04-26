/**
 * @param {String} filename. Expected filename pattern such as 2020-01-01-name-of-post.md
 * @returns {String}
 */
export const postSlug = (filename) => {
  return `${filename.replace('.md', '')}`
}

/**
 * Returns the markdown filename given a post slug
 * @param {String} slug. Format: '2020-01-01-name-of-post'
 * @return {String}
 */
export const filenameFromSlug = (slug) => {
  return `${slug}.md`
}
