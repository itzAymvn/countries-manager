import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Q4 = () => {
    // Tout les pays du store
    const pays = useSelector((state) => state.pays);

    // Récupérer les années indépendantes
    const indepYears = pays.map((p) => p.indepYear);

    // Récupérer les années indépendantes uniques
    const indepYearsUnique = indepYears.reduce((array, curr) => {
        if (!array.includes(curr)) {
            array.push(curr);
        }
        return array;
    }, []);

    return (
        <>
            <h3>Années d'indépendance</h3>
            <ul className="list-group">
                {indepYearsUnique.map((year, i) => {
                    return (
                        <li className="list-group-item" key={i}>
                            <Link to={`/q3/${year}`}>{year}</Link>
                            {": "}
                            {pays.filter((p) => p.indepYear === year).length}
                            {" Pays"}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Q4;
