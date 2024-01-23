import React, { useEffect, useRef } from 'react'
import port01 from '../assets/img/port01.jpg'
import port02 from '../assets/img/port02.jpg'
import port03 from '../assets/img/port03.jpg'
import port04 from '../assets/img/port01.jpg'
import port05 from '../assets/img/port02.jpg'
import port06 from '../assets/img/port03.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const portText=[
  {
    num:"01",
    title:"Team Ace 팀프로젝트",
    site: "http://jok874.dothome.co.kr/main/",
    img:port01,
    desc:"고난과 역경이 가득한 프로젝트로 팀장님을 갈아서 완성된 눈물없인 볼 수 없는 포폴이며, 플러그인보다는 직접 스크립트를 작성하여 이벤트를 만든는 것을 중점으로 하였고, otp 사이트를 참고하여 디벨롭 시킨 작품입니다.팀장이 다해서 설명해야 되는 프로젝트인건가요? 모델 동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생할 수 있었습니다.",
    alt:"TeamACE 팀프로젝트"
  },
  {
    num:"02",
    title:"화성 팀프로젝트",
    site: "http://kimmina.dothome.co.kr/hwasung/",
    img:port02,
    desc:" MZ세대를 저격한 온라인 전자샵으로 다양한 제품을 한곳에서 볼 수 있도록 디자인 하였으며, 팀원들의 이모지를 만들어서 좀더 다양한 컨텐츠를 보여주는 센스를 보여주었습니다. 팀원 한명한명의 실력을 보여줄 수 있는 서브페이지를 제작한 팀프로젝트였습니다.",
    alt:"화성 팀프로젝트"
  },
  {
    num:"03",
    title:"팀씨 포트폴리오",
    site: "http://dongbinhosting.dothome.co.kr/team/",
    img:port03,
    desc:"요즘 웹페이지의 트렌드인 움직임을 매우 잘 활용하였으며, 각 팀원들의 한명한명이 그 트랜드를 하기 위해 매우 많은 노력을 보여주는 작품이며, 요즘 트랜드에 맞게 색상을 활용하였습니다. 팀워크가 유달리 나빠서 각 팀원이 힘들었던 수가 열정페이로 일했던 포트폴리오입니다.",
    alt:"팀씨 포트폴리오"
  },
  {
    num:"04",
    title:"Team Ace 팀프로젝트",
    site: "http://jok874.dothome.co.kr/main/",
    img:port01,
    desc:"고난과 역경이 가득한 프로젝트로 팀장님을 갈아서 완성된 눈물없인 볼 수 없는 포폴이며, 플러그인보다는 직접 스크립트를 작성하여 이벤트를 만든는 것을 중점으로 하였고, otp 사이트를 참고하여 디벨롭 시킨 작품입니다.팀장이 다해서 설명해야 되는 프로젝트인건가요? 모델 동욱님이 촬영에 임해주셔서 좋은 작품으로 탄생할 수 있었습니다.",
    alt:"TeamACE 팀프로젝트"
  },
  {
    num:"05",
    title:"화성 팀프로젝트",
    site: "http://kimmina.dothome.co.kr/hwasung/",
    img:port02,
    desc:" MZ세대를 저격한 온라인 전자샵으로 다양한 제품을 한곳에서 볼 수 있도록 디자인 하였으며, 팀원들의 이모지를 만들어서 좀더 다양한 컨텐츠를 보여주는 센스를 보여주었습니다. 팀원 한명한명의 실력을 보여줄 수 있는 서브페이지를 제작한 팀프로젝트였습니다.",
    alt:"화성 팀프로젝트"
  },
  {
    num:"06",
    title:"팀씨 포트폴리오",
    site: "http://dongbinhosting.dothome.co.kr/team/",
    img:port03,
    desc:"요즘 웹페이지의 트렌드인 움직임을 매우 잘 활용하였으며, 각 팀원들의 한명한명이 그 트랜드를 하기 위해 매우 많은 노력을 보여주는 작품이며, 요즘 트랜드에 맞게 색상을 활용하였습니다. 팀워크가 유달리 나빠서 각 팀원이 힘들었던 수가 열정페이로 일했던 포트폴리오입니다.",
    alt:"팀씨 포트폴리오"
  },
]

const Port = () => {
const horizontalRef = useRef(null);
//useRef(null) : 변수를 생성하고 초기화..
const sectionRef = useRef([]);
//useRef([]) : 변수를 생성하고 빈배열로 초기화...

useEffect(()=>{
  //useEffect(()=>{},[]) : 컴포넌트가 랜더링될때 어떠한 작업을 수행하도록 해야한다면, 그것을 설정해주는 hook명령

  gsap.registerPlugin(ScrollTrigger);
  //트리거는 ㄴ어느 특정한 동작에 반응해서 자동으로 필요한 동작을 실행하는것을 말한다.
  //ScrollTrigger 플러그인을 등록함.

  const horizontal = horizontalRef.current;
  //horizontalRef의 현재값을 horizontal에 대입
  const section = sectionRef.current;
  //sectionRef 현재값 배열요소를 sections 대입

  let scrollTween = gsap.to(section,{
    xPercent:-120*(section.length-1),
    scrollTrigger:{
      trigger:horizontal,
      start:"top 56px",
      end:()=>"+="+horizontal.offsetWidth,
      pin:true,
      //활성상태에서 트리거 요소 고정
      scrub:1,
      //스크롤이 화면움직임을 따라가는데 1초 걸림

    }
  });

  return()=>{
    scrollTween.kill();
    //스크롤 애니메이션을 제거합니다. 컴포넌트가 언마운팅할때 메모리 누수를 방지해줌.
    //마운트 : 화면에 데이터가 보여지는 것을 의미함.
  }
  //section,{},[] : 렌더링완료 후 한번 실행.

},[]);


  return (
    <section id="port" ref={horizontalRef}>
    <div className="port_inner">
        <div className="port_title">
            portfolio <em>포폴 작업물</em>
        </div>
        <div className="port_wrap">
           {portText.map((port,key)=>(
              <article className={`port_item p${key + 1}`} kek={key}
                ref={(el)=>(sectionRef.current[key] = el)}
              >
              <span className="num">{port.num}</span>
              <a href={port.site} target="_blank" className="img">
                  <img src={port.img} alt={port.alt} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">
                  {port.desc}
              </p>
              <a href={port.site} target="_blank" className="site" rel='noopener noreferre'>사이트보기</a>
              {/* noopener noreferre  블랭크는 보안에 취약하기때문에 같이 사용해주는것이 좋음 */}
          </article>
           ))}

        </div>
    </div>
</section>
  )
}

export default Port