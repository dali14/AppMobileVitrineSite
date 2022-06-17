import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" height={600} />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Meilleure application"
                titleText={`Les avantages\n d application Sur votre Projet`}
              />
             
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Automatiser vos tâches administrative
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Reste toujours connecte à votre terrain .
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Organise des compétition
                </li>
              </ul>
              <a href="#" className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
