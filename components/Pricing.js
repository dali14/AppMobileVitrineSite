import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Nos Offres"
          titleText={`Choisissez les forfaits qui Convient \n à vos besoins`}
        />
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan === false ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(false);
              }}
            >
              Mensuel
            </a>
          </li>
          <li>
            <label
              onClick={(e) => {
                e.preventDefault();
                setPlan(!plan);
              }}
              className={`switch ${plan === true ? "off" : "on"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
          <li className={`year ${plan === true ? "active" : ""}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPlan(true);
              }}
            >
              Annuel
            </a>
          </li>
        </ul>
        {plan === true ? (
          <div id="yearly">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Pack</p>
                    <h3>$59.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Dashboard (P) </li>
                      <li>Gestion Reservations</li>
                      <li>Gestion Competition</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$79.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Dashboard (P) X 1</li>
                      <li>Accès total</li>
                      <li>Gestion Reservations</li>
                      <li>Gestion Competition</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choisir un Forfait</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$99.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Dashboard (P) X 4</li>
                      <li>Assistance gratuite à vie</li>
                      <li>Gestion Reservations</li>
                      <li>Gestion Competition</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choisir un forfait</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle">
                  </div>
                  <div className="pricing-one__inner">
                    <p>Free Pack</p>
                    <h3>$00.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>1 Mois gratuit</li>
                      <li>Dashboard (P) </li>
                      <li>Gestion Reservations</li>
                      <li>Gestion Competition</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choisir un forfait</span>
                    </a>

                    <span>Pas de frais cachés!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$30.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Dashboard (P) X 1</li>
                      <li>Accès total</li>
                      <li>Gestion Reservations</li>
                      <li>Gestion Competition</li>
                      
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choisir un forfait</span>
                    </a>

                    <span>Pas de frais cachés!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$40.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Dashboard (P) X 4</li>
                      <li>Assistance gratuite à vie</li>
                      <li>Gestion Reservations</li>
                      <li>Gestion Competition</li>
                      
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choisir un forfait</span>
                    </a>

                    <span>Pas de frais cachés!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
