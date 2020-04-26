const POST_DATE_REGEX = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

/**
 * @param {String} filename. Expected filename pattern such as 2020-01-01-name-of-post.md
 * @returns {String}
 */
export const postSlug = (filename) => {
  return `${filename.replace('.md', '')}`
}

/**
 * @param {String} filename. Expected filename pattern such as 2020-01-01-name-of-post.md
 * @returns {String}
 */
export const postDate = (filename) => {
  const { year, month, day } = filename.match(POST_DATE_REGEX).groups
  const date = new Date(`${year}/${month}/${day}`)

  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: '2-digit' })
}

/**
 * Returns the markdown filename given a post slug
 * @param {String} slug. Format: '2020-01-01-name-of-post'
 * @return {String}
 */
export const filenameFromSlug = (slug) => {
  return `${slug}.md`
}
