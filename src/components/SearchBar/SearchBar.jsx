/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Close } from "../../icons/Close";
import { Mic2 } from "../../icons/Mic2";
import { Magnifyingglass } from "../Magnifyingglass";
import "./style.css";

export const SearchBar = ({ state, topbar, mic, clearIcon, className, placeholderLabelClassName }) => {
  return (
    <div className={`search-bar topbar-${topbar} ${className}`}>
      {!topbar && (
        <div className={`content mic-${mic} ${state} clear-icon-${clearIcon}`}>
          {((!clearIcon && !mic) ||
            (clearIcon && state === "active") ||
            (clearIcon && state === "default") ||
            (clearIcon && state === "filled") ||
            (mic && state === "active") ||
            (mic && state === "default") ||
            (mic && state === "filled")) && <Magnifyingglass className="magnifyingglass-instance" />}

          {!mic && !clearIcon && (
            <div className={`placeholder-label ${placeholderLabelClassName}`}>
              {["def-center", "default"].includes(state) && <>Search</>}

              {state === "active" && (
                <>
                  <p className="span-wrapper">
                    <span className="span">|</span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-3">Search</span>
                  </p>
                </>
              )}

              {state === "filled" && <>Placeholder</>}
            </div>
          )}

          {((clearIcon && state === "active") ||
            (clearIcon && state === "default") ||
            (clearIcon && state === "filled") ||
            (mic && state === "active") ||
            (mic && state === "default") ||
            (mic && state === "filled")) && (
            <div className="placeholder-label-2">
              {state === "default" && <>Search</>}

              {state === "active" && (
                <>
                  <p className="span-wrapper">
                    <span className="span">|</span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-3">Search</span>
                  </p>
                </>
              )}

              {state === "filled" && <>Placeholder</>}
            </div>
          )}

          {state === "def-center" && (clearIcon || mic) && (
            <img className="img" alt="Close" src={mic ? "/img/i-mic-android.svg" : "/img/close-1.svg"} />
          )}

          {state === "def-center" && mic && (
            <div className="cont">
              <Magnifyingglass />
              <div className="placeholder-label-3">Search</div>
            </div>
          )}

          {mic && <Mic2 className={`${state === "def-center" ? "class" : "mic"}`} />}

          {state === "def-center" && clearIcon && (
            <div className="cont-2">
              <Magnifyingglass />
              <div className="placeholder-label-3">Search</div>
            </div>
          )}

          {clearIcon && <Close className={`${state === "def-center" ? "class-2" : "close-instance"}`} />}
        </div>
      )}

      {topbar && (
        <>
          <div className="content-2">
            <Magnifyingglass className="magnifyingglass-instance" />
            <div className={`placeholder-label-4 state-2-${state}`}>
              {(state === "default" || (!clearIcon && state === "filled")) && <>Search</>}

              {state === "active" && (
                <>
                  <p className="span-wrapper">
                    <span className="span">|</span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-3">Search</span>
                  </p>
                </>
              )}

              {state === "filled" && clearIcon && <>Placeholder</>}
            </div>
            {mic && <Mic2 className="mic" />}

            {clearIcon && <Close className="close-instance" />}
          </div>
          <div className="cancel">
            <div className="text-wrapper-4">Cancel</div>
          </div>
        </>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  state: PropTypes.oneOf(["active", "filled", "def-center", "default"]),
  topbar: PropTypes.bool,
  mic: PropTypes.bool,
  clearIcon: PropTypes.bool,
};
