import React from 'react'
import { isFeatureActive } from '../lib/isFeatureActive'

export const PageThree = () => {
  return (
    <div>
      <h1>Page Three</h1>
      <p>This page has the BAR_FEATURE and BAZ_FEATURE</p>

      {isFeatureActive('BAR_FEATURE') && <div>
        <h2>Feature BAR</h2>
        <p>You should only see this text if the "BAR_FEATURE" toggle is on</p>
      </div>}

      {isFeatureActive('BAZ_FEATURE') && <div>
        <h2>Feature BAZ</h2>
        <p>You should only see this text if the "BAZ_FEATURE" toggle is on</p>
      </div>}
    </div>
  )
}
