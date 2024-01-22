import React, { useEffect } from 'react'
import port01 from "../assets/img/port01.jpg"
import port02 from "../assets/img/port02.jpg"
import port03 from "../assets/img/port03.jpg"
import port04 from "../assets/img/port01.jpg"
import port05 from "../assets/img/port02.jpg"
import port06 from "../assets/img/port03.jpg"
import { ScrollTrigger } from 'gsap/all'

const portText=[
    {
        num:"01",
        title:"Team Ace 팀프로젝트",
        site:"http://jok874.dothome.co.kr/main/",
        img:port01,
        desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플로그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨로시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
        alt:"팀A포폴",
    },
    {
        num:"02",
        title:"Team Hwasung 팀프로젝트",
        site:"http://kimmina.dothome.co.kr/hwasung/",
        img:port02,
        desc:"MZ세대를 저격한 온라인 전자상으로 다양한 제품을 한 곳에서 볼수 있도록 디자인하였으며, 팀원들의 이모지를 만들어서 좀 더 다양한 컨텐츠를 보여주는 센스를 발휘했으며, 팀원 각각의 실력을 보여 줄수 있는 서브 페이지도 제작한 팀프로젝트였습니다.",
        alt:"팀B포폴",
    },
    {
        num:"03",
        title:"Team C 팀프로젝트",
        site:"http://dongbinhosting.dothome.co.kr/team/",
        img:port03,
        desc:"요즘 웹페이지의 트렌드인 움직임을 매우 잘 표현한 작품으로 각 팀원들의 한 명, 한 명이 그 트렌드를 표현하기 위해 많은 노력을 보여주는 작품이며, 요즘 트렌드에 맞는 색감을 활용했습니다.",
        alt:"팀C포폴",
    },
    {
        num:"04",
        title:"Team Ace 팀프로젝트",
        site:"http://jok874.dothome.co.kr/main/",
        img:port01,
        desc:"고난과 역경이 가득한 프로젝트로 팀장을 갈아서 눈물나게 만든 작품이며, 플로그인보다는 직접 프로그램을 작성하여서 이벤트를 만드는것을 중점으로 하였으며, OTT사이트를 참고하여 디벨로시킨 작품입니다. 팀장이 다해서 팀장이 설명해야 되는 프로젝트인건가요? 모델 이동욱이 촬영에 임해주셔서 좋은 작품으로 탄생시켰습니다.",
        alt:"팀A포폴",
    },
    {
        num:"05",
        title:"Team Hwasung 팀프로젝트",
        site:"http://kimmina.dothome.co.kr/hwasung/",
        img:port02,
        desc:"MZ세대를 저격한 온라인 전자상으로 다양한 제품을 한 곳에서 볼수 있도록 디자인하였으며, 팀원들의 이모지를 만들어서 좀 더 다양한 컨텐츠를 보여주는 센스를 발휘했으며, 팀원 각각의 실력을 보여 줄수 있는 서브 페이지도 제작한 팀프로젝트였습니다.",
        alt:"팀B포폴",
    },
    {
        num:"06",
        title:"Team C 팀프로젝트",
        site:"http://dongbinhosting.dothome.co.kr/team/",
        img:port03,
        desc:"요즘 웹페이지의 트렌드인 움직임을 매우 잘 표현한 작품으로 각 팀원들의 한 명, 한 명이 그 트렌드를 표현하기 위해 많은 노력을 보여주는 작품이며, 요즘 트렌드에 맞는 색감을 활용했습니다.",
        alt:"팀C포폴",
    },
]

const Port = () => {

    const horizontalRef = useRef(null);
    //useRef(null) : 변수를 생성하고 초기화
    const sectionRef = useRef([]);
    //useRef([]) : 변수를 생성하고 빈 배열로 초기화

    useEffect(()=>{
        //useEffect(()=>{}) : 컴퍼넌트가 렌더링될때 어떠한 작업을 수행하도록 해야 한다면, 그것을 설정해주는 hook 명령

        gsap.registerPlugin(ScrollTrigger);
        //트리거는 어느 특정한 동작에 반응해서 자동으로 필요한 동작을 실행하는 것

        const horizontal = horizontalRef.current;
        //horizontalRef의 현재 값을 horizontal에 대입
        const section = sectionRef.current;
        //sectionRef 현재 값 배열 요소를 section 대입

        let scrollTween = gsap.to(section,{
            xPercent:-120*(section.length-1), 
            scrollTrigger:{
                trigger:horizontal,
                start:"top 56px",
                end:()=>"+="+horizontal.offsetWidth,
                pin:true,
                //활성상태에서 트리거 요소 고정
                scrub:1,
                //스크롤이 화면 움직임을 따라가는데 1초 걸림(부드럽게 따라감)
            }
        });

        return()=>{
            scrollTween.kill();
            //스크롤 애니메이션을 제거합니다. 컴포넌트가 언마운팅할때 메모리 누수를 방지해줌.
            //마운트 : 화면에 데이터가 보여지는 것을 의미 <=> 언마운트(반대) 
        }

    },[]);



  return (
    <section id="port">
    <div className="port_inner">
        <div className="port_title">
            portfolio <em>포폴 작업물</em>
        </div>
        <div className="port_wrap">
            {portText.map((port,key)=>(
                <article className={`port_item p${key + 1}`} key={key}>
                <span className="num">{port.num}</span>
                <a href={port.site} target="_blank" className="img">
                    <img src={port.img} alt={port.alt} />
                </a>
                <h3 className="title">{port.title}</h3>
                <p className="desc">
                   {port.desc}
                </p>
                <a href={port.site} target="_blank" className="site">사이트 보기</a>
            </article>
            ))}
        </div>
    </div>
</section>
  )
}

export default Port
