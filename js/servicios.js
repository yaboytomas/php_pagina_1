// Función para cargar los servicios desde la API
function cargarServicios() {
    const container = document.getElementById('servicios-container');
    
    // Usamos nuestra API local para obtener los servicios
    fetch('/pruebaWeb1/servicios', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ciisa'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar los servicios');
        }
        return response.json();
    })
    .then(servicios => {
        // Limpiamos el contenedor
        container.innerHTML = '';
        
        // Configuramos el contenedor
        container.removeAttribute('style');
        container.className = 'servicios-container';
        
        // Limitamos a los primeros 4 servicios
        const serviciosAMostrar = servicios.slice(0, 4);
        
        // Creamos los elementos HTML para cada servicio
        serviciosAMostrar.forEach(servicio => {
            const servicioElement = document.createElement('div');
            servicioElement.className = 'servicio-card';
            
            servicioElement.innerHTML = `
                <h3>${servicio.nombre}</h3>
                <p>${servicio.descripcion}</p>
                <a href="#" class="btn-small">Ver más</a>
            `;
            
            container.appendChild(servicioElement);
        });
    })
    .catch(error => {
        container.innerHTML = `
            <div class="error-message">
                <p>Error al cargar los servicios: ${error.message}</p>
                <p>Por favor, intente nuevamente más tarde.</p>
            </div>
        `;
        console.error('Error:', error);
    });
}

// Cargar los servicios cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarServicios); 