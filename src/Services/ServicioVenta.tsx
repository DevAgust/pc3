import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";


interface Item {
  id: number;
  nombre: string;
}


interface Venta {
  proveedor: string;
  articulo: string;
  cantidad: string;
}

const SimuladorVenta: React.FC = () => {

  const [proveedores, setProveedores] = useState<Item[]>([]);
  const [articulos, setArticulos] = useState<Item[]>([]);

  const [venta, setVenta] = useState<Venta>({
    proveedor: "",
    articulo: "",
    cantidad: "",
  });


  useEffect(() => {
    const datosProveedores: Item[] = [
      { id: 1, nombre: "Falabella" },
      { id: 2, nombre: "Ripley" },
    ];
    const datosArticulos: Item[] = [
      { id: 1, nombre: "Casaca" },
      { id: 2, nombre: "Pantalon" },
    ];

    setProveedores(datosProveedores);
    setArticulos(datosArticulos);
  }, []);


  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setVenta({ ...venta, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Venta realizada:", venta);
    alert("La venta se realizó con exito, revisar la consola");
    setVenta({ proveedor: "", articulo: "", cantidad: "" });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Venta de Ropa</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProveedor" className="mb-3">
              <Form.Label>Proveedor</Form.Label>
              <Form.Select
                name="proveedor"
                value={venta.proveedor}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un proveedor</option>
                {proveedores.map((prov) => (
                  <option key={prov.id} value={prov.nombre}>
                    {prov.nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formArticulo" className="mb-3">
              <Form.Label>Artículo</Form.Label>
              <Form.Select
                name="articulo"
                value={venta.articulo}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un artículo</option>
                {articulos.map((art) => (
                  <option key={art.id} value={art.nombre}>
                    {art.nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formCantidad" className="mb-3">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                name="cantidad"
                value={venta.cantidad}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Realizar Venta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SimuladorVenta;
