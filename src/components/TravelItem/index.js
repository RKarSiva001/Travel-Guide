import './index.css'

const TravelItem = props => {
  const {travelData} = props
  const {id, name, imageUrl, description} = travelData

  return (
    <li>
      <img className="item-image" src={imageUrl} alt={name} />
      <div className="item-info">
        <h1 className="item-title">{name}</h1>
        <p className="author-name">{description}</p>
      </div>
    </li>
  )
}

export default TravelItem
