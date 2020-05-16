import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import resume from '../assets/RESUME_MOHIT_CHORDIA.pdf'
import Layout from '../components/Layout'
import contactData from './../data/contact'

class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Contact | ${siteTitle}`}
        />

        <h2>Contact</h2>
        <br />

        {Object.keys(contactData).map(key => {
          if (contactData[key]) {
            return (
              <p>
                <b>{key}: </b>
                <a href={contactData[key]} target="_new">
                  {contactData[key]}
                </a>
              </p>
            )
          }
        })}
       
        <a href={resume} download="RESUME_MOHIT_CHORDIA.pdf">Click For MY CV</a>

      
      </Layout>
    )
  }
}

export default Contact

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
