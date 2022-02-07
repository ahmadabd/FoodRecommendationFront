import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'


type FoodType = {
    id: number,
    name: string,
    city: string,
    country: string,
}

interface FoodProps {
  foods: FoodType 
}


const Home: NextPage<FoodProps> = ({foods}) => {  
  return (
    <div className={styles.container}>
      <h2>All Foods</h2>
      <div>
        {listFoods(foods)}
      </div>
    </div>
  )
}

const listFoods = (foods: FoodType) => {
  // return foods.map((food: any) => {
    return (
      <div key={foods.id}>
        <h3 className={styles.foods}>{foods.name}</h3>
      </div>
    )
  // });
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/api/food/random')
  const data = await response.json()
 
  return {
    props: {
      foods: data
    }
  }
}

export default Home
