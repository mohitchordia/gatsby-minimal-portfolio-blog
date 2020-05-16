import React from 'react'
import { FaAward, FaPaperPlane } from 'react-icons/fa'

import Image1 from './../assets/images/image1.jpg'
import Image2 from './../assets/images/image2.jpg'
import Image3 from './../assets/images/image3.jpg'

const data = [

  {
    date: 'April 2020',
    headline: 'First App',
    description: `Published my first app(MY RAIPUR) as a individual android developer.
    It was a Contract project, So delivered to my first client as well `,
    image: Image1,
    icon: <FaAward />,
  },
  
  {
    date: 'August 2018',
    headline: 'First Job',
    description: `From College placement I got placed in Accenture.
    August 2018 was a month I started my journey as a Software Engineer`,
    image: Image1,
    icon: <FaAward />,
  },


  {
    date: 'June 2018',
    headline: 'Graduation',
    description: `Completed 4 years of Engineering, 
    Finally became an Engineer the reason I came to city of Bengaluru .`,
    image: Image3,
    icon: <FaPaperPlane />,
  },

  {
    date: 'March 2018',
    headline: 'First Internship',
    description: `Got my first Internship in Boxx.ai, learned a lot,
    got to first hand experience the startup culture`,
    image: Image1,
    icon: <FaAward />,
  },
]

export default data
