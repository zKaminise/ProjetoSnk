import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  price: number,
  title: string,
  image: string
}

export function Card({price, image, title} : Props) {
  return(
      <div className="card col-6" style={{width: "20rem"}} >
        <img src={image} className="card-img-top" style={{ maxWidth: "17rem", minWidth: "17rem", maxHeight: "20rem", minHeight: "20rem", padding: "5px 0px 5px 20px" }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Preco: {price},00</p>
        </div>
      </div>
  )
}