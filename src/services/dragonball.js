
import axios from 'axios'

// Creamos una "instancia" de axios con la URL base de la API.
// Así no tenemos que escribir la URL completa cada vez.
const api = axios.create({
  baseURL: 'https://dragonball-api.com/api',
})

// Trae TODOS los personajes (son 58).
// Pedimos limit=100 para que la API nos los devuelva todos de una sola vez,
// y así podemos buscar/filtrar cómodamente en el navegador.
export async function getCharacters() {
  const { data } = await api.get('/characters', { params: { limit: 100 } })
  // La API responde un objeto { items: [...], meta: {...} }.
  // A nosotros solo nos interesa la lista "items".
  return data.items
}