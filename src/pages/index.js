import React from "react"
import Layout from "../components/Layout"
import '../styles/global.css'

export default function Home() {
  return (
    <Layout>
    <div>
      <h2>Hello 👋</h2>
      <p>My name is Andy Samberg, and I am an actor. I hope you enjoy the presentation.</p>
      <img style={{opacity:0.2, height:600, position:'absolute', top:300, left:250, zIndex:-1}} src='https://media.giphy.com/media/fC8WwblBRqqoE/giphy.gif'/>
    </div>
    </Layout>
  )
}
