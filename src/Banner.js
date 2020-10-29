import React from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            Math.floor(Math.random() * request.data.results.length)
        }
        fetchData();
    }, [])

    return (
        <header className="">
            <div>

            </div>
        </header>
    )
}

export default Banner
