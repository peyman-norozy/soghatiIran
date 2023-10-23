import Welcome from "@/components/Home/Welcome";
import Header from "@/layouts/Header";
import Main from "@/layouts/Main";
import { NextPage } from "next";

const Home: NextPage = () => {
  console.log("heii");
  return (
    <>
      <Welcome />
    </>
  );
};
export default Home;
