import React from 'react';
import { ProjectList } from '../data/project_list.data'

const Project = () => {
  return (
    <section className="section">
      <h2 className="section__subject">
        Project.
      </h2>
      <p className="section__desc">
        다양한 형태의 웹사이트와 모바일 웹, 반응형 웹 그리고 웹 접근성 프로젝트까지 풍부한 개발 경험을 가지고 있습니다.
      </p>
      <div className="project">
        {ProjectList.map((item, i) => (
          <dl className="project__list" key={i}>
            <dt className="project__title">{item.title}</dt>
            <dd className="project__period">{item.period}</dd>
            <dd className="project__position">{item.position}</dd>
            <dd className="project__desc">{item.desc}</dd>
            <dd className="project__tech">{item.tech}</dd>
          </dl>
        ))}

      </div>
    </section>
  );
};

export default Project;
