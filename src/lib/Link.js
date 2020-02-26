import React from 'react'
import { Link as RRDLink } from 'react-router-dom'
import { createLink } from './createLink'

export const Link = props => (
  <RRDLink
    {...props}
    to={createLink(props.to)}
  />
)

Link.propTypes = RRDLink.propTypes
