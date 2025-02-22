import {
  Hero,
  MainAbout,
  MainBlog,
  MainFAQ,
  MainGuides,
  MainMarquee,
  MainMembers,
  MainShop,
  MainTestimonials,
  MainTrainingAndDevelopment,
} from "@/components";

export default function Page() {
  return (
    <>
      <Hero />
      <MainMarquee />
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
