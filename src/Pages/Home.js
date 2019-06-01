import React, {Component} from 'react'
import Container from '@material-ui/core/Container'

import Newsgrid from '../components/Newsgrid'
import Loading from '../components/Loading'

class Home extends Component {
  constructor (props){
    super(props)
    this.state = {
      news: [], 
      isloading: true
    }
  }

  async componentDidMount(){
    try {
      const response = await fetch('https://api.canillitapp.com/latest/2019-06-01');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();  
      this.setState({
        news: data,
        isloading: false
      });
    } catch (error) {
      console.log(error);
    } 
  }

  render() {
    console.log(this.state.news)
    return (
      <React.Fragment >
      {this.state.isloading && <Loading /> }
      <Container>
      {!this.state.isloading && <Newsgrid /> }
      </Container>
      </React.Fragment>
    )

  }
  
}

export default Home

// Preguntar cuando y como se utiliza el constructor. Es para mandar props del padre al hijo?