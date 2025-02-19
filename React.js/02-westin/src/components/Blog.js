import React from 'react';
import BlogItem from "./BlogItem";
import SectionTitle from "./SectionTitle";

const Blog = () => {
  return (
    <section id="blog" className="blog blog-02 py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle baslik="Blog" aciklama="Latest News" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-4">
            <BlogItem
              resim="assets/img/blog-img-01.png"
              tarih="22th may"
              baslik="Write Your Dreams"
              isim="Jone Doe"
              yorum="5"
              mesaj="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <BlogItem
              resim="assets/img/blog-img-02.png"
              tarih="12th june"
              baslik="Enjoy Your Happy Life"
              isim="Jone Doe"
              yorum="2"
              mesaj="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <BlogItem
              resim="assets/img/blog-img-03.png"
              tarih="25th Nov"
              baslik="Beautiful Life"
              isim="Jone Doe"
              yorum="2"
              mesaj="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
