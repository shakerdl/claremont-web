import React from 'react'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import styled from 'styled-components'
import './Home.css';
import cover from '../../images/test-cafe.png'
import { sayHeyDude, saySomethingElse } from '../../actions/fooActions'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`

class Home extends React.Component {
  static loadData({ dispatch }) {
    return dispatch(sayHeyDude())
  }

  componentDidMount() {
    if (!this.props.foo) {
      this.props.sayHeyDude()
    }
  }

  sayHeyDude = () => {
    this.props.sayHeyDude()
  }

  saySomethingElse = () => {
    this.props.saySomethingElse()
  }

  render() {
    const { foo } = this.props
    return (
      <div className="Home">
        <Helmet>
          <title>Tal.com | Home</title>
        </Helmet>

        {!foo && 'Loading....'}

        {foo}
        <div className="container">
        
        </div>
        <Button onClick={this.sayHeyDude}>Say 'Hey Dude'</Button>
        <Button onClick={this.saySomethingElse}>Say 'Something Else'</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foo: state.foo.value
  }
}

export default connect(
  mapStateToProps,
  { sayHeyDude, saySomethingElse }
)(Home)





/*  example
  <div div className = "g-container" >
    <div className="grid grid-md-4 grid-xs-12">1</div>
    <div className="grid grid-md-4 grid-xs-12">2</div>
    <div className="grid grid-md-4 grid-xs-12">3</div>
  </div> */