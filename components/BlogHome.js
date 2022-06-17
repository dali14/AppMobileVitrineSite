import React from "react";
import { Container, Row } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import BlogPost from "./BlogPost";

import BlogImage1 from "../assets/images/blog/blog-1-1.jpg";
import BlogImage2 from "../assets/images/blog/blog-1-2.jpg";
import BlogImage3 from "../assets/images/blog/blog-1-3.jpg";

const BlogHome = () => {
  return (
    <section className="blog-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Dernières Nouvelles "
          titleText={`Découvrez quelque Avantage \n de notre App`}
        />
        <Row>
          <BlogPost
            postImage={BlogImage1}
            postTitle="Afficher la localisation des terrains les plus proches ."
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage2}
            postTitle="Consulter Etat de Votre reservation Par app Mobile "
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
          <BlogPost
            postImage={BlogImage3}
            postTitle="Infrastructure de paiement Web et Mobile sécurisée ."
            postDate="20 Feb"
            postCommentCount="2 comments"
            postLink="/blog-post"
          />
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
