import React from 'react'
import about from "../assets/img/about.jpg"

const introTExt={
  title:"김찬희 웹,앱퍼블리셔",
  desc:["talent is","found at the end of the","effort"]
};

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className='intro_title'>{introTExt.title}</h1>

        <div className="intro_lines" aria-hidden='true'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>

        <div className="intro_text">
            <div className="text">
                <div>{introTExt.desc[0]}</div>
                <div>{introTExt.desc[1]}</div>
                <div>{introTExt.desc[2]}</div>
            </div>
            <div className="img">
                <img src="https://github.com/kkghkh123/pro_img_1/blob/main/img/about.jpg?raw=true" alt="아빠코트수" />
            </div>
        </div>

        <div className="intro_lines bottom" aria-hidden='true'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>

      </div>
    </section>
  )
}

export default Intro
