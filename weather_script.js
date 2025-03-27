async function obtenerCoordenadas(ciudad, pais, limit = 1) {
    /**
     * Obtiene las coordenadas (lat, lon) de la ciudad y el país especificados.
     * Retorna { lat, lon, error }.
     */
    const apiKey = "57b3568af1629faa8bbccf524dd95026";
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=${limit}&appid=${apiKey}`;
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error en la respuesta de la API");
        const datos = await respuesta.json();
        if (datos.length > 0) {
            return { lat: datos[0].lat, lon: datos[0].lon, error: null };
        } else {
            return { lat: null, lon: null, error: "No se encontraron coordenadas para la ubicación especificada." };
        }
    } catch (error) {
        return { lat: null, lon: null, error: `Error al obtener coordenadas: ${error.message}` };
    }
}

async function obtenerClima(lat, lon) {
    /**
     * Obtiene la información del clima a partir de latitud y longitud.
     * Retorna { datosClima, error }.
     */
    const apiKey = "57b3568af1629faa8bbccf524dd95026";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error en la respuesta de la API");
        const datosClima = await respuesta.json();
        return { datosClima, error: null };
    } catch (error) {
        return { datosClima: null, error: `Error al obtener clima: ${error.message}` };
    }
}

async function obtenerInformacionClimatica(ciudad, pais, limit = 1) {
    /**
     * Integra la obtención de coordenadas y clima en una sola llamada.
     * Retorna { datosClima, error }.
     */
    const { lat, lon, error: errorCoord } = await obtenerCoordenadas(ciudad, pais, limit);
    if (errorCoord) return { datosClima: null, error: errorCoord };
    if (lat === null || lon === null) return { datosClima: null, error: "No se pudo obtener la información de coordenadas." };

    const { datosClima, error: errorClima } = await obtenerClima(lat, lon);
    if (errorClima) return { datosClima: null, error: errorClima };
    if (!datosClima) return { datosClima: null, error: "No se pudo obtener la información del clima." };

    return { datosClima, error: null };
}

async function mostrarVentanaClima(ciudad, pais) {
    /**
     * Muestra una ventana emergente con los datos del clima o el error correspondiente.
     * Muestra ciudad, país, estado, descripción y temperatura en °C y °F.
     */
    const { datosClima, error } = await obtenerInformacionClimatica(ciudad, pais);
    if (error) {
        alert(`Error: ${error}`);
    } else {
        const weatherData = datosClima.weather?.[0] || {};
        const estado = weatherData.main || "Desconocido";
        const descripcion = weatherData.description || "Sin descripción";

        const mainData = datosClima.main || {};
        const tempKelvin = mainData.temp || 0;
        const tempCelsius = tempKelvin - 273.15;
        const tempFahrenheit = (tempKelvin - 273.15) * 9 / 5 + 32;

        const mensaje = `
            Clima en ${ciudad}, ${pais}
            Estado: ${estado}
            Descripción: ${descripcion}
            Temperatura: ${tempCelsius.toFixed(1)}°C / ${tempFahrenheit.toFixed(1)}°F
        `;
        alert(mensaje);
    }
}

// Ejecución principal
(async () => {
    await mostrarVentanaClima("Madrid", "ES");
})();
