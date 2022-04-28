import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="header__wrap">
          <h1 className="header__title">경력기술서</h1>
          <span className="header__desc">
            안녕하세요 웹 프론트엔드 개발자 최송희입니다
          </span>
        </div>
        <div className="header__link-area">
          <a className="header__link" href="https://ssonghee.notion.site/Resume-1fcef75465e7468187b5b18d8ba1bfdb" target="_blank">Resume</a>
          <a className="header__link" href="https://songhee-portfolio.netlify.app" target="_blank">Portfolio</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
