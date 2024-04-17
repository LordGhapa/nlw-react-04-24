import AttendeeList from './components/attendee-list'
import Header from './components/header'

export function App() {
  return (
    <div className=" gap-5 max-w-[1216px] flex mx-auto py-5 flex-col ">
      <Header />
      <AttendeeList />
    </div>
  )
}
