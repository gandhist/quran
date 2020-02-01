import axios from "axios";

export default axios.create({
    baseURL: "https://al-quran-8d642.firebaseio.com/"
})