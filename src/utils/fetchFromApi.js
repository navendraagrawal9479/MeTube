import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY, // TO SAFELY STORE THE KEY WE DON'T WRITE IT HERE DIRECTLY 
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

//axios is like fetch but why axios is used here ?
//because axios is easy to use since while fetching any data 
//axios automatically converts it to string while in fetch we have to json.stringify.

//base_url/getvideos
export const fetchFromApi = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data //we don't have to write .stringify in axios
}