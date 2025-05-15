import Linda from "../public/images/linda.jpg";
import Sheryl from "../public/images/sheryl.jpg";
import Jeff from "../public/images/jeff.jpg";
import Airport from "../public/images/airport.jpg";
import Events from "../public/images/events.jpg";
import Party from "../public/images/partybus.jpg";
import Reocurring from "../public/images/reocurring.jpg";
import Distance from "../public/images/distance.jpg";
import Golf from "../public/images/golf.jpg";
import CherylC from "../public/images/CherylC.jpg";
import JimConnie from "../public/images/Jim&Connie.jpg";
import Adam from "../public/images/Adam.jpg";
import Lynn from "../public/images/lynn.jpg";
import Lady from "../public/images/lady.jpg";

export const reviews = [
  {
    id: 7,
    review:
      "Nier Transportation provided the best, outstanding quality of service for at least 20-25 family members for memorial services for my dear father. We required multiple stops, and wait times, and they were first of all affordable, on time, professional, and extremely kind. I would 1000% recommend using them for any transportation needs for personal and business purposes.",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
    person: Lady,
  },
  {
    id: 8,
    review:
      "Barry provides great reliable service in comfortable luxury. I travel out 1-2 times/month and I can schedule ahead. Barry will always verify the day before in the event anything changes (which it can with my job). I feel safer having someone I know pick me up sometimes at 4a. Thank you Barry!",
    reviewer: "Sheryl G.",
    company: "Scottsdale, AZ",
    person: Sheryl,
  },
  {
    id: 9,
    review:
      "I use Nier Transportation weekly for business travel and occasionally for personal trips.  They are always timely, super friendly, and helpful, all at reasonable rates.  I highly recommend them!",
    reviewer: "Jeff G.",
    company: "Sausalito, CA",
    person: Jeff,
  },
  {
    id: 11,
    review:
      "We have used this car service 4 times in the last few months. Booking a pick-up/drop-off time is very easy and seamless. Barry, the owner is very professional, friendly, and prompt as was one of his other drivers. We have flown in and out of Phoenix all 4 times with our dog and his kennel and Barry was very attentive to ensuring our dog (while in his kennel) was comfortable and safe before we left.Pricing is competitive but the service is better and good value for what you get. Cars are very roomy and spotless. Highly recommend this car service.",
    reviewer: "Cheryl C.",
    company: "Northwest Calgary, Canada",
    person: CherylC,
  },
  {
    id: 12,
    review:
      "We first rode with Barry over one year ago.We were so impressed with his level of pride, professional bearing, situational awareness, and meticulous attention to detail in all mannersrelating to our safety and satisfaction that we made the decision to use him exclusively for all our transportation needs.Nier Transportation has afforded us the luxury of worry-free rides with absolute dependability. They monitor our arrival and departure schedules in real time and adjust accordingly, with no excuses, cancellations, or surprises.Their level of service and the peace of mind it gives is priceless.",
    reviewer: "Jim & Connie A.",
    company: "Phoenix, AZ,",
    person: JimConnie,
  },
  {
    id: 13,
    review:
      "We used Nier Transportation to start and end our European vacation. It was the BEST decision! Our driver was professional, friendly, and timely. We also felt as though we were riding in luxury, the vehicle was new, fresh, and comfortable! An extra thanks for being at the airport waiting for us when we arrived back home at 1:30 a.m.!",
    reviewer: "Lynn B",
    company: "Tempe, AZ",
    person: Lynn,
  },
  {
    id: 145,
    review:
      "Have used this service multiple times. The drivers are great. Always very professional and prompt. You can tell they care about safety and a great customer experience, would definitely recommend it.",
    reviewer: "Illeana L.",
    company: "Mesa, AZ",
    person: Linda,
  },
  {
    id: 146,
    review:
      "I just started utilizing Nier Transportation a couple of months ago and have never used a driving service before. I was surprised to see how easy it was to schedule and use as I wasn't sure how it would work in relation to price timeliness, and reliability. I travel almost weekly and Barry, the owner made it very simple by asking for my flight itinerary, and pick-up times. I have used his service a few times so far and have had numerous changes to my plans and he has come through every time. He even made a special trip to pick up a backpack for my daughter when I was in Hawaii so when we returned, we wouldn't have to make a special trip. Vehicles are nice and clean, and Barry is a good man. His pricing is competitive and you get great value with all the things I stated above. Highly Recommended",
    reviewer: "Adam B.",
    company: "Phoenix, AZ",
    person: Adam,
  },
] as const;

export const services = [
  {
    id: 1,
    title: "Airport Transfers",
    copy: "Reliable black car service to Scottsdale, Sky Harbor, and Gateway airports. Professional chauffeurs ensure punctual, stress-free travel.",
    src: Airport,
  },
  {
    id: 2,
    title: "Special Events",
    copy: "Arrive in style for any occasion. We provide luxury vehicles and shuttle buses to suit all group sizes and event types.",
    src: Events,
  },
  {
    id: 3,
    title: "Party Bus",
    copy: "Elevate your celebration with our premium party buses. Featuring spacious interiors, entertainment systems, and professional chauffeurs.",
    src: Party,
  },
  {
    id: 4,
    title: "Reoccurring Rides",
    copy: "Dependable transportation for regular business needs. Scheduled rides ensure timely arrivals without ride-share uncertainties.",
    src: Reocurring,
  },
  {
    id: 5,
    title: "Long Distance Drives",
    copy: "Comfortable intercity travel with professional drivers. Relax in our well-maintained vehicles while we handle the journey.",
    src: Distance,
  },
  {
    id: 6,
    title: "Golf Outing Tours",
    copy: "Stress-free rides to TPC, We-Ko Pa, Troon and other courses. Vehicles for any group size with knowledgeable local drivers.",
    src: Golf,
  },
] as const;
