import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Team3 from './pages/Team3/src/Team3'
import screen from './assets/Influenscreen.png'
import scr from "./assets/scr.png"
import Team2 from './pages/Team2/Team2'
import Page1 from './pages/Page1/Page1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="boxbigger">
        <div className="team">
          <img className='screen' src="" alt="" />
          <h2>InfluenZilla</h2>
          <div className="Dudes">
            <div className="Dude">
              <img className='dudeimg' src="" alt="" />
              <h1>Илья</h1>
            </div>
            <div className="Dude">
              <img className='dudeimg' src="" alt="" />
              <h1>Назар</h1>
            </div>
            <div className="Dude">
              <img className='dudeimg' src="" alt="" />
              <h1>Егор</h1> 
            </div>
          </div>
          <Link className='look' to="/team1">Просмотреть</Link>
        </div>
        <div className="team">
          <img className='screen' src={scr} alt="" />
          <h2>InfluenZilla</h2>
          <div className="Dudes">
            <div className="Dude">
              <img className='dudeimg' src="" alt="" />
              <h1>Аліна</h1>
            </div>
            <div className="Dude">
              <img className='dudeimg' src="" alt="" />
              <h1>Саша</h1>
            </div>
            <div className="Dude">
              <img className='dudeimg' src="" alt="" />
              <h1>Рома</h1> 
            </div>
          </div>
          <Link className='look' to="/team2">Переглянути</Link>
        </div>
        <div className="team">
        <img className='screen' src={screen} />
          <h2>InfluenZilla</h2>
          <div className="Dudes">
            <div className="Dude">
              <img className='dudeimg' src="https://s3-alpha-sig.figma.com/img/b11f/152d/8e174dc8044dadbf854e029b6395152d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hjhcg38xcETSQmZTBNqtvTEr3aQRgPVeb0yRLngT6OYw8aiJ3faCVTMp2uNnFEKEaYzc9kBSu7g4-i~wEsWk7aUsKLgFyovV4xwbIFtiHWihKmJZ0ZXVN78oqaAuWLjY4WqRUJFwVSNzIOrF6sIZ-i0LX47QdgqBw7I3qJjfv4W14XEoAPMpo16DrFPRqqLkrx600ZKIiF-GuiVhUVjkNX~M6oB8RbrGbCOEGNMNSS6T~7EOG88qyjRriH69RMu5fX7LTQywECSc6cdRZOwKVt8bDQUMd-EYPmCVqB~E8CxKrA4SIqUjnKWJHs3KcoZcHtqIIOJ1Zh6DBxcAa1c1eA__" alt="" />
              <h2>Алексей Белый</h2>
            </div>
            <div className="Dude">
              <img className='dudeimg' src="https://s3-alpha-sig.figma.com/img/b11f/152d/8e174dc8044dadbf854e029b6395152d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hjhcg38xcETSQmZTBNqtvTEr3aQRgPVeb0yRLngT6OYw8aiJ3faCVTMp2uNnFEKEaYzc9kBSu7g4-i~wEsWk7aUsKLgFyovV4xwbIFtiHWihKmJZ0ZXVN78oqaAuWLjY4WqRUJFwVSNzIOrF6sIZ-i0LX47QdgqBw7I3qJjfv4W14XEoAPMpo16DrFPRqqLkrx600ZKIiF-GuiVhUVjkNX~M6oB8RbrGbCOEGNMNSS6T~7EOG88qyjRriH69RMu5fX7LTQywECSc6cdRZOwKVt8bDQUMd-EYPmCVqB~E8CxKrA4SIqUjnKWJHs3KcoZcHtqIIOJ1Zh6DBxcAa1c1eA__" alt="" />
              <h2>Попович Валерий</h2>
            </div>
            <div className="Dude">
              <img className='dudeimg' src="https://s3-alpha-sig.figma.com/img/b11f/152d/8e174dc8044dadbf854e029b6395152d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hjhcg38xcETSQmZTBNqtvTEr3aQRgPVeb0yRLngT6OYw8aiJ3faCVTMp2uNnFEKEaYzc9kBSu7g4-i~wEsWk7aUsKLgFyovV4xwbIFtiHWihKmJZ0ZXVN78oqaAuWLjY4WqRUJFwVSNzIOrF6sIZ-i0LX47QdgqBw7I3qJjfv4W14XEoAPMpo16DrFPRqqLkrx600ZKIiF-GuiVhUVjkNX~M6oB8RbrGbCOEGNMNSS6T~7EOG88qyjRriH69RMu5fX7LTQywECSc6cdRZOwKVt8bDQUMd-EYPmCVqB~E8CxKrA4SIqUjnKWJHs3KcoZcHtqIIOJ1Zh6DBxcAa1c1eA__" alt="" />
              <h3>Александр Черноморец</h3> 
            </div>
          </div>
          <Link className='look' to="/team3">Просмотреть</Link>
        </div>
      </div>
      <Routes>
        <Route path='/team1' element={<Page1></Page1>}></Route>
        <Route path='/team2' element={<Team2></Team2>}></Route>
        <Route path='/team3' element={<Team3></Team3>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
