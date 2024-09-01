import { BannerAnimation } from "@/component/header/banner/BannerAnimation"
import { Header } from "@/component/header/Header";
import "@/asset/sass/main.scss"
import { Skill } from "@/component/skill/Skill";
import { Project } from "@/component/project/Project";
import { Path } from "@/component/path/Path";
import { Footer } from "@/component/footer/Footer";

export default function LandingPage() {

  return (
    <>
      <main>
        <Header />
        <Skill />
        <Path />
        <Project />
      </main>
      <Footer />
    </>
  );
}

