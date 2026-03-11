import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "This is Privacy Policy",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
