/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import styles from "./Faq.module.css";
import LayoutWrapper from "../LayoutWrapper";
import React, { useState } from "react";
import Arrow from "../../../../public/icons/arrow.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
// import Button from "../Button/Button";

export const data = [
  {
    id: 1,
    question: "How do you handle flight delays or early arrivals?",
    answer:
      "We monitor your flight in real time and automatically adjust your pickup window at no extra charge. If your flight arrives early, your chauffeur will be standing by; if it’s delayed, we’ll wait up to 60 minutes after landing before any fees apply.",
  },
  {
    id: 1.1,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel or modify your reservation free of charge up to 24 hours before your scheduled pickup. Cancellations made within 24 hours may incur a fee equal to one hour of service or 50% of the trip fare, whichever is less.",
  },
  {
    id: 1.2,
    question: "Can I bring pets or special equipment?",
    answer:
      "Yes—small pets are welcome in our vehicles at no extra cost (please use a carrier). For larger animals or special equipment (golf clubs, skis, wheelchairs), select the appropriate add-on during booking and we’ll provide secure storage and handling.",
  },
  {
    id: 1.3,
    question: "Are gratuities included in the fare?",
    answer:
      "All of our rates are fully inclusive—there are no hidden charges or required tips. If you’d like to recognize exceptional service, you may do so directly through the app or with cash, but it’s never expected.",
  },
  {
    id: 1.4,
    question: "What safety measures do you have in place?",
    answer:
      "Every vehicle is cleaned and sanitized before each trip, and all chauffeurs undergo annual defensive-driving recertification and background checks. We also maintain 256-bit SSL encryption on our booking and payment systems to protect your data.",
  },
  {
    id: 1.5,
    question: "How can I add extra stops or change my route?",
    answer:
      "You can add up to three additional stops or modify your itinerary at any time via our mobile app, website, or by calling your chauffeur directly. All changes are confirmed instantly and reflected in your final fare.",
  },
  {
    id: 1.6,
    question: "Do you offer group or corporate discounts?",
    answer:
      "Yes—teams of five or more traveling together, or accounts with recurring ride volume, qualify for custom corporate pricing and priority booking. Contact our sales team for a tailored rate sheet and service agreement.",
  },
] as const;


export default function Faq() {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={styles.container}>
      <SectionHeading title="Faq's" />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              You Ask <br /> we answer
            </h2>
            <p className={styles.topText}>
              Here are some commonly asked questions and their answers below. If
              you don&#39;t see your questions here, call us any time.
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x, i) => (
              <div
                key={x.id}
                className={
                  selected === i
                    ? styles.qaContainer + " " + styles.showBorder
                    : styles.qaContainer
                }
                onClick={() => toggle(i)}
              >
                <div className={styles.headingArrowContainer}>
                  <h3 className={styles.question} lang='en'>
                    {x.question}
                  </h3>
                  <div className={styles.arrowContainer}>
                    {selected === i ? (
                      <div className={styles.arrowContainer}>
                        <Arrow className={styles.iconFlip} />
                      </div>
                    ) : (
                      <div className={styles.arrowContainer}>
                        <Arrow className={styles.icon} />
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={
                    selected === i
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <p className={styles.answer} lang='en'>
                    {x.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
