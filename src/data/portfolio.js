import Image1 from './../assets/images/image1.jpg'
import Pronounce from './../assets/images/Pronounce.jpg'
import myraipur from './../assets/images/myraipur.jpg'

const data = [
  {
    title: 'My Raipur',
    website: 'https://play.google.com/store/apps/details?id=com.occapp.myraipurcg04',
    description: ` MY Raipur is a business directory App for business in Raipur. 
    Made for a client(JB Marketing). Used Firebase Database To provide Realtime update
    of the coming data in the app`,
    image: myraipur,
  },
  {
    title: 'Pronounce',
    website: 'https://play.google.com/store/apps/details?id=com.occapp.tale',
    description: ` Pronounce is a interactive way for people who are speaking Hindi and tamil 
    Learn English pronounciation. 
    This app gives user the independence to know the common terms in English, 
    Just by speaking equivalent Hindi or tamil input into there Mobile Device `,
    image: Pronounce,
  },
  {
    title: 'Vehicle Anomaly Detection',
    website: 'https://github.com/mohitchordia/TrafficAnomalyDetection',
    description: ` This project was made as a part of our college final year project.
    Its a system made in matlab which detect common traffic anomolies like over speeding and check if vehicle 
    follows left hand first rule in an intersection without signal.`,
    image: Image1,
  },
]

export default data
