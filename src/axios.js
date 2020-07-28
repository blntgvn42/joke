import Axios from "axios";

export default Axios.create({
    baseURL: "https://sv443.net/jokeapi/v2/joke/Any"
});