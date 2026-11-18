import React from 'react'
import reactCSS from 'reactcss'
import * as checkboard from '../../helpers/checkboard'

export const Checkboard = ({ white = 'transparent', grey = 'rgba(0,0,0,.08)', size = 8,
  renderers = {}, borderRadius, boxShadow }) => {
  const styles = reactCSS({
    'default': {
      grid: {
        borderRadius,
        boxShadow,
        absolute: '0px 0px 0px 0px',
        background: `url(${ checkboard.get(white, grey, size, renderers.canvas) }) center left`,
      },
    },
  })

  return (
    <div style={ styles.grid } />
  )
}

export default Checkboard
