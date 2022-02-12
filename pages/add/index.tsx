import { useState } from "react";
import styles from "../../styles/Add.module.css";

const Add = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [vegetarian, setVegetarian] = useState("");

    const storeData = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        const res = await fetch("http://localhost:5000/api/food", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                city,
                country,
                vegetarian,
            }),
        });
    };

    return (
        <>
            <h2>Add new food</h2>
            <div className={styles.container}>
                <form>
                    <div className={styles.inputDiv}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor="city">City:</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor="country">Country:</label>
                        <input
                            id="country"
                            type="text"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label htmlFor="vegeterian">Vegeterian:</label>
                        <select
                            id="vegeterian"
                            name="vegeterian"
                            value={vegetarian}
                            onChange={(e) => setVegetarian(e.target.value)}
                        >
                            <option value="vegetarian" selected>
                                vegetarian
                            </option>
                            <option value="non-vegetarian">
                                non-vegetarian
                            </option>
                        </select>
                    </div>
                    <div className={styles.inputDiv}>
                        <button onClick={storeData}>Save</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Add;
