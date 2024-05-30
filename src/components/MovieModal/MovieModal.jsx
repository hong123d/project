/* eslint-disable react/prop-types */

import { useRef } from "react";
import useOnclickOutside from "../../hooks/useOnclickOutside";
import { imageBasePath } from "../constant";
import "./MovieModal.css";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const ref = useRef(null);

  useOnclickOutside(ref, () => {
    setModalOpen(false);
  });
  return (
    <>
      <div className="presentation" role="presentation">
        <div className="wrapper_modal">
          <div className="modal_box" ref={ref}>
            <span className="modal_close" onClick={() => setModalOpen(false)}>
              X
            </span>

            <img
              className="modal_poster_img"
              src={`${imageBasePath}${backdrop_path}`}
              alt="modal_poster_img"
            />
            <div className="modal_content">
              <p className="modal_details">
                <span>100% for you</span>
                {release_date ? release_date : first_air_date}
              </p>
              <h2 className="modal_title">{title ? title : name}</h2>
              <p className="modal_overview">평점: {vote_average}</p>
              <p className="modal_overview">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;