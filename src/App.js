import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    if (this.state.count <= 0) {

    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  render () {
    return (
      <div className='font-sans container mx-auto'>
      <h1 className='text-center uppercase'>Counter</h1>
        <div className='flex flex-col items-center  mt-8 h-screen'>
          <div className='flex flex-col justify-center items-center rounded overflow-hidden shadow-md h-64 w-64'>
            <h1 className='text-5xl text-center text-grey-dark'>
              {this.state.count}
            </h1>
          </div>
          <div className='w-64 mt-3'>
            <button
              className='w-1/2 bg-green hover:bg-green-dark py-2 rounded-l text-white font-bold shadow'
              onClick={this.increment}
            >
              +
            </button>
            <button
              className='w-1/2 bg-red hover:bg-red-dark py-2 rounded-r text-white font-bold shadow'
              onClick={this.decrement}
            >
              _
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
