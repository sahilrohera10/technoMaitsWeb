import React from "react";
import NavBarBanner from "../Components/NavBarBanner";
import OurTeam from "../Components/OurTeam";
import HackathonBlogs from "../Components/HackathonBlogs";
import Stats from "../Components/Stats";
import ContactUs from "../Components/ContactUs";

export default function LandingPage() {
  return (
    <div>
      <NavBarBanner />
      <OurTeam />
      <HackathonBlogs />
      <Stats />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
}
