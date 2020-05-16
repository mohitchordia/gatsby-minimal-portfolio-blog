import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/main_image.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
I'm Mohit Chordia - Software Engineer Who likes to build new stuff.
I have confidence in my ability as a Engineer and a attitude to give 100% in my tasks , with the belief in life long approach
of learning and growing myself, As a Engineer. 

Progaming Languges that I have knowledge of are C++, Java, Kotlin, Python.
As a Android Developer I have experience using Android SDK, Firebase, JSON, RESTful APIs, XML, Material Design, Dagger, Android Testing, Retrofit, RxJava, MLkit
In field of Machine Learning things i have hands on experience are Python, Numpy, Pandas, MatplotLib, SciKitLearn, Tensorflow, OpenCV.
Apart from this i have used Java to build Application on top of both Spring Core and Spring MVC.

Ready to work with people who want to be as successful(according to Their defination) as I wanna be.
So that we as people can help each other grow and reach our destination. 
       </p>
        <img src={DisplayImage} alt={siteTitle} />
      </Layout>
    )
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
