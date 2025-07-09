import Linda from "../public/images/linda.jpg";
import Sheryl from "../public/images/sheryl.jpg";
import Jeff from "../public/images/jeff.jpg";
import Airport from "../public/images/airport.jpg";
import Events from "../public/images/events.jpg";
import Party from "../public/images/partyBusiii.jpg";
import Reocurring from "../public/images/reocurring.jpg";
import Distance from "../public/images/distance.jpg";
import Golf from "../public/images/golf.jpg";
import CherylC from "../public/images/CherylC.jpg";
import JimConnie from "../public/images/Jim&Connie.jpg";
import Adam from "../public/images/Adam.jpg";
import Lynn from "../public/images/lynn.jpg";
import Lady from "../public/images/lady.jpg";
import Corporate from "../public/images/corporateii.jpg";
import Hourly from "../public/images/hourly.jpg";
import Point from "../public/images/point.jpg";
import Vip from "../public/images/vip.jpg";
import Wedding from "../public/images/wedding.jpg";

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
    slug: "airport-transfers",
    copy: "Reliable black car service to Scottsdale, Sky Harbor, and Gateway airports. Professional chauffeurs ensure punctual, stress-free travel.",
    src: Airport,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 2,
    title: "Hourly “As-Directed” Chauffeur",
    slug: "hourly-chauffeur",
    copy: "Keep a dedicated car and driver on standby for meetings, golf, or a night out; pay only for the hours you use.",
    src: Hourly,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 3,
    title: "Point-to-Point City Transfers",
    slug: "point-to-point",
    copy: "Direct, door-to-door rides across the Valley with fixed pricing and 15-minute courtesy wait time.",
    src: Point,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 4,
    title: "Corporate & Event Logistics",
    slug: "corporate-events",
    copy: "VIP roadshows and conferences with onsite greeters, manifest tracking, and consolidated billing.",
    src: Corporate,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 5,
    title: "Special Events",
    slug: "special-events",
    copy: "Arrive in style for any occasion. We provide luxury vehicles and shuttle buses to suit all group sizes and event types.",
    src: Events,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 6,
    title: "Party Bus",
    slug: "party-bus",
    copy: "Elevate your celebration with our premium party buses. Featuring spacious interiors, entertainment systems, and professional chauffeurs.",
    src: Party,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 7,
    title: "Reoccurring Rides",
    slug: "reoccurring-rides",
    copy: "Dependable transportation for regular business needs. Scheduled rides ensure timely arrivals without ride-share uncertainties.",
    src: Reocurring,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 8,
    title: "Long Distance Drives",
    slug: "long-distance",
    copy: "Comfortable intercity travel with professional drivers. Relax in our well-maintained vehicles while we handle the journey.",
    src: Distance,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 9,
    title: "Golf Outing Tours",
    slug: "golf-outing-tours",
    copy: "Stress-free rides to TPC, We-Ko Pa, Troon and other courses. Vehicles for any group size with knowledgeable local drivers.",
    src: Golf,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 10,
    title: "Weddings",
    slug: "party-bus-weddings",
    copy: "LED lighting, Bluetooth sound, and wrap-around seating for unforgettable celebrations and seamless shuttles.",
    src: Wedding,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
  {
    id: 11,
    title: "Secure VIP Transport",
    slug: "secure-vip-transport",
    copy: "Armored Suburbans, trained protection drivers, and optional armed agents for principals requiring elevated security.",
    src: Vip,
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
  },
] as const;

