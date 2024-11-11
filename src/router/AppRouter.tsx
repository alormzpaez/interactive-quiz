import img from "../assets/img/R.jpeg"
import { Route, Routes } from 'react-router-dom'
import { ProblemPage } from '../pages/ProblemPage'
import { UnitsPage } from "../pages/UnitsPage"
import { Stats } from "../pages/Stats"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<UnitsPage/>}/>
        <Route path="/problem" element={
            <ProblemPage 
            QuestionNumber={1} time='01:30' URL={img}
            Answers={[
                { text: "Opción A", isCorrect: false },
                { text: "Opción B", isCorrect: true },
                { text: "Opción C", isCorrect: false },
                { text: "Opción D", isCorrect: false },
            ]} />
            }

        />
        <Route path="/stats" element={<Stats/>} />
        
    </Routes>
  )
}
