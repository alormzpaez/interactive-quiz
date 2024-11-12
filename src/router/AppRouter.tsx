import { Route, Routes } from 'react-router-dom'
import { ProblemPage } from '../pages/ProblemPage'
import { UnitsPage } from "../pages/UnitsPage"
import { Stats } from "../pages/Stats"
import { Provider } from "react-redux"
import { store } from "../store"
import { ProblemSolvedPage } from "../pages/ProblemSolvedPage"

export const AppRouter = () => {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<UnitsPage/>}/>
          <Route path="/problem" element={
              <ProblemPage />
              }

          />
          <Route path="/problemSolved" element={
              <ProblemSolvedPage />
              }

          />
          <Route path="/stats" element={<Stats/>} />
          
      </Routes>
    </Provider>
  )
}
