import Courses from './Courses'
import Specializations from './Specializations'
import Stats from './Stats'
import Tasks from './Tasks'

const Biscotti = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
      <Stats />
      <Tasks />
      <Specializations />
      <Courses />
    </div>
  )
}

export default Biscotti
