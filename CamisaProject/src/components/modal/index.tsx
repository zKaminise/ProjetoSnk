import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { Camisa } from "../../interface/camisaData";

interface Categoria {
  id: number;
  nome: string;
}

interface Props {
  opened: boolean;
  closeModal: () => void;
  addCamisa: (camisa: Camisa) => void;
}

function MModal({ opened, closeModal, addCamisa }: Props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categoriaId, setCategoriaId] = useState<number | undefined>(undefined);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const response = await axios.get(import.meta.env.VITE_API_URL + "/categoria");
      setCategorias(response.data);
    };
    fetchCategorias();
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const camisa = {
      title,
      price: parseFloat(price),
      image,
      categoria_id: categoriaId,
    };

    const res = await axios.post(import.meta.env.VITE_API_URL + "/camisa", camisa);
    if(res.status === 200) {
      addCamisa((camisa as unknown) as Camisa);
    }
    closeModal();
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
              <Image src={image} style={{ maxWidth: "17rem", minWidth: "17rem", maxHeight: "20rem", minHeight: "20rem" }} />
            </Row>

            <Row>
              <Form.Label htmlFor="inputImage">Link da imagem</Form.Label>
              <Form.Control
                type="text"
                id="image"
                aria-describedby="imageHelp"
                onChange={(event) => setImage(event.target.value)}
              />
              <Form.Text id="imageHelp" muted>
                Insira o Link da Imagem da Camiseta*
              </Form.Text>
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
              <Form.Label htmlFor="inputCategoria">Categoria</Form.Label>
              <Form.Select
                id="categoria"
                aria-describedby="categoriaHelp"
                onChange={(event) => setCategoriaId(Number(event.target.value))}
              >
                <option value="">Selecione uma Categoria</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </Form.Select>
              <Form.Text id="categoriaHelp" muted>
                Selecione a categoria da camisa*
              </Form.Text>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default MModal;
