import { features } from '../constants/features'

export const isFeatureActive = feature => {
  if (!features[feature]) throw new Error(`The feature '${feature}' does not exist`)
  
  const searchParams = new URLSearchParams(window.location.search)

  return searchParams.has(feature)
}
