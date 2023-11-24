import OSImg from "../images/projectSS/One24OS-portfolio.png";
import WhatsappClone from "../images/projectSS/Whatsapp-portfolio.png";
import zomatoClone from "../images/projectSS/zomato-portfolio.png";
import yogaApp from "../images/projectSS/Yoga-app.png";
import newsApplication from "../images/projectSS/NewsApplication.png";
import todoApplication from "../images/projectSS/todo-app.png";

const portfolios = [
  {
    id: "01",
    imgUrl: OSImg,
    category: "Web-Dev",
    title: "One24 OS",
    description: "One24-OS is a next-gen POS system by which a seller or the store owner can check their regular states of the sale, inventory, stock, bill, report, user-details, pricing, repair, customer, quality-control inspection, etc. with a synchronised and UI-friendly manner.",
    technologies: ["ReactJS", "Tailwind css", "NodeJS", "ExpressJS", "MongoDB"],
    siteUrl: "https://one24os.com/",
  },
  {
    id: "02",
    imgUrl: zomatoClone,
    category: "Web-Dev",
    title: "Zomato Clone",
    description: "Zomato-Clone is a clone of Zomato web UI. It includes information, menus and  user-reviews of restaurants as well as food delivery options from partner restaurants in more than 1000 Indian cities and towns.",
    technologies: ["ReactJS", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/imgeekrahul/zomato-clone",
  },
  {
    id: "03",
    imgUrl: WhatsappClone,
    category: "Web-Dev",
    title: "Whatsapp Clone",
    description: "Whatsapp Clone is a real-time whatsapp web-based clone with having Google oAuth login functionality infra and a real-time chat system with the funcationality of sharing both texts and files",
    technologies: ["ReactJS", "Tailwind css", "NodeJS", "MongoDB", "SocketIO", "OAuth Tools"],
    siteUrl: "https://github.com/imgeekrahul/whatsapp-clone",
  },
  {
    id: "04",
    imgUrl: yogaApp,
    category: "App-Dev",
    title: "Yoga App",
    description: "Yoga App is a mobile application by which a user can set their regular routine of Yoga. It includes yoga for weight-loss, strength, and flexibility.",
    technologies: ["Dart", "Flutter", "Third-part APIs", "Figma"],
    siteUrl: "https://github.com/imgeekrahul/Yoga-App",
  },
  {
    id: "05",
    imgUrl: newsApplication,
    category: "App-Dev",
    title: "News Application",
    description: "News Application is a mobile based news application like inShorts. It will provide short summary of every news and user can right swipe or left-swipe to get more news insights.",
    technologies: ["Dart", "Flutter", "Open APIs", "Figma"],
    siteUrl: "#https://github.com/imgeekrahul/News-Application",
  },
  {
    id: "06",
    imgUrl: todoApplication,
    category: "App-Dev",
    title: "To-Do Application",
    description: "Todo Application is an application which helps user's to increase their productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management as well as workflow.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/imgeekrahul/TO_DO-Application",
  },
  // {
  //   id: "07",
  //   imgUrl: portfolioImg07,
  //   category: "Web Dev",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Dev",
  //   title: "Finance Technology Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Ux",
  //   title: "Video Conference Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "10",
  //   imgUrl: portfolioImg03,
  //   category: "Ux",
  //   title: "File Sharing Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "11",
  //   imgUrl: portfolioImg04,
  //   category: "Web Dev",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Dev",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Dev",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];

export default portfolios;