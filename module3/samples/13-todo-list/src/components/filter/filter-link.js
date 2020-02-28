'use strict'

import React from 'react'

const FilterLink = ({ action, activeFilter, children, onClick }) => {
  const span = { tag: 'span' }
  const a = { tag: 'a', href: '#', onClick }

  const component = action === activeFilter ? span : a

  return (
    <component.tag
      href={component.href}
      style={{ marginRight: 10 }}
      onClick={component.onClick}
    >
      {children}
    </component.tag>
  )
}

export default FilterLink
