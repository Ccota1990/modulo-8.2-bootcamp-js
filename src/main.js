const reservas = [
    {
        id: 23453,
        precio: 250,
        habitacion: "standard",
        prepago: false,
        completadaConExito: true,
    },
    {
        id: 56456,
        precio: 150,
        habitacion: "superior",
        prepago: false,
        completadaConExito: true,
    },
    {
        id: 43243,
        precio: 550,
        habitacion: "standard",
        prepago: true,
        completadaConExito: false,
    },
    {
        id: 23223,
        precio: 550,
        habitacion: "standard",
        prepago: true,
        completadaConExito: true,
    },
    {
        id: 89232,
        precio: 650,
        habitacion: "superior",
        prepago: true,
        completadaConExito: false,
    },
   ];
   
   const estanTodasCompletadasConExito = reservas.every(
    (reserva) => reserva.completadaConExito
    );
   console.log (estanTodasCompletadasConExito);

   const reservasQueNoHanTenidoExito = reservas.filter(
    (reserva) => !reserva.completadaConExito 
    );
    console.log(reservasQueNoHanTenidoExito);

    const upgradeHabitacion = reservas.find(
    (reserva) => reserva.habitacion === "standard" 
    );
    console.log(upgradeHabitacion);

    const upgradeHabitacion1 = reservas.findIndex(
        (reserva) => reserva.habitacion === "standard" 
        );
    console.log(upgradeHabitacion1);

    const reservasOrdenadasPorPrecio = reservas.toSorted(
        (reservaA, reservaB) => reservaA.precio - reservaB.precio
    );
    console.log(reservasOrdenadasPorPrecio);

    const precioConDescuento = reservas.map((reserva) =>({
            ...reserva,
            precio: reserva.precio *0.9,
        }));

    console.log(precioConDescuento);

    const precioTotal = reservas.reduce(
        (acc, reserva) => acc + reserva.precio, 0
    );

    console.log(precioTotal);

    const haySuperior = reservas.some(
        (reserva) => reserva.habitacion === "superior"
    );

    console.log(haySuperior);

    reservas.forEach((reserva) => console.log(reserva.id));



        