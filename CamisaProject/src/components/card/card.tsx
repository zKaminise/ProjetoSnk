import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  price: number,
  title: string,
  image: string
}

export function Card({price, image, title} : Props) {
  return(
      <div className="card col-6" style={{width: "20rem"}} >
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Preco: {price},00</p>
        </div>
      </div>
  )
}