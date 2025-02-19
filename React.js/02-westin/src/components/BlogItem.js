import React from 'react';

const BlogItem = (props) => {
  return (
    <div className="blog-item">
      <div className="image-blog">
        <img src={props.resim} alt="/" />
      </div>
      <div className="blog-box">
        <div className="blog-time">{props.tarih}</div>
        <h5 className="Blog-title mb-0">
          <a href="#">{props.baslik}</a>
        </h5>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">
              <i className="fas fa-user-alt base-color"></i>
              <span>{props.isim}</span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <i className="fas fa-comment base-color"></i>
              <span>{props.yorum}</span>
            </a>
          </li>
        </ul>
        <p className="mb-0">{props.mesaj}</p>
        <div className="blog-link">
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
