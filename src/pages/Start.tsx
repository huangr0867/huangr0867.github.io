import Introduction from '../components/startPage/Introduction'
import PersonalProjects from '../components/startPage/PersonalProjects'
import '../styles/start.css'
import { useTheme } from '../components/ThemeContext'


function Start() {
  const { theme, } = useTheme();

  return (
    <div className={`container ${theme}`}>
        <div className="column">
          <Introduction></Introduction>
          <PersonalProjects></PersonalProjects>
        </div>
    </div>
  )
}

export default Start