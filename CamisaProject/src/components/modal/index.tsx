import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { Camisa } from "../../interface/camisaData";

interface Props {
  opened: boolean;
  closeModal: () => void;
  addCamisa: (camisa: Camisa) => void;
}

function MModal({ opened, closeModal, addCamisa }: Props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const camisa = {
      title,
      price,
      image,
    } ;
    const res = await axios.post(import.meta.env.VITE_API_URL + "/camisa", camisa);
    if(res.status == 200) {
      addCamisa((camisa as unknown) as Camisa);
    }
    closeModal()
  }

  return (
    <>
      <Modal show={opened} onHide={closeModal} data-bs-theme="dark">
        <Form onSubmit={(event) => submit(event)}>
          <Modal.Header closeButton>
            <Modal.Title>Criar camisa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Image src={image} style={{ maxWidth: "20rem" }} />
            </Row>

            <Row>
              <Form.Label htmlFor="inputTitle">Titulo</Form.Label>
              <Form.Control
                type="text"
                id="title"
                aria-describedby="titleHelp"
                onChange={(event) => setTitle(event.target.value)}
              />
              <Form.Text id="titleHelp" muted>
                Titulo deve ser o nome do time*
              </Form.Text>
            </Row>

            <Row>
              <Form.Label htmlFor="inputPreco">Preco</Form.Label>
              <Form.Control
                type="number"
                id="price"
                aria-describedby="priceHelp"
                onChange={(event) => setPrice(event.target.value)}
              />
              <Form.Text id="priceHelp" muted>
                Preco da camisa do time*
              </Form.Text>
            </Row>

            <Row>
              <Form.Label htmlFor="inputPassword5">Link da imagem</Form.Label>
              <Form.Control
                type="text"
                id="image"
                aria-describedby="imageHelp"
                onChange={(event) => setImage(event.target.value)}
              />
              <Form.Text id="imageHelp" muted>
                Titulo deve ser o nome do time*
              </Form.Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default MModal;
