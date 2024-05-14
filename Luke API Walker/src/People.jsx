import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShowData from './componentes/ShowData';

const People = () => {
    const { id } = useParams();
    const [dataState, setDataState] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            console.log(id);
            try {
                setLoading(true);
                const res = await axios.get(`https://swapi.dev/api/people/${id}`);
                console.log(res);
                const homeworldRes = await axios.get(res.data.homeworld);
                setDataState({ ...res.data, homeworld: homeworldRes.data.name });
            } catch (err) {
                setDataState(null);
                console.log(err.message);
            } finally {
                setLoading(false);
                console.log(dataState);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className={styles.container}>
            <ShowData category="people" loading={loading} data={dataState} />
        </div>
    )
}

export default People