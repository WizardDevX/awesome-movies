import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const fetchMovies = async (req: NextApiRequest, res: NextApiResponse) => {
    
    const { movie } = req.query;

    const { data } = await axios.get(
        `http://www.omdbapi.com/?s=${movie}&apikey=${process.env.API_KEY}`
    );

    console.log(data)

    if (!data.Search) return res.status(400).json(null)

    return res.status(200).json(data.Search)

} 

export default fetchMovies;