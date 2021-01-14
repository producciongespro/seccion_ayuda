

const tarjeta = (titulo) => {
    return (
        '<div class="card">' +
        '<div class="card-header">' +
        titulo +
        '</div>' +
        '<div class="card-body">' +
        '<h5 class="card-title">Special title treatment</h5>' +
        '<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>' +
        '<a href="#" class="btn btn-primary">Go somewhere</a>' +
        '</div>' +
        '</div>'
    );
}


const alerta1 = (titulo) => {
    return (
        '<div class="alert alert-success">' +
            '<h4 class="alert-heading">  '+ titulo +'  </h4>' +
            '<p>    </p>' +
            '<hr>' +
            '<p class="mb-0">  </p>' +
        '</div>'
    )
}