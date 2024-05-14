import React from 'react'

const ShowData = ({ category, loading, data }) => {

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!data) {
        return (
            <div>
                <p>Estos no son los droides que está buscando</p>
                <img
                    src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Obi-Wan-Kenobi-Memes.jpg"
                    alt="Error Obi-Wan"
                />
            </div>
        );
    }
    if (category === "people") {

        const { name, height, hair_color, birth_year, homeworld } = data;

        return (
            <div className='container'>
                <h2>Show Character</h2>
                <h3>{name}</h3>
                <p>Height: {height}</p>
                <p>Hair Color: {hair_color}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Homeworld: {homeworld}</p>
            </div>
        );
    } else if (category === "planets") {

        const { name, rotation_period, orbital_period, diameter, climate } = data;

        return (
            <div>
                <h2>Show Planets</h2>
                <h2>{name}</h2>
                <p>Rotation Period: {rotation_period}</p>
                <p>Orbital Period: {orbital_period}</p>
                <p>Diameter: {diameter}</p>
                <p>Climate: {climate}</p>
            </div>
        );
    } else if (category === "films") {

        const { title, episode_id, opening_crawl, director, producer, release_date } = data;

        return (
            <div>
                <h2>Show Films</h2>
                <h3>{title}</h3>
                <p>Episode: {episode_id}</p>
                <p>Opening Crawl: {opening_crawl}</p>
                <p>Director: {director}</p>
                <p>Producer: {producer}</p>
                <p>Release Date: {release_date}</p>
            </div>
        );
    } else if (category === "species") {

        const { name, classification, designation, average_height, skin_colors } = data;

        return (
            <div>
                <h2>Show Species</h2>
                <h2>{name}</h2>
                <p>Classification: {classification}</p>
                <p>Designation: {designation}</p>
                <p>Average Height: {average_height}</p>
                <p>Skin Colors: {skin_colors}</p>
            </div>
        );
    } else if (category === "vehicles") {

        const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class } = data;

        return (
            <div>
                <h2>Show Vehicles</h2>
                <h3>{name}</h3>
                <p>Model: {model}</p>
                <p>Manufacturer: {manufacturer}</p>
                <p>Cost in Credits: {cost_in_credits}</p>
                <p>Length: {length}</p>
                <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
                <p>Crew: {crew}</p>
                <p>Passengers: {passengers}</p>
                <p>Cargo Capacity: {cargo_capacity}</p>
                <p>Consumables: {consumables}</p>
                <p>Vehicle Class: {vehicle_class}</p>
            </div>
        );
    } else if (category === "starships") {

        const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables } = data;

        return (
            <div>
                <h2>Show Starships</h2>
                <h3>{name}</h3>
                <p>Model: {model}</p>
                <p>Manufacturer: {manufacturer}</p>
                <p>Cost in Credits: {cost_in_credits}</p>
                <p>Length: {length}</p>
                <p>Max Atmosphering Speed: {max_atmosphering_speed}</p>
                <p>Crew: {crew}</p>
                <p>Passengers: {passengers}</p>
                <p>Cargo Capacity: {cargo_capacity}</p>
                <p>Consumables: {consumables}</p>
            </div>
        );
    }
}

export default ShowData;