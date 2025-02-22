"use client";
import { Button, SectionWrapper, Text } from "@/components/primitives";
import styles from "./members.module.css";
import { SectionHeader } from "@/components/components";
import groupIcon from "@public/group.svg";
import player1 from "@public/our-members-1.png";
import player2 from "@public/our-members-2.png";
import player3 from "@public/our-members-3.png";
import { StaticImageData } from "next/image";
import { CSSProperties, useState } from "react";

const prevIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path opacity="0.2" d="M13 4.25V16.75L6.75 10.5L13 4.25Z" fill="#212121" />
    <path
      d="M13.2391 3.67271C13.1249 3.62534 12.9992 3.61289 12.8779 3.63695C12.7567 3.66101 12.6453 3.72049 12.5578 3.80787L6.30782 10.0579C6.24971 10.1159 6.20361 10.1848 6.17215 10.2607C6.1407 10.3366 6.12451 10.4179 6.12451 10.5001C6.12451 10.5822 6.1407 10.6635 6.17215 10.7394C6.20361 10.8153 6.24971 10.8842 6.30782 10.9422L12.5578 17.1922C12.6452 17.2797 12.7566 17.3394 12.8779 17.3635C12.9992 17.3877 13.125 17.3753 13.2392 17.3279C13.3535 17.2806 13.4512 17.2004 13.5198 17.0975C13.5885 16.9947 13.6251 16.8737 13.625 16.7501V4.25005C13.625 4.12644 13.5883 4.00561 13.5196 3.90285C13.4509 3.80008 13.3533 3.71999 13.2391 3.67271ZM12.375 15.2415L7.6336 10.5001L12.375 5.75865V15.2415Z"
      fill="#212121"
    />
  </svg>
);
const nextIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M14.25 10.5L8 16.75V4.25L14.25 10.5Z"
      fill="#212121"
    />
    <path
      d="M14.6922 10.0578L8.44219 3.80782C8.35478 3.72031 8.24337 3.6607 8.12207 3.63655C8.00076 3.61239 7.87502 3.62477 7.76076 3.67211C7.64649 3.71946 7.54884 3.79964 7.48017 3.90252C7.41151 4.00539 7.3749 4.12632 7.375 4.25V16.75C7.3749 16.8737 7.41151 16.9946 7.48017 17.0975C7.54884 17.2004 7.64649 17.2805 7.76076 17.3279C7.87502 17.3752 8.00076 17.3876 8.12207 17.3635C8.24337 17.3393 8.35478 17.2797 8.44219 17.1922L14.6922 10.9422C14.7503 10.8841 14.7964 10.8152 14.8279 10.7393C14.8593 10.6635 14.8755 10.5821 14.8755 10.5C14.8755 10.4179 14.8593 10.3365 14.8279 10.2607C14.7964 10.1848 14.7503 10.1159 14.6922 10.0578ZM8.625 15.2414V5.7586L13.3664 10.5L8.625 15.2414Z"
      fill="#212121"
    />
  </svg>
);
const MEMBERS_LIST: {
  img: StaticImageData;
  name: string;
  position: string;
  nation: string;
  dob: string;
  height: number;
}[] = [
  {
    img: player1,
    name: "Kylian Mbappe",
    position: "striker",
    nation: "france",
    dob: "20/12/1998",
    height: 1.78,
  },
  {
    img: player2,
    name: "Heung-Min Son",
    position: "winger",
    nation: "south korea",
    dob: "08/07/1992",
    height: 1.83,
  },
  {
    img: player3,
    name: "Dusan Vlahovic",
    position: "striker",
    nation: "serbia",
    dob: "28/01/2000",
    height: 1.91,
  },
];

export function MainMembers() {
  const [index, setIndex] = useState<number>(0);

  function next() {
    if (index >= MEMBERS_LIST.length - 1) return;
    setIndex((prev) => prev + 1);
  }

  function prev() {
    if (index <= 0) return;
    setIndex((prev) => prev - 1);
  }

  return (
    <SectionWrapper className={styles.container}>
      <div className={styles.header}>
        <SectionHeader
          icon={groupIcon.src}
          title="our members"
          tagline="Spotlight on the Stars"
        />
        <Text align="right">
          Get inspired by the journeys of talented street soccer players. From
          their humble beginnings to their standout skills, explore the stories
          that make our community unique.
        </Text>
      </div>
      <div className={styles.players_container_wrapper}>
        <Button
          variant="secondary"
          onClick={prev}
          className={styles.btn}
          data-action="prev"
        >
          {prevIcon}
        </Button>
        <Button
          variant="secondary"
          onClick={next}
          className={styles.btn}
          data-action="next"
        >
          {nextIcon}
        </Button>
        <ul
          className={styles.players_container}
          style={{ "--translate-x": index } as CSSProperties}
        >
          {MEMBERS_LIST.map((player, i) => {
            return (
              <li key={i} className={styles.player}>
                <img
                  className={styles.player_img}
                  src={player.img.src}
                  alt={player.name}
                />
                <div className={styles.stats_container}>
                  <div className={styles.stats}>
                    <Text alignSm="left" className={styles.stats_label}>
                      position
                    </Text>
                    <Text alignSm="left" className={styles.stats_value}>
                      {player.position}
                    </Text>
                  </div>
                  <div className={styles.stats}>
                    <Text alignSm="left" className={styles.stats_label}>
                      date of birth
                    </Text>
                    <Text alignSm="left" className={styles.stats_value}>
                      {player.dob}
                    </Text>
                  </div>
                  <div className={styles.stats}>
                    <Text alignSm="left" className={styles.stats_label}>
                      nationality
                    </Text>
                    <Text alignSm="left" className={styles.stats_value}>
                      {player.nation}
                    </Text>
                  </div>
                  <div className={styles.stats}>
                    <Text alignSm="left" className={styles.stats_label}>
                      height
                    </Text>
                    <Text
                      alignSm="left"
                      className={styles.stats_value}
                    >{`${player.height} m`}</Text>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.actions}>
        <Button variant="secondary">see more</Button>
        <Button>create your profile</Button>
      </div>
    </SectionWrapper>
  );
}
