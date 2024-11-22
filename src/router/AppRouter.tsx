import { Route, Routes } from 'react-router-dom'
import { ProblemPage } from '../pages/ProblemPage'
import { UnitsPage } from "../pages/UnitsPage"
import { Stats } from "../pages/Stats"
import { ProblemSolvedPage } from "../pages/ProblemSolvedPage"
import { OwnersPage } from '../pages/OwnersPage'
import { LoginPage } from '../pages/LoginPage'
import { useUser } from '../hooks/useUser'
import { RegisterPage } from '../pages/RegisterPage'

export const AppRouter = () => {
  const {user} = useUser()

  return (
    
      <Routes>
        {
          (user && (user.id !== null)) ?
          <>
            <Route path="/" element={<UnitsPage/>}/>
            <Route path="/owners" element={<OwnersPage/>}/>
            <Route path="/problem" element={
                <ProblemPage />
                }

            />
            <Route path="/problemSolved" element={
                <ProblemSolvedPage />
                }

            />
            <Route path="/stats" element={<Stats/>} />
          </>
          :

          (
            <>
              <Route path='/' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </>
          )
        }
          
      </Routes>
    
  )
}
