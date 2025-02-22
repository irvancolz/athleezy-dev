import {
  Hero,
  MainAbout,
  MainBlog,
  MainGuides,
  MainMembers,
  MainShop,
  MainTrainingAndDevelopment,
} from "@/components";

export default function Page() {
  return (
    <>
      <Hero />
      <MainAbout />
      <MainTrainingAndDevelopment />
      <MainMembers />
      <MainShop />
      <MainGuides />
      <MainBlog />
    </>
  );
}
