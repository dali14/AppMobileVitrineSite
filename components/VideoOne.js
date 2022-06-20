import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import BlockTitle from "./BlockTitle";
import videoBG from "../assets/images/resources/video-bg-1-1.jpg";
//hello
const VideoOne = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = (e) => {
    e.preventDefault();
    setOpen({
      isOpen: true,
    });
  };
  return (
    <section className="video-one">
      <div
        className="container-fluid"
        style={{ backgroundImage: `url(${videoBG})` }}
      >
        <div
          className="video-one__content wow fadeInLeft"
          data-wow-duration="1500ms"
        >
          <BlockTitle
            textAlign="left"
            paraText="Video Tutorial"
            titleText={`Regarde \n Notre vidéo \n Tutorial`}
          />
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="v6vgfkIxIEA"
          onClose={() => setOpen({ isOpen: false })}
        />
        <a href="#" onClick={openModal} className="video-one__btn video-popup">
          <i className="fa fa-play"></i>
        </a>
      </div>
    </section>
  );
};
export default VideoOne;
