import {
  Hero,
  MainBlog,
  MainGuides,
  MainMembers,
  MainShop,
} from "@/components";

export default function Page() {
  return (
    <>
      <Hero />
      <MainMembers />
      <MainShop />
      <MainGuides />
      <MainBlog />
    </>
  );
}
