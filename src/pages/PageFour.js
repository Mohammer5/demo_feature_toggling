import React from 'react'
import { isFeatureActive } from '../lib/isFeatureActive'

export const PageFour = () => {
  return (
    <div>
      <h1>Page Four</h1>
      <p>This page has the FOOBAR_FEATURE and BAR_FEATURE</p>

      {isFeatureActive('FOOBAR_FEATURE') && <div>
        <h2>Feature FOOBAR</h2>
        <p>You should only see this text if the "FOOBAR_FEATURE" toggle is on</p>
      </div>}

      {isFeatureActive('BAR_FEATURE') && <div>
        <h2>Feature BAR</h2>
        <p>You should only see this text if the "BAR_FEATURE" toggle is on</p>
      </div>}
    </div>
  )
}
