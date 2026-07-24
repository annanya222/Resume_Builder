import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import ResumeBuilder from './Pages/ResumeBuilder'
import Preview from './Pages/Preview'
import Login from './Pages/Login'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token') // if a person was already logged in and refreshes the page, then we can get the token from local storage and verify it with the backend to get the user data. This way, we can keep the user logged in even after refreshing the page.
    try {
      if(token)
      {
        const {data} = await api.get('/api/users/data', {headers:
          {Authorization:token}}) // verifying the token from the backend and getting the user data. If the token is valid, then we get the user data. 

          if(data.user){
            dispatch(login({token, user: data.user}))
          }
          dispatch(setLoading(false))
      }
      else{
          dispatch(setLoading(false))
      }
    } catch (error) {
        dispatch(setLoading(false))
        console.log(error.message)
    }
  }

  useEffect(()=>{
    getUserData() // called only once or runs only once in order to call the function, [] this shows only once when the component is mount and if we don't use this then it will run infinite times and we don't want that.
  },[])

  return (
   <>
   <Toaster/>
   
   <Routes>
     <Route path='/' element={<Home/>} />
   <Route path='/login' element={<Login/>} />
     <Route path='app' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
     </Route>

     <Route path='view/:resumeId' element={<Preview/>} />
    

    </Routes>
    </>
  )
}

export default App
