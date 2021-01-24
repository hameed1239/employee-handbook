import React from "react";
import StripePayment from "../components/Stripe/StripePayment";
const Donate = () => {
  const dogPictureBannerStyle = {
    display: "flex",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgStyles = {
    maxWidth: "300px",
    padding: "30px",
  };

  return (
    <div style={{ minHeight: "100vh", maxWidth: "100%" }}>
      <h1>Donate</h1>

      <h4>Thank you for your donation</h4>

      <div style={dogPictureBannerStyle} id="dog-picture-banner">
        <img style={imgStyles} src="/images/0.jpg" />
        <img style={imgStyles} src="/images/1.jpg" />
        <img style={imgStyles} src="/images/2.jpg" />
      </div>

      <div
        className="description"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 300px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <div style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 300px",
        }}>
        <StripePayment />
      </div>
    </div>
  );
};

export default Donate;
