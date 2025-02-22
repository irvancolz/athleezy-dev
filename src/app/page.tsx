import {
  Hero,
  MainAbout,
  MainBlog,
  MainFAQ,
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
      <MainFAQ />
      <MainBlog />
    </>
  );
}
