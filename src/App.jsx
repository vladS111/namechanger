import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <FlexCenter>
            <div>
              <Routes />
            </div>
          </FlexCenter>
        </Container>
        <ToastContainer autoClose={2500} />
      </Fragment>
    );
  }
}

export default App;


const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;
`

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`