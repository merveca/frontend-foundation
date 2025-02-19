import React from 'react';
import SectionTitle from "./SectionTitle";
import TestimonalItem from "./TestimonalItem";

const Testimonal = () => {
  return (
    <section id="testimonial" className="testimonial-02 py-6 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle baslik="Testimonial" aciklama="What people say" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel">
              <TestimonalItem
                resim="assets/img/man.png"
                mesaj="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready."
                isim="John Doe"
                unvan="Seo Manager"
              />
              <TestimonalItem
                resim="assets/img/woman-avator.png"
                mesaj="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready."
                isim=">Merry Doe"
                unvan="Seo Manager"
              />

              <TestimonalItem
                resim="assets/img/woman.png"
                mesaj="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready."
                isim="Sarah Doe"
                unvan="Seo Manager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
