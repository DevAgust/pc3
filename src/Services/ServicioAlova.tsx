import React, { useState, useEffect } from 'react';
import adapterFetch from 'alova/fetch';
import { createAlova } from 'alova';

export const ServicioAlova = () => {

  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  
  const alovaInstance = createAlova({
    requestAdapter: adapterFetch(),
  });

  useEffect(() => {
    alovaInstance
      .Get('https://jsonplaceholder.typicode.com/users')
      .then((response: any) => response.json())
      .then((data: any) => {
        setDatos(data);
        console.log(data); 
      })
      .catch((err) => {
        setError(err); 
        console.error(err);
      });
  }, []);

  const handlePost = () => {
    alovaInstance
      .Post('https://api.jsonbin.io/v3/qs/673cfb18acd3cb34a8ab4fcc', {
        title: 'Nuevo Título',
        body: 'Este es el cuerpo de la solicitud',
        userId: 123,
      })
      .then((response: any) => response.json())
      .then((data: any) => {
        console.log('Respuesta POST:', data);
      })
      .catch((err) => {
        setError(err); 
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Esto es el servicio de proveedores con Alova</h1>
    </div>
  );
};
