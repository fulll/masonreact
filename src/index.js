import React from 'react'
import Masonry from 'masonry-layout'

class Masonreact extends React.Component {

  componentDidMount = () => {

    let cols = this.props.cols

    var msnry = new Masonry('.grid', {
      percentPosition: true,
      isAnimated: false
    })

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
