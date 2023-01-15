import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isShow,setIsShow]=useState<boolean>(false);
  const [isNumber,setIsNumber]=useState<number>(0);
  const quizs=[
    {question:"好きな食べ物は？",answer:"まぐろ",},
    {question:"好きだった食べ物は？",answer:"とまと",},
    {question:"嫌いな食べ物は？",answer:"いか",},
    {question:"嫌いだった食べ物は？",answer:"たこ",},
    {question:"おいしいと思う食べ物は？",answer:"アボカド",},
    {question:"趣味は？",answer:"ランニング",},
  ]
  const handleClick=(e:any)=>{
    setIsShow(!isShow);
  }
  const handleChange=(e:any)=>{
    console.log(e.target.textContent);
    setIsNumber(e.target.textContent-1);
    setIsShow(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.accordion} key={quizs[isNumber].question}>
        <div className={styles.accordionTrigger} onClick={handleClick}>{quizs[isNumber].question}</div>
        <div className={styles.accordionContent}>{isShow? quizs[isNumber].answer:null}</div>
      </div>
      <div>
        <button onClick={handleChange}>1</button>
        <button onClick={handleChange}>2</button>
        <button onClick={handleChange}>3</button>
        <button onClick={handleChange}>4</button>
        <button onClick={handleChange}>5</button>
        <button onClick={handleChange}>6</button>
      </div>
    </div>
  )
}
