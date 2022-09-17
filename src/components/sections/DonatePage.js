import React from "react";
import { Typography } from "@material-ui/core";
import "./DonatePageStyle.css";
import paytmLogo from "../../images/Paytm.svg";
import paytmQr from "../../images/paytmQR.jpg";
const DonatePage = () => {
  return (
    <main style={{ margin: "10px" }}>
      <br />
      <Typography variant="h5" align="center">
        Desi World Radio{" "}
        <span role="img" aria-label="hands joining">
         
        </span>
      </Typography>
      <br />
      <Typography variant="subtitle1" align="center">
        Desi World Radio is one of the finest Desi Radio Station in America, its non-profit radio station only setup by desi’s for our desi community across the world.
Desi World Radio truly believe in the idea of bringing the Indian Desi community together and giving a platform for desi’s to showcase their talent and culture through Air.
Desi World Radio is a listener-supported, volunteer-powered, nonprofit radio station only dedicated to providing excellent programs to our desi community around the world.


      </Typography>
      <a target="self" href="https://www.desiworldradio.com/">
        <div className="donationBtn patreonBtn">
          <svg viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle
                data-fill="1"
                id="Oval"
                cx="362.589996"
                cy="204.589996"
                r="204.589996"
              />
              <rect
                data-fill="2"
                id="Rectangle"
                x="0"
                y="0"
                width="100"
                height="545.799988"
              />
            </g>
          </svg>
          <Typography variant="body2">Visit Website</Typography>
        </div>
      </a>
      <a target="self" href="https://play.google.com/store/apps/details?id=com.DesiWorldRadio&hl=en_IN&gl=US">
        <div className="paypalBtn">
          <img className="paytmQR" src={play-store-logo-nisi-filters-australia-11} alt="paytm qr code" />
        </div>
      </a>
      <a target="self" href="https://apps.apple.com/in/app/desi-world-radio/id1237767157">
        <div className="paypalBtn">
          <img className="paytmQR" src={5a902db97f96951c8292287} alt="paytm qr code" />
        </div>
      </a>
      <div>
        <img className="paytmQR" src={paytmQR} alt="paytm qr code" />
      </div>
    </main>
  );
};

export default DonatePage;
