// Función para cargar la información de "Nosotros" desde la API
function cargarNosotros() {
    const container = document.getElementById('nosotros-container');
    
    // Usamos nuestra API local para obtener la información
    fetch('/pruebaWeb1/nosotros', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ciisa'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar la información');
        }
        return response.json();
    })
    .then(nosotros => {
        // Limpiamos el contenedor
        container.innerHTML = '';
        
        // Creamos el elemento HTML para la misión
        const misionElement = document.createElement('div');
        misionElement.className = 'nosotros-item';
        misionElement.innerHTML = `
            <h3>Misión</h3>
            <p>${nosotros.mision}</p>
        `;
        container.appendChild(misionElement);
        
        // Creamos el elemento HTML para la visión
        const visionElement = document.createElement('div');
        visionElement.className = 'nosotros-item';
        visionElement.innerHTML = `
            <h3>Visión</h3>
            <p>${nosotros.vision}</p>
        `;
        container.appendChild(visionElement);
        
        // Creamos el elemento HTML para los valores
        const valoresElement = document.createElement('div');
        valoresElement.className = 'nosotros-item';
        
        // Creamos la lista de valores
        let valoresHTML = '<h3>Valores</h3><ul class="valores-lista">';
        nosotros.valores.forEach(valor => {
            valoresHTML += `<li>${valor}</li>`;
        });
        valoresHTML += '</ul>';
        
        valoresElement.innerHTML = valoresHTML;
        container.appendChild(valoresElement);
    })
    .catch(error => {
        container.innerHTML = `
            <div class="error-message">
                <p>Error al cargar la información: ${error.message}</p>
                <p>Por favor, intente nuevamente más tarde.</p>
            </div>
        `;
        console.error('Error:', error);
    });
}

// Cargar la información cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarNosotros); 