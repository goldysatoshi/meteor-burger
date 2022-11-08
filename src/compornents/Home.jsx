import React from 'react';
// import Hamburger from './images/hamburger.jpg'
// import Meteorburger from './images/meteorburger.jpg'
// import Doubleburger from './images/doubleburger.jpg'
import { MenuDeta } from './MenuDeta';


const Home = () => {
  return (
    <div className="home">
      <div className="mv">
        <h3 className="cf">METEOR Burger<br/><span>-メテオな衝撃-</span></h3>
      </div>

      <div className="content">

          <div className="sub">
            <h4>-MENU-</h4>
          </div>
        <div className="list">
          {MenuDeta.map((value ,key) => {
            return(
            <div className="list-item" key={key}>
            <img src={value.picture} alt={value.name} />
            <p className="list-name">{value.name}</p>
            <p className="listdet">{value.material}</p>
            </div>
              )
          })}
            {/* <div className="list-item">
              <img src={Hamburger} alt="ハンバーガー" />
                <p className="list-name">ハンバーガー</p>
                <p className="listdet">パテ/トマト/レタス</p>
            </div>
            <div className="list-item">
              <img src={Meteorburger} alt="メテオバーガー" />
                <p className="list-name">メテオバーガー</p>
                <p className="listdet">パテ/トマト/レタス</p>
            </div>
            <div className="list-item">
              <img src={Doubleburger} alt="ダブルバーガー" />
                <p className="list-name">ダブルバーガー</p>
                <p className="listdet">パテ/トマト/レタス/ベーコン/チーズ</p>
            </div> */}
        </div>



      </div>



    </div>
  )
}

export default Home;