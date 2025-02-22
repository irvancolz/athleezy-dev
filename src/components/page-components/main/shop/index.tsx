"use client";
import { Button, SectionWrapper, Text } from "@/components/primitives";
import styles from "./style.module.css";
import { SectionHeader } from "@/components/components";
import shopIcon from "@public/shopping-bag.svg";
import { JSX, useState } from "react";
import productImg from "@public/shop-item-1.png";

const soccerBall = (
  <svg
    className={styles.category_icon}
    width="16"
    height="17"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M4.01875 16.6774C4.00625 16.4524 4 16.2274 4 15.9999C3.99582 13.2608 4.93268 10.6033 6.65375 8.47241L8.14625 13.5112L4.01875 16.6774Z"
      fill="#212121"
    />
    <path
      opacity="0.2"
      d="M12.9838 27.6175C10.0393 26.8512 7.49521 24.9964 5.86501 22.4275H11.1463L12.9838 27.6175Z"
      fill="#212121"
    />
    <path
      opacity="0.2"
      d="M19.0163 27.6175C21.963 26.8526 24.5096 24.9977 26.1413 22.4275H20.8538L19.0163 27.6175Z"
      fill="#212121"
    />
    <path
      opacity="0.2"
      d="M27.9812 16.6774C27.9937 16.4524 28 16.2274 28 15.9999C28.0042 13.2608 27.0673 10.6033 25.3462 8.47241L23.8537 13.5112L27.9812 16.6774Z"
      fill="#212121"
    />
    <path
      opacity="0.2"
      d="M11.4688 4.88501C14.3743 3.705 17.6257 3.705 20.5312 4.88501L16 8.00001L11.4688 4.88501Z"
      fill="#212121"
    />
    <path
      opacity="0.2"
      d="M16 11L11 14.4375L12.91 20H19.09L21 14.4375L16 11Z"
      fill="#212121"
    />
    <path
      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 11L11 14.4375L12.91 20H19.09L21 14.4375L16 11Z"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8V11"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.14626 13.5112L11 14.4375"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1463 22.4275L12.91 20"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.8537 22.4275L19.09 20"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.8538 13.5112L21 14.4375"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5312 4.88501L16 8.00001L11.4688 4.88501"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.9813 16.6774L23.8525 13.5099L25.3463 8.47241"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.65375 8.47241L8.14625 13.5099L4.01875 16.6774"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.0163 27.6175L20.8538 22.4275H26.135"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.86501 22.4275H11.1463L12.9838 27.6175"
      stroke="#212121"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tshirt = (
  <svg
    className={styles.category_icon}
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M15.4444 5.42312L14.24 7.72375C14.1943 7.80804 14.1266 7.8783 14.044 7.92697C13.9614 7.97565 13.8671 8.00089 13.7712 8H12V3L15.2362 4.76562C15.3509 4.82531 15.4373 4.92806 15.4763 5.05133C15.5153 5.1746 15.5038 5.30831 15.4444 5.42312ZM0.5556 5.42312L1.75998 7.72375C1.80563 7.80804 1.8734 7.8783 1.95598 7.92697C2.03857 7.97565 2.13287 8.00089 2.22873 8H3.99998V3L0.763725 4.76562C0.649027 4.82531 0.562694 4.92806 0.523674 5.05133C0.484654 5.1746 0.496137 5.30831 0.5556 5.42312Z"
      fill="#212121"
    />
    <path
      d="M15.4744 4.32625L12.2394 2.5625C12.1661 2.52194 12.0838 2.50045 12 2.5H10C9.86739 2.5 9.74021 2.55268 9.64645 2.64645C9.55268 2.74021 9.5 2.86739 9.5 3C9.5 3.39782 9.34196 3.77936 9.06066 4.06066C8.77935 4.34196 8.39782 4.5 8 4.5C7.60217 4.5 7.22064 4.34196 6.93934 4.06066C6.65803 3.77936 6.5 3.39782 6.5 3C6.5 2.86739 6.44732 2.74021 6.35355 2.64645C6.25978 2.55268 6.13261 2.5 6 2.5H4C3.91602 2.50035 3.83348 2.52184 3.76 2.5625L0.525624 4.32625C0.295063 4.4481 0.122228 4.6564 0.0450184 4.90549C-0.0321913 5.15457 -0.00747434 5.42411 0.113749 5.655L1.31812 7.95563C1.4057 8.12103 1.53696 8.25925 1.69763 8.35523C1.8583 8.45121 2.04222 8.50129 2.22937 8.5H3.5V13.5C3.5 13.7652 3.60536 14.0196 3.79289 14.2071C3.98043 14.3946 4.23478 14.5 4.5 14.5H11.5C11.7652 14.5 12.0196 14.3946 12.2071 14.2071C12.3946 14.0196 12.5 13.7652 12.5 13.5V8.5H13.7712C13.9584 8.50129 14.1423 8.45121 14.303 8.35523C14.4637 8.25925 14.5949 8.12103 14.6825 7.95563L15.8869 5.655C16.0081 5.42403 16.0327 5.15444 15.9553 4.90534C15.878 4.65624 15.705 4.44799 15.4744 4.32625ZM2.22937 7.5C2.22014 7.50044 2.21105 7.49755 2.20375 7.49188L1.00562 5.20375L3.5 3.8425V7.5H2.22937ZM11.5 13.5H4.5V3.5H5.55C5.66536 4.06447 5.97214 4.57178 6.41846 4.93611C6.86478 5.30044 7.42323 5.49944 7.99937 5.49944C8.57551 5.49944 9.13397 5.30044 9.58029 4.93611C10.0266 4.57178 10.3334 4.06447 10.4487 3.5H11.5V13.5ZM13.7969 7.49125C13.7934 7.49437 13.7894 7.49675 13.785 7.49825C13.7806 7.49976 13.7759 7.50035 13.7712 7.5H12.5V3.8425L14.995 5.20375L13.7969 7.49125Z"
      fill="#212121"
    />
  </svg>
);

const backpack = (
  <svg
    className={styles.category_icon}
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M13 6.5V14C13 14.1326 12.9473 14.2598 12.8536 14.3536C12.7598 14.4473 12.6326 14.5 12.5 14.5H11V10C11 9.73478 10.8946 9.48043 10.7071 9.29289C10.5196 9.10536 10.2652 9 10 9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10V14.5H3.5C3.36739 14.5 3.24021 14.4473 3.14645 14.3536C3.05268 14.2598 3 14.1326 3 14V6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5H10C10.7956 3.5 11.5587 3.81607 12.1213 4.37868C12.6839 4.94129 13 5.70435 13 6.5Z"
      fill="#B0B0B0"
    />
    <path
      d="M10.5 3.03625V2.5C10.5 2.10218 10.342 1.72064 10.0607 1.43934C9.77936 1.15804 9.39782 1 9 1H7C6.60218 1 6.22064 1.15804 5.93934 1.43934C5.65804 1.72064 5.5 2.10218 5.5 2.5V3.03625C4.66755 3.15758 3.90649 3.57422 3.35573 4.21012C2.80498 4.84601 2.50125 5.65875 2.5 6.5V14C2.5 14.2652 2.60536 14.5196 2.79289 14.7071C2.98043 14.8946 3.23478 15 3.5 15H12.5C12.7652 15 13.0196 14.8946 13.2071 14.7071C13.3946 14.5196 13.5 14.2652 13.5 14V6.5C13.4987 5.65875 13.195 4.84601 12.6443 4.21012C12.0935 3.57422 11.3324 3.15758 10.5 3.03625ZM7 2H9C9.13261 2 9.25979 2.05268 9.35355 2.14645C9.44732 2.24021 9.5 2.36739 9.5 2.5V3H6.5V2.5C6.5 2.36739 6.55268 2.24021 6.64645 2.14645C6.74021 2.05268 6.86739 2 7 2ZM10.5 10.5H5.5V10C5.5 9.86739 5.55268 9.74021 5.64645 9.64645C5.74021 9.55268 5.86739 9.5 6 9.5H10C10.1326 9.5 10.2598 9.55268 10.3536 9.64645C10.4473 9.74021 10.5 9.86739 10.5 10V10.5ZM5.5 11.5H8.5V12C8.5 12.1326 8.55268 12.2598 8.64645 12.3536C8.74021 12.4473 8.86739 12.5 9 12.5C9.13261 12.5 9.25979 12.4473 9.35355 12.3536C9.44732 12.2598 9.5 12.1326 9.5 12V11.5H10.5V14H5.5V11.5ZM12.5 14H11.5V10C11.5 9.60218 11.342 9.22064 11.0607 8.93934C10.7794 8.65804 10.3978 8.5 10 8.5H6C5.60218 8.5 5.22064 8.65804 4.93934 8.93934C4.65804 9.22064 4.5 9.60218 4.5 10V14H3.5V6.5C3.5 5.83696 3.76339 5.20107 4.23223 4.73223C4.70107 4.26339 5.33696 4 6 4H10C10.663 4 11.2989 4.26339 11.7678 4.73223C12.2366 5.20107 12.5 5.83696 12.5 6.5V14ZM9.5 6C9.5 6.13261 9.44732 6.25979 9.35355 6.35355C9.25979 6.44732 9.13261 6.5 9 6.5H7C6.86739 6.5 6.74021 6.44732 6.64645 6.35355C6.55268 6.25979 6.5 6.13261 6.5 6C6.5 5.86739 6.55268 5.74021 6.64645 5.64645C6.74021 5.55268 6.86739 5.5 7 5.5H9C9.13261 5.5 9.25979 5.55268 9.35355 5.64645C9.44732 5.74021 9.5 5.86739 9.5 6Z"
      fill="#B0B0B0"
    />
  </svg>
);

const hoodie = (
  <svg
    className={styles.category_icon}
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M14.4825 8.71937L13.1425 13.6313C13.1137 13.737 13.051 13.8304 12.9639 13.8971C12.8768 13.9637 12.7703 13.9999 12.6606 14H11C10.8674 14 10.7402 13.9473 10.6464 13.8536C10.5527 13.7598 10.5 13.6326 10.5 13.5V12H5.5V13.5C5.5 13.6326 5.44732 13.7598 5.35355 13.8536C5.25979 13.9473 5.13261 14 5 14H3.33938C3.22974 13.9999 3.12318 13.9637 3.03611 13.8971C2.94904 13.8304 2.88628 13.737 2.8575 13.6313L1.5175 8.71937C1.49899 8.65074 1.49532 8.57895 1.50674 8.50879C1.51817 8.43863 1.54442 8.37171 1.58375 8.3125L4.5 3.9375L8 6L11.5 3.9375L14.4163 8.3125C14.4556 8.37171 14.4818 8.43863 14.4933 8.50879C14.5047 8.57895 14.501 8.65074 14.4825 8.71937Z"
      fill="#B0B0B0"
    />
    <path
      d="M14.8319 8.03312L11.4375 2.945C11.3464 2.80845 11.2231 2.69643 11.0784 2.61882C10.9338 2.54121 10.7723 2.50041 10.6081 2.5H5.39187C5.22772 2.50041 5.0662 2.54121 4.92155 2.61882C4.77691 2.69643 4.6536 2.80845 4.56249 2.945L1.16812 8.03312C1.08873 8.15205 1.03576 8.28661 1.0128 8.42774C0.989834 8.56888 0.997402 8.71329 1.03499 8.85125L2.37499 13.7631C2.4327 13.9747 2.55835 14.1614 2.73261 14.2946C2.90687 14.4277 3.12006 14.4999 3.33937 14.5H4.99999C5.26521 14.5 5.51956 14.3946 5.7071 14.2071C5.89464 14.0196 5.99999 13.7652 5.99999 13.5V12.5H9.99999V13.5C9.99999 13.7652 10.1054 14.0196 10.2929 14.2071C10.4804 14.3946 10.7348 14.5 11 14.5H12.6606C12.8799 14.4999 13.0931 14.4277 13.2674 14.2946C13.4416 14.1614 13.5673 13.9747 13.625 13.7631L14.965 8.85125C15.0026 8.71329 15.0102 8.56888 14.9872 8.42774C14.9642 8.28661 14.9113 8.15205 14.8319 8.03312ZM4.99999 11.5V4.8125L6.49999 5.69688V9C6.49999 9.13261 6.55267 9.25979 6.64644 9.35355C6.74021 9.44732 6.86738 9.5 6.99999 9.5C7.1326 9.5 7.25978 9.44732 7.35355 9.35355C7.44731 9.25979 7.49999 9.13261 7.49999 9V6.28562L7.74624 6.43062C7.82314 6.47591 7.91075 6.4998 7.99999 6.4998C8.08923 6.4998 8.17685 6.47591 8.25374 6.43062L8.49999 6.28562V8.5C8.49999 8.63261 8.55267 8.75979 8.64644 8.85355C8.74021 8.94732 8.86738 9 8.99999 9C9.1326 9 9.25978 8.94732 9.35355 8.85355C9.44732 8.75979 9.49999 8.63261 9.49999 8.5V5.69625L11 4.8125V11.5H4.99999ZM10.6081 3.5L10.7906 3.77437L7.99999 5.41937L5.20937 3.77437L5.39187 3.5H10.6081ZM4.99999 13.5H3.33937L1.99999 8.58813L3.99999 5.58813V11.5C3.99999 11.7652 4.10535 12.0196 4.29289 12.2071C4.48042 12.3946 4.73478 12.5 4.99999 12.5V13.5ZM12.6606 13.5H11V12.5C11.2652 12.5 11.5196 12.3946 11.7071 12.2071C11.8946 12.0196 12 11.7652 12 11.5V5.58813L14 8.58813L12.6606 13.5Z"
      fill="#B0B0B0"
    />
  </svg>
);

const PRODUCT_CATEGORIES: {
  // eslint-disable-next-line
  logo: JSX.Element;
  label: string;
  value: string;
}[] = [
  {
    logo: tshirt,
    label: "footwear",
    value: "footwear",
  },
  {
    logo: hoodie,
    label: "hoodies, jackets",
    value: "hoodies",
  },
  {
    logo: backpack,
    label: "accessories",
    value: "accessories",
  },
  {
    logo: soccerBall,
    label: "gear",
    value: "gear",
  },
];

const product = {
  price: 24.63,
  img: productImg,
  title: "W.Essentiels x One Piece AC Strawhat Home Jersey Noir Black",
  description:
    "Embrace the fusion of streetwear and anime with the W.Essentiels x One Piece AC Strawhat Home Jersey in Noir Black. Featuring sleek black tones and iconic Strawhat Crew details.",
};

const PRODUCTS_LIST = Array.from({ length: 4 }).map(() => product);

export function MainShop() {
  const [category, setCategory] = useState<string>("footwear");
  return (
    <SectionWrapper id="shop" className={styles.container}>
      <div className={styles.header}>
        <SectionHeader
          title="shop"
          icon={shopIcon.src}
          tagline="Street Style, Soccer Spirit"
        />
        <ul className={styles.categories_container}>
          {PRODUCT_CATEGORIES.map((item, i) => {
            return (
              <li key={i}>
                <Button
                  variant="ternary"
                  onClick={() => setCategory(item.value)}
                  className={styles.category}
                  data-active={category == item.value}
                  leftIcon={item.logo}
                >
                  <span className={styles.category_label}>{item.label}</span>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className={styles.products_container}>
        {PRODUCTS_LIST.map((product, i) => {
          return (
            <li key={i} className={styles.product}>
              <img
                className={styles.product_img}
                src={product.img.src}
                alt={product.title}
              />
              <div className={styles.product_body}>
                <p className={styles.product_price}>{product.price}</p>
                <h3 className={styles.product_title}>{product.title}</h3>
                <Text className={styles.product_desc} alignSm="left">
                  {product.description}
                </Text>
              </div>
              <div className={styles.product_actions_container}>
                <Button variant="secondary">see detail</Button>
                <Button>buy now</Button>
              </div>
            </li>
          );
        })}
      </ul>
      <Button>See More Merch</Button>
    </SectionWrapper>
  );
}
