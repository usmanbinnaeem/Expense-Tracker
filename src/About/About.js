import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header />
      <h3 style={about}>
        This is my first two Apps created using react, version v1.0.0, I am also
        working on Covid-19-Tracker App complete Soon Inshallah...
      </h3>
    </div>
  );
};
const about = {
  textAlign: "center",
  alignItems: "center",
};
export default About;