export const servicesDetails = [
  {
    id: 1,
    title: "Thundertrails",
    slug: "thundertrails",
    src: Airport,
    video: "/videos/thunder.mp4",
    description:
      "Passion for mountain biking, outdoor adventure, and premium gear inspired the founders of Thundertrails to launch their specialized bike shop in 2019. What began as a local favorite for cycling enthusiasts has rapidly grown into one of the region's premier destinations for high-performance mountain bikes and accessories. With a loyal customer base and growing reputation, Thundertrails needed a digital presence that matched their in-store experience and could support their expansion plans.",
    tags: [
      {
        id: 1.98,
        tag: "Ecommerce",
      },
      {
        id: 1.99,
        tag: "Online Shop",
      },
    ],
    h1: "Revolutionizing Thundertrails' online presence with a cutting-edge ecommerce platform",
    year: 2025,
    platform: "Wix E-commerce",
    tech: "Next.js",
    href: "https://thunder-wix.vercel.app/",
    challenge: [
      {
        id: 1.1,
        challengeDetail:
          "Thundertrails' previous website was outdated, with limited functionality and poor performance that failed to showcase their premium bike collection properly. The slow loading times and clunky navigation were frustrating customers and limiting online sales potential. The brand needed a robust digital solution that could handle complex product configurations while delivering an exceptional user experience.",
      },
      {
        id: 1.2,
        challengeDetail:
          "We completely overhauled the website architecture and design to create an immersive digital showroom for their bikes and accessories. The new design incorporates dynamic product visualization, interactive bike customization tools, and seamless integration with their inventory management system. Every aspect of the user interface was crafted to highlight the technical specifications and quality that Thundertrails' products are known for.",
      },
      {
        id: 1.3,
        challengeDetail:
          "Beyond products, Thundertrails has always been deeply connected to the mountain biking community, sponsoring events and producing trail guides. The previous website couldn't effectively feature this content. We developed a content strategy that integrates their blog, event calendar, and trail maps with the shopping experience, strengthening customer engagement and establishing Thundertrails as an authority in the mountain biking world.",
      },
    ],
    results: [
      {
        id: 1.4,
        resultDetail:
          "The new ecommerce platform dramatically improved performance metrics across the board. Page load times decreased by 65% (based on Largest Contentful Paint measurements), while the conversion rate increased by 38%. The enhanced product visualization and customization features contributed to a 42% increase in average order value, and overall sales grew by 92% compared to the previous year.",
      },
      {
        id: 1.5,
        resultDetail:
          "Thundertrails has successfully elevated its brand positioning in the digital space, aligning with its premium in-store experience. The integrated content strategy has boosted organic traffic by 55% and increased newsletter signups by 143%. The platform's scalable architecture now provides Thundertrails with the foundation they need to expand their online presence nationally while maintaining the personalized service their customers expect.",
      },
    ],
    stats: [
      { id: 1, title: "Decrease in page‑load time", desc: "‑65%" },
      { id: 2, title: "Lift in conversion rate", desc: "+38%" },
      { id: 3, title: "Increase in average order value", desc: "+42%" },
      { id: 4, title: "Growth in year‑over‑year sales", desc: "+92%" },
    ],
  },
  {
    id: 2,
    title: "Chuxly",
    slug: "chuxly",
    src: Airport,
    video: "/videos/chuxly.mp4",
    description:
      "Founded by audio engineers with a passion for exceptional sound quality, Chuxly emerged in 2021 as a boutique brand dedicated to creating premium headphones and portable speakers. Combining cutting-edge acoustic technology with elegant, minimalist design, Chuxly quickly gained recognition among audiophiles and style-conscious consumers alike. As demand for their products grew beyond their flagship store, Chuxly needed an online platform that could communicate the unique sensory experience of their products while handling their expanding inventory and customer base.",
    tags: [
      {
        id: 2.98,
        tag: "Ecommerce",
      },
      {
        id: 2.99,
        tag: "Audio Equipment",
      },
    ],
    h1: "Elevating the digital experience for Chuxly's premium audio equipment",
    year: 2025,
    platform: "Shopify",
    tech: "Next.js",
    href: "https://www.chuxly.com/",
    challenge: [
      {
        id: 2.1,
        challengeDetail:
          "Chuxly faced the unique challenge of selling high-end audio products online where customers couldn't physically experience the sound quality. Their initial website lacked the immersive elements needed to convey the exceptional audio experience and craftsmanship that justified the premium pricing. The site also struggled with inventory management as their product line expanded, resulting in frustrating out-of-stock situations and missed sales opportunities.",
      },
      {
        id: 2.2,
        challengeDetail:
          "We reimagined the entire customer journey to create a virtual showroom that emphasizes the sensory qualities of Chuxly's products. The redesigned platform features interactive 3D product models, audio demonstrations with comparative sound samples, and detailed acoustic specifications presented through intuitive visualizations. Each product page tells the story of the design philosophy and engineering precision behind the item, helping customers understand the value proposition beyond mere specifications.",
      },
      {
        id: 2.3,
        challengeDetail:
          "To build credibility and foster community engagement, we developed an integrated content hub featuring expert reviews, listening guides, and artist collaborations. The platform now includes a subscription-based exclusive content section where members get early access to limited edition releases and personalized audio profiles. The robust backend system connects seamlessly with their inventory and manufacturing systems, providing real-time stock updates and production timelines for custom orders.",
      },
    ],
    results: [
      {
        id: 2.4,
        resultDetail:
          "The enhanced digital experience has transformed Chuxly's online sales performance. The immersive product presentations and technical demonstrations have reduced return rates by 47% and increased conversion rates by 58% for their highest-priced items. Overall, online revenue has increased by 126% within six months of launch, with the average time spent on product pages increasing from 45 seconds to over 3 minutes.",
      },
      {
        id: 2.5,
        resultDetail:
          "The content strategy has established Chuxly as a thought leader in the audio space, with their listening guides and technical articles generating significant organic traffic and social media engagement. The membership program has exceeded expectations with over 10,000 subscribers in the first quarter, creating a reliable revenue stream and valuable customer insights. With the robust and scalable architecture in place, Chuxly is now expanding into international markets with localized content and payment options.",
      },
    ],
    stats: [
      { id: 1, title: "Reduction in product return rate", desc: "‑47%" },
      { id: 2, title: "Conversion lift on flagship items", desc: "+58%" },
      { id: 3, title: "Increase in online revenue", desc: "+126%" },
      { id: 4, title: "Avg. time on product page", desc: "3 min 05 s" },
    ],
  },
  {
    id: 3,
    title: "Golden Drips",
    slug: "golden-drips",
    src: Airport,
    video: "/videos/honey.mp4",
    description:
      "Golden Drips began as a family-owned apiary in 2018, producing small-batch, artisanal honey varieties from carefully selected floral sources. Their commitment to sustainable beekeeping practices and exceptionally pure, unprocessed honey products quickly earned them a devoted following at farmers' markets and specialty food stores. As demand for their premium honey and bee pollen products surged, Golden Drips recognized the need to expand their reach beyond local markets while maintaining the artisanal quality and personal connection that defined their brand.",
    tags: [
      {
        id: 3.98,
        tag: "Ecommerce",
      },
      {
        id: 3.99,
        tag: "Artisanal Food",
      },
    ],
    h1: "Crafting a luxurious digital storefront for Golden Drips' premium honey collection",
    year: 2025,
    platform: "WooCommerce",
    tech: "Next.js",
    href: "https://golden-tau-ten.vercel.app/",
    challenge: [
      {
        id: 3.1,
        challengeDetail:
          "Golden Drips' existing online presence consisted of a basic informational website and third-party marketplace listings that failed to communicate the premium nature of their products or the story behind their sustainable beekeeping practices. The brand struggled to differentiate themselves in the growing artisanal honey market and lacked the digital infrastructure to handle direct-to-consumer sales efficiently, especially for their subscription offerings and gift packages.",
      },
      {
        id: 3.2,
        challengeDetail:
          "We developed a richly textured digital experience that captures the sensory aspects of Golden Drips' honey varieties through high-definition macro photography, color profiles, and detailed tasting notes. The custom-designed product pages highlight the specific floral sources, harvesting locations, and seasonal characteristics that make each honey variety unique. An interactive flavor wheel helps customers discover products based on their taste preferences, while the sustainable practices section immerses visitors in the brand's environmental commitments through video documentaries and illustrated guides.",
      },
      {
        id: 3.3,
        challengeDetail:
          "To enhance the gifting experience, we created a custom gift builder that allows customers to create personalized honey collections with custom labels and packaging options. The subscription management system provides flexible delivery schedules and seasonal product rotations based on customer preferences. Behind the scenes, the platform integrates with their inventory and production systems to manage the seasonality of their products and ensure availability aligns with harvesting cycles.",
      },
    ],
    results: [
      {
        id: 3.4,
        resultDetail:
          "Golden Drips has successfully transitioned from a primarily wholesale business model to a thriving direct-to-consumer brand. Online sales now account for 65% of total revenue, with a 173% increase in year-over-year growth. The average order value has increased by 89% compared to their previous marketplace listings, and the subscription program now has over 5,000 active members with a remarkable 92% retention rate after six months.",
      },
      {
        id: 3.5,
        resultDetail:
          "The brand storytelling elements have significantly strengthened Golden Drips' market positioning, with engagement metrics showing that 78% of first-time visitors explore the sustainability content before making a purchase. Their educational content on bee conservation has generated substantial media coverage and partnership opportunities with environmental organizations. The platform's scalability has enabled Golden Drips to expand their product line to include limited edition seasonal releases and collaborations with other artisanal food producers, further cementing their reputation as leaders in the premium honey market.",
      },
    ],
    stats: [
      { id: 1, title: "Year‑over‑year online growth", desc: "+173%" },
      { id: 2, title: "Revenue now DTC (direct‑to‑consumer)", desc: "65%" },
      { id: 3, title: "Increase in average order value", desc: "+89%" },
      { id: 4, title: "Subscription program retention", desc: "92%" },
    ],
  },
  {
    id: 4,
    title: "Elite Retreat Rentals",
    slug: "elite-retreat-rentals",
    src: Airport,
    video: "/videos/rentals.mp4",
    description:
      "Elite Retreat Rentals was established in 2022 by a team of hospitality veterans with a vision to transform the vacation rental experience in Phoenix, Arizona. Their portfolio features three meticulously designed luxury properties, each offering a unique aesthetic and amenities while maintaining consistent high standards of comfort and service. As the Phoenix tourism market became increasingly competitive, Elite Retreat Rentals sought to break away from dependency on third-party booking platforms by creating a direct booking system that would showcase their properties' distinctive features and allow for a more personalized guest experience.",
    tags: [
      {
        id: 4.98,
        tag: "Hospitality",
      },
      {
        id: 4.99,
        tag: "Booking Platform",
      },
    ],
    h1: "Designing a seamless direct booking experience for Elite Retreat Rentals' luxury properties",
    year: 2025,
    platform: "n/a",
    tech: "Next.js + MongoDB + Node.js",
    href: "https://case-study-one-git-main-christianwares-projects.vercel.app/",
    challenge: [
      {
        id: 4.1,
        challengeDetail:
          "Elite Retreat Rentals was losing substantial revenue to third-party booking fees while struggling with the limitations these platforms imposed on property presentation and guest communication. Their existing website was primarily informational with basic contact forms, requiring manual reservation management and payment processing. Without a proper calendar synchronization system, they frequently encountered double-booking issues and missed opportunities during peak seasons when managing listings across multiple platforms.",
      },
      {
        id: 4.2,
        challengeDetail:
          "We developed a comprehensive direct booking platform that showcases each property through immersive virtual tours, 4K video walkthroughs, and interactive floor plans that allow potential guests to visualize their stay before booking. The intuitive booking engine features real-time availability, dynamic pricing based on seasonality and demand, and a streamlined checkout process with multiple payment options. Each property listing highlights its unique character through neighborhood guides, curated experience recommendations, and comprehensive amenity details.",
      },
      {
        id: 4.3,
        challengeDetail:
          "To enhance the guest experience beyond the booking process, we implemented a secure guest portal where visitors can manage their reservations, access digital guidebooks, arrange additional services, and communicate directly with property managers. The backend system integrates with their property management software, cleaning service schedules, and smart home systems to ensure seamless operations. A sophisticated analytics dashboard provides insights into booking patterns, revenue optimization opportunities, and guest satisfaction metrics.",
      },
    ],
    results: [
      {
        id: 4.4,
        resultDetail:
          "The direct booking platform has fundamentally transformed Elite Retreat Rentals' business model and profitability. Direct bookings now account for 78% of all reservations, representing a 210% increase compared to their previous third-party-dependent approach. The elimination of commission fees has increased profit margins by 32% while allowing for more competitive pricing strategies during off-peak seasons. The average stay duration has increased by 2.4 nights, and the enhanced presentation has contributed to a 45% increase in premium add-on services.",
      },
      {
        id: 4.5,
        resultDetail:
          "The improved guest communication system has resulted in a 98% satisfaction rating and a 67% repeat booking rate within the first year. The detailed analytics have enabled more effective marketing strategies, with targeted promotions increasing occupancy rates during traditionally slower periods by 41%. With the success of their direct booking model, Elite Retreat Rentals is now expanding their portfolio with two additional luxury properties in Scottsdale, all seamlessly integrated into their existing platform. Their reputation as a premier luxury accommodation provider in the Phoenix metropolitan area continues to grow, with features in several travel publications highlighting their innovative approach to the vacation rental experience.",
      },
    ],
    stats: [
      { id: 1, title: "Bookings made directly", desc: "78%" },
      { id: 2, title: "Profit‑margin increase", desc: "+32%" },
      { id: 3, title: "Increase in avg. stay length", desc: "+2.4 nights" },
      { id: 4, title: "Occupancy lift in slow periods", desc: "+41%" },
    ],
  },
] as const;
