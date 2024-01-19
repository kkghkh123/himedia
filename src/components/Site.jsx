import React from 'react'
const siteText = [
    {
        text : ["make","site compliant with","webstardard"],
        title : "웹 표준을 준수한 사이트 제작",
        site : "https://github.com/kkghkh123/himedia",
        info : ["site code","produiction period : tow days","use stack : html5/css3 javascript..."],
    },
    {
        text : ["2make","2site compliant with","2webstardard"],
        title : "웹 표준을 준수한 사이트 제작",
        site : "https://github.com/kkghkh123/himedia",
        info : ["2site code","2produiction period : tow days","2use stack : html5/css3 javascript..."],
    },
    {
        text : ["3make","3site compliant with","3webstardard"],
        title : "웹 표준을 준수한 사이트 제작",
        site : "https://github.com/kkghkh123/himedia",
        info : ["3site code","3produiction period : tow days","3use stack : html5/css3 javascript..."],
    },
    {
        text : ["4make","4site compliant with","4webstardard"],
        title : "웹 표준을 준수한 사이트 제작",
        site : "https://github.com/kkghkh123/himedia",
        info : ["4site code","4produiction period : tow days","4use stack : html5/css3 javascript..."],
    },
]

const Site = () => {
    return (
        <section id='site'>
            <div className="site_inner">
                <div className="site_title">
                    Site coding <em>작품들</em>
                </div>
                <div className="site_wrap">
                    {siteText.map((site,key)=>(
                        <article className={`site_item s${key+1}`} key={key}>
                        <span className='num'>0{key+1}.</span>
                        <div className="text">
                            <div>{site.text[0]}</div>
                            <div>{site.text[1]}</div>
                            <div>{site.text[2]}</div>
                        </div>
                        <h3 className='title'>{site.title}</h3>
                        <div className="btn">
                            <a href={site.site}>code</a>
                            <a href={site.site}>view</a>
                        </div>
                        <div className="info">
                            <span>{site.info[0]}</span>
                            <span>{site.info[1]}</span>
                            <span>{site.info[2]}</span>
                        </div>
                    </article>
                    ))}
                    

                </div>
            </div>
        </section>
    )
}

export default Site
