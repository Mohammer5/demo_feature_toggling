import React from 'react'
import { isFeatureActive } from '../lib/isFeatureActive'

export const PageTwo = () => {
  return (
    <div>
      <h1>Page Two</h1>
      <p>This page has the FOO_FEATURE, BAR_FEATURE and BAZ_FEATURE</p>

      {isFeatureActive('FOO_FEATURE') && <div>
        <h2>Feature FOO</h2>
        <p>You should only see this text if the "FOO_FEATURE" toggle is on</p>
      </div>}

      {isFeatureActive('BAR_FEATURE') && <div>
        <h2>Feature BAR</h2>
        <p>You should only see this text if the "BAR_FEATURE" toggle is on</p>
      </div>}

      {isFeatureActive('BAZ_FEATURE') && <div>
        <h2>Feature BAR</h2>
        <p>You should only see this text if the "BAR_FEATURE" toggle is on</p>
      </div>}
    </div>
  )
}
