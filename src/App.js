/** @format */

import "./App.css"
import styled from "styled-components"
import logo from "./images/unveiled-logo-3000x900 (1).png"
import { useState } from "react"
import axios from "axios"

const textEndpoint = "https://printer.tathata.art/prints-new/text"
const imageEndpoint = "https://printer.tathata.art/prints-new/image"

function App() {
 const [text, setText] = useState("")

 const print = () => {
  axios
   .post("https://printer.tathata.art/prints-new/text", {
    text: text,
   })
   .then((res) => setText(""))
 }

 return (
  <div className="App">
   <PageStyle>
    <div className="logo-wrapper">
     <img className="logo" alt="logo" src={logo}></img>
    </div>
    <p className="title">언베일드 공식 프린터</p>
    <p className="description">(이 프린터는 무료로 해줍니다 🤑)</p>
    <textarea
     className="text-input"
     datatype="text"
     value={text}
     onChange={(e) => {
      setText(e.target.value)
     }}
     onKeyDown={() => {
      if (window.event.keyCode === 13) {
       print()
      }
     }}
    ></textarea>
    <p></p>
   </PageStyle>
  </div>
 )
}

const PageStyle = styled.div`
 width: 100%;
 height: 100%;
 color: white;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 .logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .logo {
  width: 30%;
  height: auto;
  margin: 1rem;
 }
 .title {
  font-size: 3rem;
  font-family: "Black Han Sans", sans-serif;
 }
 .description {
  font-family: "Black Han Sans", sans-serif;
  font-size: 1.3rem;
  margin-bottom: 4rem;
 }
 .text-input {
  margin: 0.5rem;
  height: 20rem;
  width: 20rem;
  resize: none;
  outline: none;
  padding: 0.2rem;
 }
 ::-webkit-input-placeholder {
  text-align: center;
 }
 :-moz-placeholder {
  text-align: center;
 }
 ::-moz-placeholder {
  text-align: center;
 }
 :-ms-input-placeholder {
  text-align: center;
 }
`

export default App
