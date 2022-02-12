import { NextPage } from "next";
import { FoodType } from "..";
import styles from "../../styles/Random.module.css";

interface FoodProps {
    food: FoodType;
}

const Random: NextPage<FoodProps> = ({ food }) => {
    return (
        <>
            <h2>Random Food</h2>
            <div className={styles.container}>
                <h3>Name:</h3>
                <p>{food?.name}</p>
                <h3>City:</h3>
                <p>{food?.city}</p>
                <h3>Country:</h3>
                <p>{food?.country}</p>
                <h3>Vegetarian:</h3>
                <p>{food?.vegetarian}</p>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    let data: FoodType | null = null;

    try {
        const response = await fetch("http://localhost:5000/api/food/random");
        data = await response.json();
    } catch (error) {}

    return {
        props: {
            food: data,
        },
    };
};

export default Random;
