import React from 'react'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
    <Routes>
      <Route path='/' elements={<Home/>} />
      <Route path='/doctors' elements={<Doctors/>} />
      <Route path='/doctors/:speciality' elements={<Doctors/>} />
      <Route path='/login' elements={<Login/>} />
      <Route path='/about' elements={<About/>} />
      <Route path='/contact' elements={<Contact/>} />
      <Route path='/my-profile' elements={<MyProfile/>} />
      <Route path='/my-appointments' elements={<MyAppointments/>} />
      <Route path='/appointment/:docId' elements={<Appointment/>} />



    </Routes>
    
    </div>
  )
}

export default App