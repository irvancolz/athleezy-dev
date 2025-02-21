import { URL } from "@/type";
import styles from "./footer.module.css";
import Link from "next/link";

const socialMediaLinks: URL[] = [
  {
    href: "#",
    label: "instagram",
  },
  {
    href: "#",
    label: "twitter (X)",
  },
  {
    href: "#",
    label: "tik tok",
  },
  {
    href: "#",
    label: "youtube",
  },
];

const companyLinks: URL[] = [
  {
    href: "#",
    label: "our story",
  },
  {
    href: "#",
    label: "careers",
  },
  {
    href: "#",
    label: "legals",
  },
  {
    href: "#",
    label: "privacy policy",
  },
];

const contactsLinks: URL[] = [
  {
    href: "#",
    label: "email",
  },
  {
    href: "#",
    label: "whatsapp",
  },
  {
    href: "#",
    label: "telegram",
  },
];

const FOOTER_LINKS: { title: string; links: URL[] }[] = [
  {
    title: "social media",
    links: socialMediaLinks,
  },
  {
    title: "company",
    links: companyLinks,
  },
  {
    title: "contacts",
    links: contactsLinks,
  },
];

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.watermark}></div>
      <div>
        <h2 className={styles.title}>atlzy</h2>
        <p className={styles.copyright}>Copyright@2025</p>
      </div>
      <div className={styles.navigation_container}>
        {FOOTER_LINKS.map((sect, i) => {
          return (
            <div key={i}>
              <p className={styles.navigation_title}>{sect.title}</p>
              <ul className={styles.navigation}>
                {sect.links.map((url, j) => {
                  return (
                    <li key={j}>
                      <Link href={url.href} className={styles.link}>
                        {url.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
