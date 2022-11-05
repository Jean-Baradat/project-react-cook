import React, { useEffect, useState } from "react";
import Header from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import axios from "axios";
import Card from "./../components/Card";

const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            )
            .then((response) => {
                setData(response.data.meals);
            });
    }, [search]);

    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <main>
                {data ? (
                    data.map((dish) => {
                        return <Card dish={dish} key={dish.idMeal} />;
                    })
                ) : (
                    <div className="nothing-found">Aucun résultat trouvé !</div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Home;
