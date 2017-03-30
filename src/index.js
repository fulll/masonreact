import React from 'react'
import Masonry from 'masonry-layout'

class Masonreact extends React.Component {

  deferred = () => setTimeout(() => this.msnry.layout(), 0)

  componentDidMount = () => {

    this.msnry = new Masonry('.grid', {
      percentPosition: true,
      transitionDuration: this.props.transitionDuration
    })

    window.addEventListener('masonreact', this.deferred)

  }

  componentWillUnmount = () => {
    window.removeEventListener('masonreact', this.deferred)
  }

  render = () => {

    const cols = this.props.cols
    const margin = this.props.margin

    const style = {
      item: {
        boxSizing: 'border-box',
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

Masonreact.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.shape({}),
  cols: React.PropTypes.oneOf([React.PropTypes.number, React.PropTypes.string]),
  margin: React.PropTypes.oneOf([React.PropTypes.number, React.PropTypes.string]),
  transitionDuration: React.PropTypes.oneOf([React.PropTypes.number, React.PropTypes.string]),
}

Masonreact.defaultProps = {
  style: undefined,
  cols: 1,
  margin: 5,
  transitionDuration: 0
}

export default Masonreact

let event = document.createEvent('Event')
event.initEvent('masonreact', true, false)

export const masonrefresh = () => window.dispatchEvent(event)
