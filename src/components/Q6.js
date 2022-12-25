// React
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Q6 = () => {
    // Tout les pays du store
    const pays = useSelector((state) => state.pays);

    // Continent
    const continents = pays.map((p) => p.continent);

    // Continent unique
    const continentsUnique = continents.reduce((array, curr) => {
        if (!array.includes(curr)) {
            array.push(curr);
        }
        return array;
    }, []);

    const [population, setPopulation] = useState(1000000);
    const [continent, setContinent] = useState("all");
    const [paysFiltres, setPaysFiltres] = useState([]);

    useEffect(() => {
        setPaysFiltres(
            pays.filter((p) => {
                return (
                    p.population >= population &&
                    (continent === "all" || p.continent === continent)
                );
            })
        );
    }, [population, continent, pays]);
    return (
        <>
            <div className="row d-flex justify-content-center w-100">
                <div className="col-md-6">
                    <h3>Filtrer les pays</h3>
                    <div className="form-group">
                        <label htmlFor="population">Population</label>
                        <input
                            type="number"
                            name="population"
                            id="population"
                            placeholder="Population minimum"
                            className="form-control"
                            value={population}
                            onChange={(e) => {
                                setPopulation(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="continent">Continent</label>
                        <select
                            defaultValue="all"
                            name="continent"
                            className="form-control"
                            onChange={(e) => {
                                setContinent(e.target.value);
                            }}>
                            <option value="all">Tous les continents</option>
                            {continentsUnique.map((c, i) => {
                                return (
                                    <option key={i} value={c}>
                                        {c}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <label className="text-center">
                        {paysFiltres.length} pays
                    </label>
                    <table className="table border table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Nom</th>
                                <th>Superficie</th>
                                <th>Continent</th>
                                <th>Population</th>
                                <th>Capitale</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paysFiltres.length > 0 ? (
                                paysFiltres.map((p, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                <img
                                                    src={p.image}
                                                    alt={p.name}
                                                    width="50"
                                                />
                                            </td>
                                            <td>{p.name}</td>
                                            <td>{p.surface}</td>
                                            <td>{p.continent}</td>
                                            <td>
                                                {p.population > 1_000_000
                                                    ? (
                                                          p.population /
                                                          1_000_000
                                                      ).toFixed(2) + "M"
                                                    : p.population > 1_000
                                                    ? (
                                                          p.population / 1_000
                                                      ).toFixed(2) + "k"
                                                    : p.population}
                                            </td>
                                            <td>
                                                {
                                                    p.cities.find(
                                                        (c) => c.capitale
                                                    ).name
                                                }
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        Aucun pays ne correspond à votre
                                        recherche
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Q6;
