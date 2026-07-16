// import pro1image1 from '/kabe_gutema_new/images/dashboard2'
// import pro1image2 from '../assets//kabe_gutema_new/images/addform.png'
// import pro1image3 from '../assets/images/updateform.png'
// import pro2image1 from '../assets/images/Dashboard.png'
// import pro2image2 from '../assets/images/Login.png'
// import pro2image3 from '../assets/images/Register.png'



export const projects = [

  {
    id: 3,
    title: "Poultry E-Commerce",
    description:
      "A full-stack MERN e-commerce application for poultry products featuring separate user and admin interfaces. Includes product and category management, shopping cart, order processing, address management, image uploads with Cloudinary, inventory validation, and secure JWT & Google OAuth authentication.",
    images: ['/kabe_gutema_new/images/productdetailspage.png','/kabe_gutema_new/images/shoppage.png','/kabe_gutema_new/images/profilepage.png','/kabe_gutema_new/images/adminproductpage.png','/kabe_gutema_new/images/adminusermanagement.png','/kabe_gutema_new/images/cartpage.png'],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Cloudinary"
    ],
    liveurl: "https://mern-poulty-ecommerce-rosy.vercel.app",
    githublink: "https://github.com/injifann/mern_poulty_ecommerce"
},
    
  {   id:1,
        title: "ReadTrack MERN App",
        description:"A full-stack MERN application that allows users to track books they have read. Users can create, view, update, and delete their reading list.",
        images:['/kabe_gutema_new/images/dashboard2.png','/kabe_gutema_new/images/addform.png','/kabe_gutema_new/images/Login.png'],
        techStack:["React","Express","MongoDb","Node.js","Tailwind css"],
        liveurl:"",
        githublink:"https://github.com/injifann/readtrack-mernapp"
    },

        {id:2,
        title: "MERN Authentication",
        description:"A secure authentication system built with the MERN stack. Features include user registration, login, JWT authentication, and Google OAuth sign-in.",
        images:['/kabe_gutema_new/images/Dashboard.png','/kabe_gutema_new/images/Register.png','/kabe_gutema_new/images/updateform.png'],
        techStack:["React","Express","MongoDb","Node.js","Tailwind css"],
        liveurl:"",
        githublink:"https://github.com/injifann/authentication_mern"
    },
    
]

