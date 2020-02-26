import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'

import { features } from '../constants/features'
import { isFeatureActive } from '../lib/isFeatureActive'

const featureKeys = Object.keys(features)

/**
 * This page is merely for settings/removing
 * feature flag. No need to read through this one
 */
export const Home = () => {
  const location = useLocation()
  const [activeFeatures, setActiveFeatures] =
    useState(featureKeys.filter(key => isFeatureActive(key)))

  const onChange = e => {
    const feature = e.target.name
    const checked = e.target.checked

    if (checked && !activeFeatures.includes(feature)) {
      setActiveFeatures([ ...activeFeatures, feature ])
    }

    if (!checked && activeFeatures.includes(feature)) {
      const index = activeFeatures.indexOf(feature)

      if (index === 0) {
        setActiveFeatures(activeFeatures.slice(1))
      } else {
        setActiveFeatures([
          ...activeFeatures.slice(0, index),
          ...activeFeatures.slice(index + 1),
        ])
      }
    }
  }

  const onSubmit = () => {
    const url = new URL(window.location.origin)
    const search = new URLSearchParams()

    activeFeatures.forEach(feature => search.set(feature, '1'))
    url.searchParams = search

    window.location.assign(url)
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label>
          FOO_FEATURE:{' '}
          <input
            name="FOO_FEATURE"
            type="checkbox"
            onChange={onChange}
            checked={activeFeatures.includes('FOO_FEATURE')}
          />
        </label>
      </p>
      <p>
        <label>
          BAR_FEATURE:{' '}
          <input
            name="BAR_FEATURE"
            type="checkbox"
            onChange={onChange}
            checked={activeFeatures.includes('BAR_FEATURE')}
          />
        </label>
      </p>
      <p>
        <label>
          BAZ_FEATURE:{' '}
          <input
            name="BAZ_FEATURE"
            type="checkbox"
            onChange={onChange}
            checked={activeFeatures.includes('BAZ_FEATURE')}
          />
        </label>
      </p>
      <p>
        <label>
          FOOBAR_FEATURE:{' '}
          <input
            name="FOOBAR_FEATURE"
            type="checkbox"
            onChange={onChange}
            checked={activeFeatures.includes('FOOBAR_FEATURE')}
          />
        </label>
      </p>
      <p>
        <button type="submit">Set features</button>
      </p>
    </form>
  )
}
