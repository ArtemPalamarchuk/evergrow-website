import {banks, corporateFinance, netZero, sponsors} from "@/assets/images";
import {person1, person2, person3, person4, person5, person6, person7} from "@/assets/images";
import {aboutTaxes1, aboutTaxes2, aboutTaxes3, aboutTaxes4} from "@/assets/images";

//Main page
export const heroContent = {
  heading: `Save money on taxes. Fight climate change.`,
  subHeading: `It’s that simple.`,
  text: `Evergrow helps companies and financial institutions buy green tax credits. Earn attractive IRRs on idle cash,
         boost earnings, and lead on climate change, all at once.`,
  buttonTitle: 'Get Started',
}
export const resourcesContent = {
  heading: `As seen on:`,
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
      path: '/taxes',
    },
    {
      title: "Corporate net-zero",
      text: 'Provide mission-critical funding to highly additional projects in the United States while also turning a profit.',
      img: corporateFinance,
      path: '/net-zero',
    },
    {
      title: "Banks & financial institutions",
      text: 'Invest in high-yield, low-risk tax credits to bolster both your financial returns and impact story.',
      img: banks,
      path: '/contractors',
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
  text: `Our mission is to help build and sustain a carbon-neutral world. We use technology to create products that
         unlock funding for decarbonization and provide compelling risk-adjusted returns for our partners.`,
  buttonText: `Learn more about us`,
}

//About page
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
  buttonText: 'Get in touch',
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
    {img: person1, title: 'James Richards', text: 'CEO'},
    {img: person2, title: 'Cassandra Xia', text: 'Head of Engineering'},
    {img: person3, title: 'Charles Stone', text: 'Strategic Finance Lead'},
    {img: person4, title: 'Zoe Savellos', text: 'Chief of Staff'},
    {img: person5, title: 'Arun Prasad', text: 'Staff Software Engineer'},
    {img: person6, title: 'Neal Donnelly', text: 'Business Development Lead'},
    {img: person7, title: 'Marrissa His', text: 'Executive Business Partner'},
  ]
}

//Taxes page
export const taxesHeroContent = {
  heading: `Lower your tax bill (and the temperature)`,
  text: `Evergrow is the safest and easiest way to buy green tax credits. 
         Earn high IRRs on cash in treasury, boost after-tax cashflow, 
         and put your tax dollars to work fighting climate change.`,
  buttonText: `Get Started `
}
export const aboutTaxesContent = [
  {
    img: aboutTaxes1,
    title: "Less tax, more cash",
    text: `Tax credits can be paid to the IRS directly instead of cash.
           By buying these credits at a discount to their face value through Evergrow,
           you can achieve significant savings on your taxes, earn high IRRs on cash
           in treasury, and boost after-tax cashflow.`
  },
  {
    img: aboutTaxes2,
    title: "Lead on climate",
    text: `Green tax credits are generated by clean energy and other climate-friendly
           assets in the United States, including solar, wind, and carbon capture.
           By buying these credits through Evergrow, you provide critical funding
           for these projects and position your company as a leader on climate change.`
  },
  {
    img: aboutTaxes3,
    title: "Safe, secure, and protected",
    text: `Large banks and financial institutions have used green tax credits
           for over a decade. With Evergrow, now you can too. And as an added
           layer of protection, all green tax credits on Evergrow are protected
           by an insurance policy from a highly rated syndicate of insurers,
           so you can invest with confidence.`
  },
  {
    img: aboutTaxes4,
    title: "Simple and easy to use",
    text: `Evergrow is the first all-in-one platform for green tax credits.
           We handle project sourcing, diligence, and management so you
           don’t have to, and we can work with any budget and timeline.`
  },
]
export const taxesJoinUsContent = {
  heading: "Let’s start a conversation",
  text: `Getting started is easy. Evergrow works for companies and financial institutions of all sizes. 
         Fill in this form to schedule a free, no-obligation consultation.`,
  buttonText: 'Get in touch'
}

