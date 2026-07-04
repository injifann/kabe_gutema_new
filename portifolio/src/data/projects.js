import pro1image1 from '../assets/images/dashboard2.png'
import pro1image2 from '../assets/images/addform.png'
import pro1image3 from '../assets/images/updateform.png'
import pro2image1 from '../assets/images/Dashboard.png'
import pro2image2 from '../assets/images/Login.png'
import pro2image3 from '../assets/images/Register.png'


export const projects = [
    {   id:1,
        title: "ReadTrack MERN App",
        description:"A full-stack MERN application that allows users to track books they have read. Users can create, view, update, and delete their reading list.",
        images:[pro1image1,pro1image2,pro1image3],
        techStack:["React","Express","MongoDb","Node.js","Tailwind css"],
        liveurl:"",
        githublink:"https://github.com/injifann/readtrack-mernapp"
    },

        {id:2,
        title: "MERN Authentication",
        description:"A secure authentication system built with the MERN stack. Features include user registration, login, JWT authentication, and Google OAuth sign-in.",
        images:[pro2image1,pro2image2,pro2image3],
        techStack:["React","Express","MongoDb","Node.js","Tailwind css"],
        liverl:"",
        githublink:"https://github.com/injifann/authentication_mern"
    }
]

