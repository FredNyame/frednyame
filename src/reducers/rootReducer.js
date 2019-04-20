import GsenBanner from '../asserts/images/gsenabovefold.jpg';
import GsenLogo from '../asserts/images/gsenprojectlogo.png';
import GsenFullPage from '../asserts/images/gsenmainhome.png';
import GsenMobile from '../asserts/images/gsenprojectmobile.png';
import ShipBanner from '../asserts/images/Shipmain.jpg';
import ShipLogo from '../asserts/images/Shiplogo.png';
import ShipFullPage from '../asserts/images/ShipFull.jpg';
import ShipMobile from '../asserts/images/Shipmobile.jpg';
import ChurchBanner from '../asserts/images/Churchmain.jpg';
import ChurchFullPage from '../asserts/images/ChurchFull.jpg';
import LadcomBanner from '../asserts/images/ladcomhome.png';
import LadcomFullPage from '../asserts/images/ladcomfullpage.png';


//array of all needed images
const titleImages = [GsenBanner, ShipBanner, ChurchBanner, LadcomBanner];
const logos = [GsenLogo, ShipLogo];
const homePages = [GsenFullPage, ShipFullPage, ChurchFullPage, LadcomFullPage];
const phoneScreens = [GsenMobile, ShipMobile];

//init state
const initState ={
  bannerText: [
    {
      id: 1,
      heading: 'Front-end developer & UI designer based in Buffalo, New York. Currently a freelancer shaping ideas into product people love.', 
      subHeading: 'If you have any projects or opportunites',
      cta: 'click here'
    },
    {
      id: 2,
      heading: 'Projects',
      subHeading: 'Browse through all portfolio projects done so far'
    }
  ],
  portfolioimages: [
    {
      id: 1,
      title: 'Ghana Soccer Education Network',
      github: '',
      site: 'http://www.gsen.ga',
      titleImage: titleImages[0],
      firstService: 'Web Design',
      secondService: 'Web Development',
      starting: 'Ghana Soccer Education Network is a non-profit organization that recruit student-athlete in Ghana and other African countries. They wanted a website that will provide information on what they do and a place where aspiring student-athlete can contact them.',
      logo: logos[0],
      summary: 'A fully customizable website was created for them to be able to easily manage their content. Their website was designed and created with the capability of it been able to be used in places with poor internet connection.',
      homePage: homePages[0],
      mobile: 'The Website needed to embody smart phone, desktop and tablet operation with the user having the same experience irrespective of device. The site is also totally scalable for future developments and brand growth and extension.',
      phone: phoneScreens[0]
    },
    {
      id: 2,
      title: 'Global Elite',
      github: '',
      site: '',
      titleImage: titleImages[1],
      firstService: 'Web Design',
      secondService: 'Web Development',
      starting: 'Shipping Co Inc is a shipping company. They wanted a website that will showcase their services and an easy to fill out form that will handle the tedious writing and displacement of hand written items for their clients on paper during shipment.',
      logo: logos[1],
      summary: 'The website for Shipping Co Inc is used to help their client to fill out their pick up form which is link to their Trello to help manage their leads and also help properly organized their contacts and items that are going to be shipped.',
      homePage: homePages[1],
      mobile: 'The Website needed to embody smart phone, desktop and tablet operation with the user having the same experience irrespective of device. The site is also totally scalable for future developments and brand growth and extension.',
      phone: phoneScreens[1]
    },
    {
      id: 3,
      title: 'Dominion Church International',
      github: '',
      site: '',
      titleImage: titleImages[2],
      firstService: 'Web Design',
      secondService: '',
      starting: 'Mylake.it is a service to help tourists to find the best place to eat, practice sport and have fun in the area around the lake of Garda. The lake is the biggest lake in Italy and is characterized by a big presence of tourist during the summer months.',
      logo: '',
      summary: '',
      homePage: homePages[2],
      mobile: '',
      phone: ''
    },
    {
      id: 4,
      title: 'Ladcom10 Enterprise',
      github: '',
      site: 'https://www.ladcom10.com',
      titleImage: titleImages[3],
      firstService: 'Web Design',
      secondService: 'Web Development',
      starting: 'Ghana Soccer Education Network is a non-profit organization that recruit student-athlete in Ghana and other African countries. They wanted a website that will provide information on what they do and a place where aspiring student-athlete can contact them.',
      logo: '',
      summary: '',
      homePage: homePages[3],
      mobile: '',
      phone: ''
    }
  ]
}

//root reducer to handle state update and action control
const rootReducer = (state = initState, action)=>{
  return state;
}

export default rootReducer;