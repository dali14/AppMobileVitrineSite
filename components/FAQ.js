import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Vous voulez demander quelque\n  chose De Foot Plus?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="C'est Quoi Foot plus ?"
            content="C'est une plateforme qui Regroupe Plusieur Application Mobile et Web"
            status={false}
          />
          <AccordionItem
            title="Quelle sont les fonctionnalités de Cette plateforme"
            content="- Ce une Outil de Gestion Et de Reservation Terrain Foot ball."
                     
          />
          <AccordionItem
            title="Comment Ajouter mon terrain sur cette plateforme ?"
            content="Après avoir inscrit sur notre plateforme 
            choisissez le forfait qui Convient
            à vos besoins et apres le payment vous pouvez ajouter Votre terrain et binificier les aventages de cette application ."
            status={false}
          />
          <AccordionItem
            title="Comment réserve un terrain ?"
            content="Après avoir télécharge notre application mobile foot plus disponible sur (android & IOS ) ,
             vous pouvez trouver touts les terrains sur la page accueil sinon ouvrir la map intégré dans notre application pour avoire les terrains approximative à votre localisation."
            status={false}
          />
          <AccordionItem
            title="Comment avoir payée mon reservations ?"
            content="Le seul mode paiement en ligne est par carte bancaire pour avoir confirmation instantané de votre réservation ,
             Sinon vous pouvez passer une reservation sans payement mais tu dois attendre la confirmation de cette réservation dela par de propriétaire terrain"
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
