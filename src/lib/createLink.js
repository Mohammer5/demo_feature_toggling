import { parse, stringify } from 'qs'
import { features } from '../constants/features'

/**
 * @param {string} href
 * @param {string} [baseUrl]
 * Obviously we'd have to adjust this one to the dhis2 needs
 * @returns {string}
 */
export const createLink = (href, baseUrl = window.location.origin) => {
  const url = new URL(href, baseUrl)
  const search = url.searchParams
  const currenUrlSearch = Object.keys(parse(window.location.search.replace(/^\?/, '')))
  const featureParams = currenUrlSearch.filter(key => !!features[key] && !search.has(key))

  featureParams.forEach(key => search.set(key, '1'))
  return url.toString().replace(baseUrl, '')
}
