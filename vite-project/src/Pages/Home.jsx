import React from 'react'
import SearchBar from '../Components/SearchBar'
import Categories2 from '../Components/Categories2'
import styles from './Styles/Home.module.css'
import Recommendations from '../Components/Recommendations'

const Home = () => {


  return (
    <div>
        <SearchBar />
        <Categories2/>
        <Recommendations/>
    </div>
  )
}