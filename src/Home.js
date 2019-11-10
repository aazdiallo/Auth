import React from 'react'
import app from './Fbase'

export default function Home() {
  return (
    <>
      <h3>Welcome to the Home page</h3>
      <button onClick={()=> app.auth().signOut()} >sign Out</button>
    </>
  )
}
