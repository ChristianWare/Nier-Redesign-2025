/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import styles from "./Faq.module.css";
import LayoutWrapper from "../LayoutWrapper";
import React, { useState } from "react";
import Arrow from "../../../../public/icons/arrow.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import Image from "next/image";
import Img1 from '../../../../public/images/heroii.jpg'

const data = [
  {
    id: 36,
    question: "How long does it take to build an e-commerce website?",
    answer:
      "The timeline for building an e-commerce website depends on the complexity of your project. A basic online store can typically be launched in 4-6 weeks, while more complex sites with custom functionality may take 8-16 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and business goals.",
  },
  {
    id: 36.1,
    question: "Which e-commerce platform do you recommend?",
    answer:
      "We don't believe in one-size-fits-all solutions. The best platform depends on your specific business needs, budget, and long-term goals. We have expertise in Shopify, WooCommerce, Magento, Wix, and custom solutions. During our discovery process, we'll assess your requirements and recommend the platform that offers the best balance of features, flexibility, and scalability for your business.",
  },
  {
    id: 36.2,
    question: "How much does an e-commerce website cost?",
    answer:
      "E-commerce website costs vary widely based on your business requirements. Our starter stores begin at $5,900, growth-focused stores at $7,500, and enterprise solutions at $10,000. We provide transparent, detailed quotes for each project after understanding your specific needs. Factors that affect pricing include design complexity, number of products, custom functionality, and integrations with other business systems.",
  },
  {
    id: 36.3,
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely! We understand that launching your store is just the beginning of your e-commerce journey. We offer flexible maintenance and support plans starting at $495 per month, which include platform updates, security patches, content updates, and technical support. We also provide growth-focused services such as conversion optimization, A/B testing, and performance enhancements for businesses looking to continuously improve their online stores.",
  },
  {
    id: 36.4,
    question:
      "What sets Fonts & Footers apart from other web development agencies?",
    answer:
      "Unlike general web developers, we specialize exclusively in e-commerce, with deep expertise across multiple business models including B2C, B2B, marketplaces, subscription services, and more. Our approach balances beautiful design with data-driven strategy, ensuring your store not only looks great but delivers measurable business results. We take a limited number of clients to provide personalized attention, and our focus on long-term partnerships means we're invested in your success far beyond the initial launch.",
  },
  {
    id: 36.466,
    question:
      "What sets Fonts & Footers apart from other web development agencies?",
    answer:
      "Unlike general web developers, we specialize exclusively in e-commerce, with deep expertise across multiple business models including B2C, B2B, marketplaces, subscription services, and more. Our approach balances beautiful design with data-driven strategy, ensuring your store not only looks great but delivers measurable business results. We take a limited number of clients to provide personalized attention, and our focus on long-term partnerships means we're invested in your success far beyond the initial launch.",
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
      <SectionHeading title='Frequently Asked Questions' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h3 className={styles.heading}>FAQ by category</h3>
            <p className={styles.topText}>
              Here are some commonly asked questions and their answers below. If
              you don&#39;t see your questions here, call us any time.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='black' text="See All Faq's" />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill title='' alt='' className={styles.img} />
            </div>
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
                      <Arrow className={styles.iconFlip} />
                    ) : (
                      <Arrow className={styles.icon} />
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
