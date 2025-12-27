"use client";

import React from "react";
import Privacy from "./components/privacy/Privacy";
import Banner from "./components/Banner/Banner";
import AbsoluteBall from "../components/AbsoluteComponents/AbsoluteBall";

function PrivacyPolicy() {
  return (
    <div className="relative">
      <AbsoluteBall />
      <Banner />
      <Privacy />
    </div>
  );
}

export default PrivacyPolicy;
