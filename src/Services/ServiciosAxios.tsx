import React, { useEffect } from 'react';
import axios from 'axios';

const ServiciosAxios = () => {
  useEffect(() => {

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Esto es el servicio de proveedores con Axios</h1>
    </div>
  );
};

export default ServiciosAxios;
