import "./about.css"

const About = () => {
    return <section id="about">
            <h2 className="section-title en">About This Site</h2>
            <h2 className="section-title traditional" style={{display: "none"}}>關於這個網站</h2>
            <h2 className="section-title jp" style={{display: "none"}}>このサイトについて</h2>
            <div className="about-content en">
                <p>This site is a personal project to showcase various cake designs, focusing on warm tones, soft visuals, and handmade charm.</p>
                <p>It is not a commercial page but a visual gallery built with HTML, CSS, and JavaScript.</p>
            </div>
            <div className="about-content traditional" style={{display: "none"}}>
                <p>本網站作為一個甜點作品展示平台，呈現各式蛋糕類型，設計上注重溫暖配色與柔和排版，希望營造出舒適的瀏覽體驗。</p>
            </div>
            <div className="about-content jp" style={{display: "none"}}>
                <p>このサイトは、さまざまな手作りケーキのデザインを紹介するために制作された個人プロジェクトです。</p>
                <p>暖かみのある色合い、やわらかな雰囲気、手作りならではの魅力を大切にしています。</p>
            </div>
        </section>
}

export default About;