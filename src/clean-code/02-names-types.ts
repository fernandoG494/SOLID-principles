(() => {
  // arreglo de temperaturas celsius
  const celsiusTemperatures = [33.6, 12.34];

  // Dirección ip del servidor
  const serverIp = '123.123.123.123';

  // Listado de usuarios
  const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  // Listado de emails de los usuarios
  const emails = users.map( user => user.email );

  // Variables booleanas de un video juego
  const isJumping = false;
  const isRunning = true;
  const haveItems = true;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const startDate = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endDate = new Date().getTime() - startDate;

  // Funciones
  // Obtiene los libros
  function getBooks() {
    throw new Error('Function not implemented.');
  }

  // obtiene libros desde un URL
  function getBooksFromUrl( url: string) {
    throw new Error('Function not implemented.');
  }
  
  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea( side: number ) {
    throw new Error('Function not implemented.');
  }

  // imprime el trabajo
  function printJob() {
    throw new Error('Function not implemented.');
  }
})();
