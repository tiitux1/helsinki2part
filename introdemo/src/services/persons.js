import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

// Hakee kaikki henkilöt palvelimelta
const getAll = () => {
  return axios.get(baseUrl).then(response => response.data);
};

// Lisää uusi henkilö palvelimelle
const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(response => response.data);
};

// Poistaa henkilön palvelimelta
const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

// Päivittää henkilön numeron palvelimella
const update = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson).then(response => response.data);
};

// Exportataan funktiot käytettäväksi muualla
export default { getAll, create, remove, update };
