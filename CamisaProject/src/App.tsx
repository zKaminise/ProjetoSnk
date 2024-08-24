import { useState, useEffect } from "react";
import { getCamisas } from "./hooks/camisaData";
import { Card } from "./components/card/card";
import { Camisa } from "./interface/camisaData";
import "bootstrap/dist/css/bootstrap.min.css";
import MModal from "./components/modal";
import { Button } from "react-bootstrap";
function App() {
  const [props, setProps] = useState<Camisa[]>([]);
  const [show, setOpened] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCamisas();
      setProps(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <MModal opened={show} closeModal={() => setOpened(false)} addCamisa={(novo) => setProps(props.push(novo) ? props : props)}/>
      <div className="row">
        <h1 className="col-6">Camisas de Time</h1>
        <div className=" col-md-3 offset-md-3">
          {/* <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Anunciar Camisa</button> */}
          <Button variant="primary" onClick={() => setOpened(true)}>
            Anunciar Camisa
          </Button>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          {props?.map((camisaData: Camisa) => (
            <Card
              key={camisaData.id}
              price={camisaData.price}
              title={camisaData.title}
              image={camisaData.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
