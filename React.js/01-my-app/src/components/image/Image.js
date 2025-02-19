import React from 'react';
import image2 from "../../assets/img/image2.jpg";

const Image = () => {
  console.log(require("../../assets/img/image3.jpg"));

  return (
    <div>
      <div>
        <h3>Statik yöntem</h3>
        <img src="assets/img/image1.jpg" />
      </div>

      <div>
        <h3>Import yöntemi</h3>
        <img src={image2} />
      </div>

      <div>
        <h3>Require Yöntemi</h3>
        <img src={require("../../assets/img/image3.jpg").default} />
      </div>
    </div>
  );
};

export default Image;
