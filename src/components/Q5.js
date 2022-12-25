// React
import React, { useState } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import { ADD_COUNTRY, EDIT_POPULATION } from "../actions";

const Q5 = () => {
    // Le pays existe ou pas
    const [exists, setExists] = useState(false);

    // Le nom du pays de l'input
    const [paysName, setPaysName] = useState("");

    // Tout les pays du store
    const pays = useSelector((state) => state.pays);
    const dispatch = useDispatch();

    // Fonction de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Creer un objet FormData à partir du formulaire
        const formDatas = new FormData(e.target);

        // Vérifier si le pays existe
        if (exists) {
            // Récupérer la population de l'input
            const population = Number(formDatas.get("population"));

            // Constuire l'objet des données à modifier

            const data = {
                name: paysName,
                population,
            };
            // Modifier la population
            dispatch(EDIT_POPULATION(data));

            // Réinitialiser le formulaire
            e.target.reset();

            // Si le pays n'existe pas
        } else {
            // Récupérer les données du formulaire, et les convertir en nombre si nécessaire
            const surface = Number(formDatas.get("surface"));
            const population = Number(formDatas.get("population"));
            const indepYear = Number(formDatas.get("indepYear"));
            const image = formDatas.get("image");

            // Constuire l'objet des données à ajouter
            const data = {
                name: paysName,
                surface,
                population,
                indepYear,
                image,
            };

            // Ajouter un pays
            dispatch(ADD_COUNTRY(data));

            // Réinitialiser le formulaire
            e.target.reset();
        }
    };
    return (
        <div className="d-flex justify-content-center flex-column">
            <h1 className="text-center">Ajout & modification</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form
                        className="form-group"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}>
                        <label htmlFor="name">Nom du pays:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            onChange={(e) => {
                                setPaysName(e.target.value);
                                setExists(
                                    pays.find((p) => p.name === e.target.value)
                                );
                            }}
                        />
                        {
                            // Si le pays existe, on affiche un form pour modifier la population
                            exists ? (
                                <>
                                    <label htmlFor="population">
                                        Population:
                                    </label>
                                    <input
                                        type="number"
                                        name="population"
                                        placeholder={
                                            "Population actuelle: " +
                                            pays.find(
                                                (p) => p.name === paysName
                                            ).population
                                        }
                                        id="population"
                                        className="form-control"
                                    />
                                </>
                            ) : (
                                // Sinon on affiche un form pour ajouter un pays
                                <>
                                    <label htmlFor="surface">Superficie:</label>
                                    <input
                                        type="number"
                                        name="surface"
                                        id="surface"
                                        className="form-control"
                                    />
                                    <label htmlFor="population">
                                        Population:
                                    </label>
                                    <input
                                        type="number"
                                        name="population"
                                        id="population"
                                        className="form-control"
                                    />
                                    <label htmlFor="indepYear">
                                        Année d'indépendance:
                                    </label>
                                    <input
                                        type="number"
                                        name="indepYear"
                                        id="indepYear"
                                        className="form-control"
                                    />
                                    <label htmlFor="image">Image:</label>
                                    <input
                                        type="text"
                                        name="image"
                                        id="image"
                                        className="form-control"
                                    />
                                </>
                            )
                        }
                        <button
                            className="btn btn-primary mt-3"
                            type="submit"
                            value="Submit">
                            {exists ? "Modifier" : "Ajouter"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Q5;
