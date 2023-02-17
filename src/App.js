import './App.css'
import { useState } from 'react'
import data from '../src/components/Data/data'
import { Header, Footer, LogInForm } from './components/common'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, FoodStorage, Home, Reciepts } from './components/pages'
import SingleReciept from './components/Dishes/SingleReciept'

function App() {
  const [foodListData, setFoodListData] = useState([])
  const [isLoggedIn, setIsLoggedin] = useState(false) //this will be used for login logic?hi

  const addFoodHandler = (object) => {
    const newObject = {
      ...object,
      id: Math.floor(Math.random() * 100),
    }
    setFoodListData((data) => {
      return [...data, newObject]
    })
  }

  return (
    <Router>
      <div className="App">
        <Header />
        {isLoggedIn === false ? (
          <LogInForm setLoggedIn={setIsLoggedin} />
        ) : (
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="reciepts" element={<Reciepts reciepts={data} />} />
              <Route path="reciepts/:slug" element={<SingleReciept />} />
              <Route
                path="/foodstorage"
                element={
                  <FoodStorage
                    addFood={addFoodHandler}
                    foodList={foodListData}
                  />
                }
              />
              <Route path="about" element={<About />} />
            </Routes>
          </main>
        )}
        <Footer />
      </div>
    </Router>
  )
}

export default App

// todos:
//ABout UI
// 1.Card element
// 2.Button element
