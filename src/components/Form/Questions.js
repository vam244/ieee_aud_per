const questions = [
  {
    type: "text-group",
    questions: [
      { type: "text", label: "Full Name:" },
      {
        type: "radio",
        label: "Year of Study:",
        options: ["1st Year", "2nd Year"],
      },
      {
        type: "text",
        label: "Whatsapp Number:",
      },
    ],
  }, 
  {
    type: "radio",
    label: "Department:",
    options: [
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Biotechnology",
      "Chemical Engineering",
      "Metallurgical and Material Engineering",
      "Chemistry",
    ],
  },
  {
    type: "range",
    label: "Rate yourself out of 10 (10 being highest and 1 being lowest)",
    options: [
      " Time mangement",
      "confidence",
      "ego",
      "hardwork",
      "creativity",
      "teamwork",
      "Leadership",
      "Intelligence",
    ],
  },
  {
    type: "multi-radio",
    label: "Interested In:",
    options: [
      "Graphic Design",
      "Event Mangement & content writing",
      "Web Development ",
      "Robotics/hardware",
      "Video Editing",
    ],
  },
  {
    type: "essay",
    label:
      "Q1. What are your club preferences amongst all the clubs that the college has?",
      
  },
  // {
  //   type: "essay",
  //   label:
  //     "Q2. Imagine you are an astronaut and you are lost somewhere in the space There are 10 glasses of water and one of them is poisoned and you have a rat to sample check which one is poisoned and the poison works after 10 hours of drinking you have 24 hrs to live you'll die if you don't drink water before that time. how will you find the glass which is poisoned. Gravity on that place is 1.5 times that of earth?",
  // },
  // {
  //   type: "image",
  //   src: "../../images/ques.png",
  //   label:
  //     "Q3. Find the missing number here and also, share your solution approach.",
    
  // },
  {
    type: "essay",
    label:
      "Q2. You have two options for your future either to Join a Technical Company with a 25 LPA Package or go for higher studies (more than 3 years of hard work)that will guarantee you an 80 LPA Package in a better MNC. Which one will you choose and why?",
  },
  {
    type: "essay",
    label:
      "Q3. How would you deal with conflict with your fellow clubmate?",
  },
  {
    type: "essay",
    label:
      "Q4. Can we call a calculator a computer",
  },
  {
    type: "essay",
    label:
      "Q5. What kind of events/workshops/webinars would you like us to organize? Do you think it will be beneficial for the club and why?",
  },
  // {
  //   type: "essay",
  //   label:
  //     "Q8. Lateral thinking is the ability to look at a problem from a different perspective and come up with a new solution. Have you ever come across such a problem where you came up with a creative solution? If yes, then state the problem and your solution.",
  // },
  {
    type: "essay",
    label: "Q6. What is one superstition or fear you've never told anyone?",
  },
  {
    type: "essay",
    label:
      "Q7. What if everyone on earth jumped at once?",
  },
  {
    type: "essay",
    label:
      "Q8. You have a crush on a good friend of yours, who is reluctant to audition for IEEE SB NITDGP. After a lot of convincing, she/he eventually auditions for IEEE SB NITDGP. You make it to the next round with positive feedback. However, your crush is not selected after the first interview round and is very upset, developing negative thoughts about the club. How would you navigate this situation and maintain your friendship with them while also striving to do your best in the next round of the audition?",
      
  },
];

export default questions;
