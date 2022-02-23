import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "../redux/slice";

const Editor = () => {
    const {value,characters} = useSelector((state) => state.word)
    const dispatch = useDispatch();

  return (
    <div className="editor">
      <div className="editor__header">
        <div className="editor__group">
          <div className="editor__info">
            <h5 className="editor__title">WORDS</h5>
            <span className="editor__count">{value}</span>
          </div>
        </div>
        <div className="editor__group">
          <div className="editor__info">
            <h5 className="editor__title">CHARACTERS</h5>
            <span className="editor__count">{characters}</span>
          </div>
        </div>
        <div className="editor__group">
          <div className="editor__info">
            <h5 className="editor__title">FACEBOOK</h5>
            <div className="editor__social">
              <FacebookOutlinedIcon style={{ color: "#45619d" }} />
              <span className="editor__count social">{250 - characters}</span>
            </div>
          </div>
        </div>
        <div className="editor__group">
          <div className="editor__info">
            <h5 className="editor__title">TWITTER</h5>
            <div className="editor__social">
              <TwitterIcon style={{ color: "#179cf0" }} />
              <span className="editor__count social">{280 - characters}</span>
            </div>
          </div>
        </div>

        <div className="editor__group">
          <div className="editor__info">
            <h5 className="editor__title">GOOGLE</h5>
            <div className="editor__social">
              <GoogleIcon style={{ color: "#eb4132" }} />
              <span className="editor__count social">{300 - characters}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="editor__content">
        <textarea
          className="editor__text "
          placeholder="Type or paste your text"
          autoFocus
          onChange={(e) =>  dispatch(getWord(e.target.value))}
        ></textarea>
      </div>
      <div className="editor__link">
        <span>
          For Detailed Information{" "}
          <a href="http://anilparlak.com/" target="_blank">Anıl Parlak</a>
        </span>
      </div>
    </div>
  );
};

export default Editor;
