import React, {Component} from 'react'
import Container from '@material-ui/core/Container'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import Newsgrid from '../components/Newsgrid'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import Destacadas from '../components/Destacadas'

dayjs.locale('es')

const date = dayjs()
const dateFormatted = date.format('YYYY[-]MM[-]DD')
const API_URL = `https://api.canillitapp.com/latest/${dateFormatted}`

console.log('API_URL', API_URL)

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
      const response = await fetch(API_URL);
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
        {!this.state.isloading && <Newsgrid news={this.state.news} /> }
        </Container>
        <Footer />
      </React.Fragment>
    )

  }
  
}

export default Home

// Preguntar cuando y como se utiliza el constructor. Es para mandar props del padre al hijo?