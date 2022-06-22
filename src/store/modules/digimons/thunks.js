import axios from "axios";

import { addDigimon } from "./actions";

export const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.herokuapp.com/api/digimon/name/${digimon}`)
    .then((response) => dispatch(addDigimon(response.data[0].name)))
    .catch((error) => setError(error));
};
