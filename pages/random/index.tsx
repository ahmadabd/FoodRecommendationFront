import { NextPage } from "next";
import styles from "../../styles/Random.module.css";

type FoodType = {
    id: number,
    name: string,
    city: string,
    country: string,
    vegetarian: string
}

interface FoodProps {
  food: FoodType
}

const Random: NextPage<FoodProps> = ({food}) => {
    return (
        <>
            <h2>Random Food</h2>
            <div className={styles.container}>
                <h3>Name:</h3>
                <p>{food.name}</p>
                <h3>City:</h3>
                <p>{food.city}</p>
                <h3>Country:</h3>
                <p>{food.country}</p>
                <h3>Vegetarian:</h3>
                <p>{food.vegetarian}</p>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/api/food/random');
    const data = await response.json();

    return {
        props: {
            food: data
        }
    }
}

export default Random;