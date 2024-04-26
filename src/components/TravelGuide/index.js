import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TravelItem from '../TravelItem'

import './index.css'

class TravelGuide extends Component {
  state = {isLoading: true, travelData: []}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const statusCode = await response.statusCode

    const data = await response.json()
    console.log(data)
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({travelData: formattedData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state
    // console.log(isLoading)

    return (
      <div className="blog-list-container">
        <h1>Travel Guide</h1>
        <ul>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            travelData.map(item => (
              <TravelItem travelData={item} key={item.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default TravelGuide
