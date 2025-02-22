import {
  Hero,
  MainAbout,
  MainBlog,
  MainFAQ,
  MainGuides,
  MainMembers,
  MainShop,
  MainTestimonials,
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
      <MainTestimonials />
      <MainFAQ />
      <MainBlog />
    </>
  );
}
