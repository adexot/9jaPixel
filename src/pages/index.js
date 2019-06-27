import React from 'react'
import { Link } from 'gatsby'
// import Img from "gatsby-image"

import Layout from '../components/Layout/layout'
import Pixel from '../components/Pixel';
import Button from '../components/Button';
import './index.scss';

const IndexPage = ({data}) => (
  <Layout>
    <main>
      <section className='top'>
        <div>
          {/* <Img fixed={data.bg.childImageSharp.fixed}/> */}
        </div>
        <nav className='navBar'>
          <Link to='/'>9jaPixel</Link>
          <ul className='socialIcons'>
            <li><Link to='/instagram'>Instagram</Link></li>
            <li><Link to='/twitter'>Twitter</Link></li>
          </ul>
          <span className='hamburger'></span>
        </nav>
        <div className='row'>
          <div className='box box-left'>
            <div className='textContainer'>
              <h1>Find Naija related Illustrations and Images here.</h1>
            </div>
          </div>
          <div className='box box-right'>
            <p>Click a Category you want to select from.</p>
            <div className='buttonContainer'>
              {new Array(9).fill(1).map((title, index) => <Button title={title} />)}
            </div>
          </div>
        </div>
      </section>
      <section className='listing'>
        <h3>All Categories</h3>
        <div className='listingContainer'>
          {new Array(6).fill(1).map((_, index) => <Pixel />)}
        </div>
        <p>Free to use on both commercial and personal projects</p>
      </section>
    </main>
  </Layout>
)

// export const query = graphql`
// query {
//   bg: file(relativePath: { eq: "../images/bg.png" }) {
//     childImageSharp {
//       fixed(width: 400) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }
// `;

export default IndexPage
