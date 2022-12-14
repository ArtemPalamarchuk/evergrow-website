// Main page: cards
import {banks, corporateFinance, finExtra, impactAlpha, netZero, sponsors, techCrunch} from "@/assets/images";
// About page: team cards
import {James, Cassandra, Charles, Zoe, Arun, Neal, Marrissa} from "@/assets/images";
// Solution pages lists
import {construction, bank, solarPower, document, cash, plant, shield, work} from "@/assets/images";
// Solution pages heros
import {snow, windmills, batteries, batteries2} from "@/assets/images";
// Types
import type {ISolutionPageLayout, IContactUsPageContent} from "@/types";

// Main page
export const heroContent = {
  heading: `Save money on taxes. Fight climate change.`,
  subHeading: `It’s that simple.`,
  text: `Evergrow helps companies and financial institutions buy green tax credits. Earn attractive financial returns,
         boost earnings, and lead on climate change, all at once.`,
  buttonTitle: 'Get Started',
}
export const resourcesContent = {
  heading: `As seen on:`,
  resources: [
    {source: finExtra},
    {source: techCrunch},
    {source: impactAlpha},
  ]
}
export const advantagesContent = {
  heading: "Big banks use green tax credits to save billions every year. Now you can too.",
  text: `Evergrow is your one-stop-shop for green tax credits.
         By investing in green tax credits, you save money on your tax bill and unlock critical funding for clean 
         energy projects in the United States. Learn more about how our platform can help you achieve your financial and
         sustainability goals.`,
  cards: [
    {
      title: "Corporate tax & treasury",
      text: 'Lower your tax bill, grow after-tax cash flow, and earn high risk-adjusted IRRs on cash in treasury.',
      img: netZero,
      path: '/tax-and-treasury',
    },
    {
      title: "Corporate net-zero",
      text: 'Provide mission-critical funding to highly additional projects in the United States while also turning a profit.',
      img: corporateFinance,
      path: '/net-zero',
    },
    {
      title: "Banks & financial institutions",
      text: 'Invest in high-yield, low-risk tax credits to bolster both your financial returns and ESG impact.',
      img: banks,
      path: '/banks',
    },
    {
      title: "Project developers & sponsors",
      text: `Monetize your projects' tax attributes in a simple and streamlined way`,
      img: sponsors,
      path: '/sponsors',
    },
  ]
}
export const approachContent = {
  heading: `Climate finance without compromise.`,
  text: `Our mission is to build and sustain a carbon-neutral world. We use technology to create products that
         unlock funding for decarbonization and provide compelling risk-adjusted returns for our partners.`,
  buttonText: `Learn more about us`,
}

// About page
export const aboutHeroContent = {
  heading: `Helping to build and sustain a carbon neutral world`,
  text: `At Evergrow, we use technology to create products that unlock funding for
         decarbonization. We partner with project developers, corporations, and
         financial institutions to help build and sustain a carbon neutral world.`,
  secondaryText: `Our team has experience across corporate finance, clean energy, and technology.
                  We are backed by top-tier venture capital firms and leaders from the technology,
                  climate, and finance communities.`,
}
export const joinUsContent = {
  heading: `Join us`,
  text: `Evergrow works in person at the beautiful Shack 15 space in the iconic San Francisco Ferry Building.
        We are always looking for talented and mission-driven individuals to join our team.
        Take a look at our openings and get in touch!`,
  buttonText: `We're hiring`,
}
export const investorsContent = [
  {name: 'Andy Karetsky', position: 'President,', company: 'Skyview Ventures'},
  {name: 'Maddie Hall', position: 'Co-Founder,', company: 'Living Carbon'},
  {name: 'Justin Kan', position: 'Co-Founder,', company: 'Twitch'},
  {name: 'Sanjeev Kumar', position: 'Renewable Energy Executive', company: ''},
  {name: 'Erica Dorfman', position: 'SVP Of Capital Markets,', company: 'Brex'},
  {name: 'Michael Tannenbaum', position: 'COO,', company: 'Brex'},
  {name: 'Karen Karniol-Tambour', position: 'Co-CIO Sustainability,', company: 'Bridgewater Associates'},
  {name: 'Richard Matsui', position: 'CEO,', company: 'Kwh Analytics'},
  {name: 'Max Mullen', position: 'Co-Founder,', company: 'Instacart'},
  {name: 'Zach Perrett', position: 'CEO,', company: 'Plaid'},
  {name: 'Sierra Peterson', position: 'Managing Partner,', company: 'Voyager'},
  {name: 'Peter Reinhardt', position: 'CEO,', company: 'Charm Industrial'},
  {name: '', position: '', company: ''},
  {name: 'Janice Tran', position: 'CEO,', company: 'Kanin Energy'},
]
export const teamContent = {
  heading: "Our team",
  team: [
    {img: James, title: 'James Richards', text: 'CEO', link: "https://www.linkedin.com/in/jpr2120/"},
    {img: Cassandra, title: 'Cassandra Xia', text: 'Head of Engineering', link: "https://www.linkedin.com/in/cassandraxia/"},
    {img: Charles, title: 'Charles Stone', text: 'Strategic Finance Lead', link: "https://www.linkedin.com/in/charlesstone92/"},
    {img: Zoe, title: 'Zoe Savellos', text: 'Chief of Staff', link: "https://www.linkedin.com/in/zoe-savellos-77a11a108/"},
    {img: Arun, title: 'Arun Prasad', text: 'Staff Software Engineer', link: "https://www.linkedin.com/in/arun-k-prasad"},
    {img: Neal, title: 'Neal Donnelly', text: 'Business Development Lead', link: "https://www.linkedin.com/in/neal-donnelly-2633a71b/"},
    {img: Marrissa, title: 'Marrissa His', text: 'Executive Business Partner', link: "https://www.linkedin.com/in/marrissahis/"},
  ]
}

