import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

const PageAbout = props => (
  <Layout {...props}>
    <Seo title='About' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="About"
          subheader='Prolong services is a full-service IT providers which provide effective business solution in designing, development and marketing. We help client overcome their most critical and complex business challenges. We are comprised of professional and experienced strategist, technologist, creative designers, developer and digital marketers. And together we form effective and meaningful solution for business and brands.'
        />
        <Divider />
        <div>
          <p>We are a team of passionate professionals who love working with businesses to help them grow and succeed. We believe that business solutions should be effective, efficient, and affordable. Our team is composed of seasoned IT experts with a wealth of experience providing top-notch service to businesses of all sizes. We take our work seriously and are committed to providing the best possible solution for each and every client. Thank you for considering us as your go-to provider for all your IT needs!</p>
          <p>Our mission is to provide the best possible business solutions to our customers. We do this by providing effective, long-term IT services. Our team of experts is dedicated to helping you stay ahead of the curve and keep your business running smoothly. We understand that a successful business depends on reliable technology, so we go above and beyond to ensure that your systems are always up and running. Contact us today to learn more about how we can help your organization stay competitive.</p>
          <p>We are a team of experts, who have passion for our work. We continuously strive for excellence in every aspect of our service, from customer service to technology innovation. Our goal is to help businesses grow and prosper.</p>
        </div>
      </Main>
      <Sidebar>
        <Commitment />
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>
)

export default PageAbout
