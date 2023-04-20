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
 const [imageRender, setImageRender] = useState(null)
 const [image, setImage] = useState(null)

 const print = () => {
  // console.log(text)
  axios
   .post(textEndpoint, {
    text: text,
   })
   .then((res) => {
    setText("")
    setImageRender(null)
    setImage(null)
   })
 }

 const imgPrint = () => {
  const formData = new FormData()
  formData.append("image", image)
  axios
   .post(imageEndpoint, formData, {
    headers: {
     "Content-Type": "multipart/form-data",
    },
   })
   .then((res) => {
    setText("")
    setImageRender(null)
    setImage(null)
   })
 }

 return (
  <div className="App">
   <PageStyle>
    <div className="logo-wrapper">
     <img className="logo" alt="logo" src={logo}></img>
    </div>
    <p className="title">언베일드 공식 프린터</p>
    <p className="description">(이 프린터는 무료로 해줍니다 🤑)</p>
    <div className="text-print-section">
     {/* <div className="text-subtitle">텍스트 출력</div> */}
     <textarea
      className="text-input"
      datatype="text"
      value={text}
      onChange={(e) => {
       setText(e.target.value)
      }}
      placeholder="please speak english please~"
     ></textarea>
     <div className="button-wrapper">
      <button onClick={() => print()}>인쇄</button>
     </div>
    </div>
    {/* <div className="image-print-section">
     <div className="image-subtitle">이미지 출력</div>
     <input
      className="image-input"
      type="file"
      accept=".jpg, .png"
      onChange={(e) => {
       if (e.target.files[0]) {
        const imgSrc = new FileReader()
        imgSrc.readAsDataURL(e.target.files[0])
        imgSrc.onloadend = () => {
         setImageRender(imgSrc.result)
        }
        setImage(e.target.files[0])
       } else {
        setImageRender(null)
       }
      }}
     ></input>
    </div> */}
    {/* <div className="image-render">
     {imageRender ? <img className="selected-image" alt="현재 선택된 이미지" src={imageRender}></img> : <div className="selected-image"></div>}
     <div>
      <button onClick={(e) => imgPrint()}>이미지 출력하기</button>
     </div>
    </div> */}
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
  /* height: 20rem; */
  width: 20rem;
  height: 30rem;
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
 .image-print-section,
 .text-print-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  button {
   height: 2rem;
   width: 3rem;
   margin-bottom: 0.5rem;
  }
 }
 .button-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
 }
 .image-subtitle,
 .text-subtitle {
  font-family: "Black Han Sans", sans-serif;
  font-size: 1.5rem;
  margin-right: 0.5rem;
 }
 .selected-image {
  /* position: absolute;
  right: -6rem;
  top: 50%; */
  margin-top: 1rem;
  max-height: 11rem;
 }
 .image-render {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 }
`

export default App
