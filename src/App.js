import './App.css'
import { useContext, useState } from 'react'
import data from '../src/components/Data/data'
import { Header, Footer, StarterPage } from './components/common'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, FoodStorage, Home, Reciepts } from './components/pages'
import SingleReciept from './components/Dishes/SingleReciept'
import AuthContext from './components/context/auth-context'

function App() {
  const [foodListData, setFoodListData] = useState([])

  const { isLoggedIn } = useContext(AuthContext)

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
        {isLoggedIn === false ? (
          <StarterPage />
        ) : (
          <>
            <Header />
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
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}

export default App

// todos:
// About functionality
// Functionality to add a reciept
//ABout UI
// 2.Button element

/*
TODOES about Functionality

I have to add context API and then may be Redux, now i only need a main State about logging in, because when i refresh my app
it logs out, for the reason of re render app component and the state goes again false  
### done))
*/
