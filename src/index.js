import React from 'react'
import Masonry from 'masonry-layout'

class Masonreact extends React.Component {

  componentDidMount = () => {

    this.msnry = new Masonry('.grid', {
      percentPosition: true,
      transitionDuration: this.props.transitionDuration || 0
    })

    window.addEventListener('masonreact', () => this.msnry.layout())

  }

  componentWillUnmount = () => {
    window.removeEventListener('masonreact', () => this.msnry.layout())
  }

  render = () => {

    const cols = this.props.cols || 1
    const margin = this.props.margin || 5

    const style = {
      item: {
        boxSizing: 'border-box',
        padding: 20,
        width: `calc(${100 / cols}% - ${2 * margin}px)`,
        margin
      },
      grid: {
        width: '100%',
        transition: 'none'
      }
    }

    return(
      <div className='grid' style={style.grid}>
        {React.Children.map(this.props.children, child =>
          child ? React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...style.item
            }
          }) : null
        )}
      </div>
    )
  }
}

export default Masonreact

let event = document.createEvent('Event')
event.initEvent('masonreact')

export const masonrefresh = () => window.dispatchEvent(event)
