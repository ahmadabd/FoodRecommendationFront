import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

export type FoodType = {
    id: number;
    name: string;
    city: string;
    country: string;
    vegetarian: string;
};

interface FoodProps {
    foods: FoodType[] | [];
}

const Home: NextPage<FoodProps> = ({ foods = [] }) => {
    return (
        <>
            <h2>All Foods</h2>
            <div>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>Name</th>
                        <th className={styles.th}>City</th>
                        <th className={styles.th}>Country</th>
                        <th className={styles.th}>Vegeterian</th>
                    </tr>
                    {listFoods(foods)}
                </table>
            </div>
        </>
    );
};

const listFoods = (foods: FoodType[]) => {
    return foods.map((food: FoodType) => {
        return (
            <tr key={food.id}>
                <td className={styles.td}>{food.name}</td>
                <td className={styles.td}>{food.city}</td>
                <td className={styles.td}>{food.country}</td>
                <td className={styles.td}>{food.vegetarian}</td>
            </tr>
        );
    });
};

export const getStaticProps = async () => {
    let data: FoodType[] = [];

    try {
        const response = await fetch("http://localhost:5000/api/food/all");
        data = await response.json();
    } catch (error) {}

    return {
        props: {
            foods: data,
        },
    };
};

export default Home;