// Taxes page
export const taxesPageContent: ISolutionPageLayout = {
  textImage: {
    heading: `Lower your tax bill (and the temperature)`,
    text: `Evergrow is the safest and easiest way to buy green tax credits. 
           Earn high IRRs on cash in treasury, boost after-tax cashflow, 
           and put your tax dollars to work fighting climate change.`,
    buttonText: `Get Started `,
    img: snow,
  },
  list: [
    {
      img: cash,
      title: "Less tax, more cash",
      text: `Tax credits can be substituted directly in place of cash for payments to the IRS.
             By buying these credits at a discount to their face value through Evergrow,
             you can achieve significant savings on your taxes, earn high IRRs on cash
             in treasury, and boost after-tax cashflow.`
    },
    {
      img: solarPower,
      title: "Lead on climate",
      text: `Green tax credits are generated by clean energy and other climate-friendly
             assets in the United States, including solar, wind, and energy storage.
             By buying these credits through Evergrow, you provide critical funding
             for these projects and position your company as a leader on climate change.`
    },
    {
      img: shield,
      title: "Safe, secure, and protected",
      text: `Large banks and financial institutions have used green tax credits
             for over a decade. With Evergrow, now you can too. And as an added
             layer of protection, all green tax credits on Evergrow are protected
             by an insurance policy from a highly rated syndicate of insurers,
             so you can invest with confidence.`
    },
    {
      img: document,
      title: "Simple and easy to use",
      text: `Evergrow is the first all-in-one platform for green tax credits.
             We handle project sourcing, diligence, and management so you
             don’t have to, and we can work with any budget and timeline.`
    },
  ],
  form: {
    heading: "Let’s start a conversation",
    text: `Getting started is easy. Evergrow works for companies and financial institutions of all sizes. 
           Fill in this form to schedule a free, no-obligation consultation.`,
    buttonText: 'Get in touch'
  }
}
// Corporate page
export const corporatePageContent: ISolutionPageLayout = {
  textImage: {
    heading: `Finally, a net zero investment that makes a lot of cents`,
    text: `Invest in the business or sustainability? Now you don’t have to choose. With green tax credits,
         you boost after-tax cashflow and provide critical funding for clean energy in the United States.`,
    buttonText: `Get Started `,
    img: windmills,
  },
  list: [
    {
      img: solarPower,
      title: "Lead on climate",
      text: `Green tax credits are generated by clean energy and other climate-friendly assets in the United States,
           including solar, wind, and energy storage. By buying these credits through Evergrow, you provide critical 
           funding for these projects and position your company as a leader on climate change.`
    },
    {
      img: plant,
      title: "Cash positive & carbon negative",
      text: `Unlike RECs or offsets, green tax credits are a profitable investment that more than pay for themselves.
           By buying these credits at a discount to their face value, you can achieve significant savings on your 
           company’s tax bill, boosting after-tax profits and cashflow.`
    },
    {
      img: shield,
      title: "Safe, secure, and protected",
      text: `Large banks and financial institutions have used green tax credits for over a decade. With Evergrow,
           now you can too. And as an added layer of protection, all green tax credits on Evergrow are protected by 
           an insurance policy from a highly rated syndicate of insurers, so you can invest with confidence.`
    },
    {
      img: document,
      title: "Simple and easy to use",
      text: `Evergrow is the first all-in-one platform for green tax credits. We handle project sourcing, diligence,
           and management so you don’t have to, and we can work with any budget and timeline.`
    },
  ],
  form: {
    heading: "Let’s start a conversation",
    text: `Getting started is easy. Evergrow works for companies and financial institutions of all sizes. 
         Fill in this form to schedule a free, no-obligation consultation.`,
    buttonText: 'Get in touch'
  },
}
// Sponsors page
export const sponsorsPageContent: ISolutionPageLayout = {
  textImage: {
    heading: `Maximum value, minimum headache`,
    text: `Evergrow is the easiest way to monetize your project’s tax benefits, including the ITC, PTC, 45Q, and depreciation.`,
    buttonText: `Get Started `,
    img: batteries2,
  },
  list: [
    {
      img: work,
      title: "Tax equity or credit transfer? It’s up to you",
      text: `Every project is unique. Whether it’s a traditional tax equity structure or a simple credit transfer,
           Evergrow is your one-stop-shop for tax benefit monetization.`
    },
    {
      img: document,
      title: "Simple & fast underwriting",
      text: `Our modern platform streamlines the underwriting & diligence process to save you time and lower transaction costs.
           We handle insurance, transactions, and finding you the best price for your credits.`
    },
    {
      img: construction,
      title: "IRA compliance? Not a problem",
      text: `Evergrow is purpose-built for the Inflation Reduction Act. Our platform verifies prevailing wage and 
           apprenticeship compliance with data from your EPC and contractors, and we’ve partnered with leading insurers
           to cover the value of your credits.`
    },
    {
      img: solarPower,
      title: "Technology and credit agnostic",
      text: `Evergrow supports the full gamut of energy technologies that qualify for investment tax credits and
           production tax credits, including solar, wind, RNG, energy storage, geothermal, sustainable aviation fuel, 
           biofuels, hydrogen, and carbon capture. From 40B to 45Z to 48E, we’ve got you covered.`
    },
  ],
  form: {
    heading: "Let’s start a conversation",
    text: `Getting started is easy. Evergrow works for project developers of all sizes. 
         Fill in this form to schedule a free, no-obligation consultation.`,
    buttonText: 'Get in touch'
  },
}
// Banks page
export const banksPageContent: ISolutionPageLayout = {
  textImage: {
    heading: `A green investment strategy that you can bank on`,
    text: `Evergrow is the safest and easiest way to buy green tax credits. Earn high returns by investing in our 
         fully-insured tax credits and put your tax bill to work fighting climate change.`,
    buttonText: `Get Started `,
    img: batteries,
  },
  list: [
    {
      img: bank,
      title: "Don’t miss out",
      text: `Big banks have invested billions in green tax credits for over a decade. With Evergrow, now you can too.
           And as an added layer of protection, all green tax credits on Evergrow are protected by an insurance policy
           from a highly rated syndicate of insurers, so you can invest with confidence.`
    },
    {
      img: cash,
      title: "A safe way to invest bank capital",
      text: `Tax credits can be substituted directly in place of cash for payments to the IRS. By buying these credits at a 
           discount to their face value through Evergrow, you can achieve significant savings on your taxes, 
           earn high yields on your balance sheet, and boost after-tax cash flow`
    },
    {
      img: solarPower,
      title: "Lead on climate",
      text: `Green tax credits are generated by clean energy and other climate-friendly assets in the United States,
           including solar, wind, and energy storage. By buying these credits through Evergrow, you provide critical
           funding for these projects and position your bank as a leader on climate change.`
    },
    {
      img: document,
      title: "Simple and easy to use",
      text: `Evergrow is the first all-in-one platform for green tax credits. We handle project sourcing, diligence,
           and management so you don’t have to, and we can work with any budget and timeline.`
    },
  ],
  form: {
    heading: "Let’s start a conversation",
    text: `Getting started is easy. Evergrow works for companies and financial institutions of all sizes. 
         Fill in this form to schedule a free, no-obligation consultation.`,
    buttonText: 'Get in touch'
  },
}

// Contact us page
export const contactUsContent: IContactUsPageContent = {
  form: {
    heading: "Let’s start a conversation",
    text: `Getting started is easy. Evergrow works with companies, financial institutions, and project developers of all sizes. 
         Fill in this form to schedule a free, no-obligation consultation.`,
    buttonText: 'Get in touch'
  },
}