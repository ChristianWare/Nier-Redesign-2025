import styles from "./ListOfServices.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Airport from "../../../../public/images/airport.jpg";
import Brewery from "../../../../public/images/brewery.jpg";
import Corporate from "../../../../public/images/corporate.jpg";
import Party from "../../../../public/images/partybus.jpg";
import Hourly from "../../../../public/images/hourly.jpg";
import Longdistance from "../../../../public/images/longdistance.jpg";
import Point from "../../../../public/images/point.jpg";
import Roadshow from "../../../../public/images/roadshow.jpg";
import Vip from "../../../../public/images/vip.jpg";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    slug: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Flat-rate black-car rides to PHX, AZA, and private FBOs—flight-tracking and 60-minute arrival wait included.",
    src: Airport,
  },
  {
    id: 2,
    slug: "hourly-chauffeur",
    title: "Hourly “As-Directed” Chauffeur",
    description:
      "Keep a dedicated car and driver on standby for meetings, golf, or a night out; pay only for the hours you use.",
    src: Hourly,
  },
  {
    id: 3,
    slug: "corporate-events",
    title: "Corporate & Event Logistics",
    description:
      "VIP roadshows and conferences with onsite greeters, manifest tracking, and consolidated billing.",
    src: Corporate,
  },
  {
    id: 4,
    slug: "long-distance",
    title: "Long-Distance Getaways",
    description:
      "Door-to-door comfort to Sedona, Grand Canyon, Tucson, and more—arrive refreshed, not road-weary.",
    src: Longdistance,
  },
  {
    id: 5,
    slug: "party-bus-weddings",
    title: "Party Bus & Weddings",
    description:
      "LED lighting, Bluetooth sound, and wrap-around seating for unforgettable celebrations and seamless shuttles.",
    src: Party,
  },
  {
    id: 6,
    slug: "point-to-point",
    title: "Point-to-Point City Transfers",
    description:
      "Direct, door-to-door rides across the Valley with fixed pricing and 15-minute courtesy wait time.",
    src: Point,
  },
  {
    id: 7,
    slug: "roadshow-multi-city",
    title: "Roadshow & Multi-City Tours",
    description:
      "Timed itineraries, on-board Wi-Fi, and live dashboards—perfect for investor meetings or campaign swings.",
    src: Roadshow,
  },
  {
    id: 8,
    slug: "wine-brewery-tours",
    title: "Wine & Brewery Excursions",
    description:
      "Private tours to Verde Valley, Sonoita, or local craft breweries—cooler, custom routes, and safe returns included.",
    src: Brewery,
  },
  {
    id: 9,
    slug: "secure-vip-transport",
    title: "Secure VIP Transport",
    description:
      "Armored Suburbans, trained protection drivers, and optional armed agents for principals requiring elevated security.",
    src: Vip,
  },
] as const;

export default function ListOfServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt=''
                    title=''
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <div className={styles.descBtnContainer}>
                    <p className={styles.description}>{x.description}</p>
                    <div className={styles.btnContainer}>
                      <Button
                        href={`/services/${x.slug}`}
                        btnType='black'
                        text='learn more'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
