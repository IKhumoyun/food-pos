interface IProps {
  image: string,
  price: number,
  availability: string,
  title: string,
  onClick: any,
}

const Card = ({ image, price, availability, title, onClick }: IProps) => {
  return (
    <div className="food-card" onClick={onClick}>
      <img src={image} alt={title} className="food-card-image"/>
      <h3 className="food-card-title">{title}</h3>
      <h5 className="food-card-price">$ {price}</h5>
      <p className="food-card-description">{availability}</p>
    </div>
  )
}

export default Card;