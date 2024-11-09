import Problems from './views/problems'
import './App.css'
import img from "./assets/img/R.jpeg"
function App() {
  const answers = [
    { text: "Opción A", isCorrect: false },
    { text: "Opción B", isCorrect: true },
    { text: "Opción C", isCorrect: false },
    { text: "Opción D", isCorrect: false },
  ];

  return (
    <>
      <Problems QuestionNumber={1} time='01:30' URL={img} Answers={answers}></Problems>
    </>
  )
}

export default App
