import introVideo from "../../../../assets/video/video.mp4";
import cover from "../../../../assets/image/cover.jpg";
import "./introduction.css"

const Introduction = () => {
    return <section id="introduction">
            <div className="language-switch" id="langSwitcher">
                <button className="lang-toggle" title="language"></button>
                <div className="lang-options" id="langOptions">
                    <button className="btn-en active">EN</button>
                    <button className="btn-traditional">繁體</button>
                    <button className="btn-jp">日本語</button>
                </div>
            </div>
            <h2 className="section-title en">Introduction</h2>
            <h2 className="section-title traditional" style={{display: "none"}}>介紹</h2>
            <h2 className="section-title jp" style={{display: "none"}}>サイト紹介</h2>
            <div className="intro-container">
                <div className="video-container">
                    <video id="intro-video" width="300" muted poster={cover}>
                        <source src={introVideo} type="video/mp4" />
                        Your browser doesn't support HTML video.
                    </video>                    
                    <div className="video-controls">
                        <button id="playPauseBtn" title="Play"><i className="fas fa-play"></i></button>
                        <button id="expandVideoBtn" title="Enter Fullscreen"><i className="fas fa-expand"></i></button>
                        <button id="muteBtn" title="Mute"><i className="fas fa-volume-mute"></i></button>
                        <div id="volumeControl">
                            {/* <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="1" /> */}
                          </div>
                        {/* <input type="range" id="progressBar" value="0" min="0" max="100" /> */}
                        <button id="replayBtn" title="Replay"><i className="fas fa-rotate-left"></i></button>                        
                        <button id="closeFullscreenBtn" title="Close"><i className="fas fa-times"></i></button>
                    </div>
                </div>
                <div className="intro-text">
                    <div className="intro-content en">
                        <h2>Welcome to the Cake Gallery</h2>
                        <p>This site is all about sharing handmade cakes, each crafted with care.</p>
                        <p>From the choice of ingredients to the final decorations, every cake reflects a deep love for baking.</p>
                        <p>Whether you're here for inspiration or simply to browse, I hope this brings a little sweetness to your day.</p>
                        <p>Take your time and enjoy the charm of these delightful creations!</p>
                    </div>
                    <div className="intro-content traditional" style={{display: "none"}}>
                        <h2>歡迎來到蛋糕作品展示網站</h2>
                        <p>這裡有滿滿用心製作的手工蛋糕，等你來發掘！</p>
                        <p>從材料選擇到裝飾，每一個細節都充滿對烘焙的熱情。</p>
                        <p>無論是簡單溫馨的款式，還是華麗精緻的風格，都希望帶給你愉快的瀏覽體驗。</p>
                        <p>請慢慢欣賞這些細緻又美味的蛋糕！</p>
                      </div>
                    <div className="intro-content jp" style={{display: "none"}}>
                        <h2>ケーキと過ごすひととき</h2>
                        <p>このサイトでは、心を込めて作られた手作りケーキをご紹介しています。</p>
                        <p>素材選びから飾り付けまで、お菓子作りへの想いがつまっています。</p>
                        <p>眺めるだけでも癒される、そんなひとときをお届けできれば嬉しいです。</p>
                        <p>美味しくてかわいいケーキをぜひご覧ください！ </p>
                    </div>
                </div>
            </div>
        </section>
}

export default Introduction;