import React from 'react'
import { Typography, Container } from '@material-ui/core'
import { useStyles } from '../styles/pages/PrivacyPolicy.styles'

function PrivacyPolicy(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.bg}>
      <Typography variant="h4" className={classes.h4}>
        Privacy Policy for Mona Tech
      </Typography>
      <Container maxWidth="md" className={classes.container}>
        <Typography className={classes.h4} component="h4">
          Privacy Policy
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Last updated: November 11, 2050
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          This Privacy Policy describes Our policies and procedures on the collection, use and
          disclosure of Your information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We use Your Personal data to provide and improve the Service. By using the Service, You
          agree to the collection and use of information in accordance with this Privacy Policy.
          This Privacy Policy has been created with the help of the Privacy Policy Generator.
        </Typography>
        <Typography className={classes.h4} component="h4">
          Interpretation and Definitions
        </Typography>

        <Typography className={classes.h5} component="h5">
          Interpretation
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </Typography>
        <Typography className={classes.h5} component="h5">
          Definitions
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          For the purposes of this Privacy Policy:
        </Typography>

        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Account </span>means a unique account created for
              You to access our Service or parts of our Service.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Company </span>
              (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to
              Monatech, LLC, Las Vegas, NV.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Cookies </span>are small files that are placed on
              Your computer, mobile device or any other device by a website, containing the details
              of Your browsing history on that website among its many uses.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Country </span>refers to: Nevada, United States
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Device </span>means any device that can access
              the Service such as a computer, a cellphone or a digital tablet.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Personal Data </span>
              is any information that relates to an identified or identifiable individual.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Service </span>refers to the Website.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Service Provider </span>
              means any natural or legal person who processes the data on behalf of the Company. It
              refers to third-party companies or individuals employed by the Company to facilitate
              the Service, to provide the Service on behalf of the Company, to perform services
              related to the Service or to assist the Company in analyzing how the Service is used.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Third-party Social Media Service </span>
              refers to any website or any social network website through which a User can log in or
              create an account to use the Service.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Usage Data </span>
              refers to data collected automatically, either generated by the use of the Service or
              from the Service infrastructure itself (for example, the duration of a page visit).
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Website </span>refers to monatech, accessible
              from http://www.monatech.com.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>You </span>means the individual accessing or
              using the Service, or the company, or other legal entity on behalf of which such
              individual is accessing or using the Service, as applicable.
            </Typography>
          </li>
        </ul>

        <Typography className={classes.h4} component="h4">
          Collecting and Using Your Personal Data
        </Typography>
        <Typography className={classes.h5} component="h5">
          Types of Data Collected
        </Typography>
        <Typography className={classes.h6} component="h6">
          Personal Data
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          While using Our Service, We may ask You to provide Us with certain personally identifiable
          information that can be used to contact or identify You. Personally identifiable
          information may include, but is not limited to:
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Email address
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              First name and last name
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Phone number
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Address, State, Province, ZIP/Postal code, City
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Usage Data
            </Typography>
          </li>
        </ul>

        <Typography className={classes.h6} component="h6">
          Usage Data
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Usage Data is collected automatically when using the Service.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Usage Data may include information such as Your Device's Internet Protocol address (e.g.
          IP address), browser type, browser version, the pages of our Service that You visit, the
          time and date of Your visit, the time spent on those pages, unique device identifiers and
          other diagnostic data.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          When You access the Service by or through a mobile device, We may collect certain
          information automatically, including, but not limited to, the type of mobile device You
          use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile
          operating system, the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We may also collect information that Your browser sends whenever You visit our Service or
          when You access the Service by or through a mobile device.
        </Typography>
        <Typography className={classes.h6} component="h6">
          Tracking Technologies and Cookies
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We use Cookies and similar tracking technologies to track the activity on Our Service and
          store certain information. Tracking technologies used are beacons, tags, and scripts to
          collect and track information and to improve and analyze Our Service. The technologies We
          use may include:
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Cookies or Browser Cookies. </span>A cookie is a
              small file placed on Your Device. You can instruct Your browser to refuse all Cookies
              or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You
              may not be able to use some parts of our Service. Unless you have adjusted Your
              browser setting so that it will refuse Cookies, our Service may use Cookies.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Flash Cookies. </span>
              Certain features of our Service may use local stored objects (or Flash Cookies) to
              collect and store information about Your preferences or Your activity on our Service.
              Flash Cookies are not managed by the same browser settings as those used for Browser
              Cookies. For more information on how You can delete Flash Cookies, please read "Where
              can I change the settings for disabling, or deleting local shared objects?" available
              at
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Web Beacons. </span>
              Certain sections of our Service and our emails may contain small electronic files
              known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel
              gifs) that permit the Company, for example, to count users who have visited those
              pages or opened an email and for other related website statistics (for example,
              recording the popularity of a certain section and verifying system and server
              integrity).
            </Typography>
          </li>
        </ul>
        <Typography className={classes.p} component="p" paragraph>
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your
          personal computer or mobile device when You go offline, while Session Cookies are deleted
          as soon as You close Your web browser. You can learn more about cookies here: All About
          Cookies by TermsFeed.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We use both Session and Persistent Cookies for the purposes set out below:
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Necessary / Essential Cookies</span>{' '}
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Type: Session Cookies
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Administered by: Us
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Purpose: These Cookies are essential to provide You with services available through
              the Website and to enable You to use some of its features. They help to authenticate
              users and prevent fraudulent use of user accounts. Without these Cookies, the services
              that You have asked for cannot be provided, and We only use these Cookies to provide
              You with those services.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Cookies Policy / Notice Acceptance Cookies</span>{' '}
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Type: Persistent Cookies
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Administered by: Us
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Purpose: These Cookies identify if users have accepted the use of cookies on the
              Website.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>Functionality Cookies</span>{' '}
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Type: Persistent Cookies
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Administered by: Us
            </Typography>
            <Typography className={classes.p} component="p" paragraph>
              Purpose: These Cookies allow us to remember choices You make when You use the Website,
              such as remembering your login details or language preference. The purpose of these
              Cookies is to provide You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website
            </Typography>
          </li>
        </ul>
        <Typography className={classes.p} component="p" paragraph>
          For more information about the cookies we use and your choices regarding cookies, please
          visit our Cookies Policy or the Cookies section of our Privacy Policy.
        </Typography>
        <Typography className={classes.h5} component="h5">
          Use of Your Personal Data{' '}
        </Typography>

        <Typography className={classes.p} component="p" paragraph>
          The Company may use Personal Data for the following purposes:
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>To provide and maintain our Service</span>,
              including to monitor the usage of our Service.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>To manage Your Account: </span>
              to manage Your registration as a user of the Service. The Personal Data You provide
              can give You access to different functionalities of the Service that are available to
              You as a registered user.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>For the performance of a contract: </span> the
              development, compliance and undertaking of the purchase contract for the products,
              items or services You have purchased or of any other contract with Us through the
              Service.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>To contact You: </span>
              To contact You by email, telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application's push notifications regarding updates or
              informative communications related to the functionalities, products or contracted
              services, including the security updates, when necessary or reasonable for their
              implementation.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>To provide You </span>
              with news, special offers and general information about other goods, services and
              events which we offer that are similar to those that you have already purchased or
              enquired about unless You have opted not to receive such information.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>To manage Your requests: </span>
              To attend and manage Your requests to Us.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>For business transfers: </span>
              We may use Your information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or transfer of some or all
              of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or
              similar proceeding, in which Personal Data held by Us about our Service users is among
              the assets transferred.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>For other purposes: </span>
              We may use Your information for other purposes, such as data analysis, identifying
              usage trends, determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing and your experience.
            </Typography>
          </li>
        </ul>
        <Typography className={classes.p} component="p" paragraph>
          We may share Your personal information in the following situations:{' '}
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>With Service Providers: </span>
              We may share Your personal information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>For business transfers: </span>
              We may share or transfer Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>With Affiliates: </span> We may share Your
              information with Our affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company and any other
              subsidiaries, joint venture partners or other companies that We control or that are
              under common control with Us.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>With business partners: </span>
              We may share Your information with Our business partners to offer You certain
              products, services or promotions.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>With other users: </span>
              when You share personal information or otherwise interact in the public areas with
              other users, such information may be viewed by all users and may be publicly
              distributed outside. If You interact with other users or register through a
              Third-Party Social Media Service, Your contacts on the Third-Party Social Media
              Service may see Your name, profile, pictures and description of Your activity.
              Similarly, other users will be able to view descriptions of Your activity, communicate
              with You and view Your profile.
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              <span style={{ fontWeight: 'bold' }}>With Your consent: </span>
              We may disclose Your personal information for any other purpose with Your consent.
            </Typography>
          </li>
        </ul>

        <Typography className={classes.h5} component="h5">
          Retention of Your Personal Data
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          The Company will retain Your Personal Data only for as long as is necessary for the
          purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the
          extent necessary to comply with our legal obligations (for example, if we are required to
          retain your data to comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          The Company will also retain Usage Data for internal analysis purposes. Usage Data is
          generally retained for a shorter period of time, except when this data is used to
          strengthen the security or to improve the functionality of Our Service, or We are legally
          obligated to retain this data for longer time periods.
        </Typography>
        <Typography className={classes.h5} component="h5">
          Transfer of Your Personal Data
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Your information, including Personal Data, is processed at the Company's operating offices
          and in any other places where the parties involved in the processing are located. It means
          that this information may be transferred to — and maintained on — computers located
          outside of Your state, province, country or other governmental jurisdiction where the data
          protection laws may differ than those from Your jurisdiction.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Your consent to this Privacy Policy followed by Your submission of such information
          represents Your agreement to that transfer.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          The Company will take all steps reasonably necessary to ensure that Your data is treated
          securely and in accordance with this Privacy Policy and no transfer of Your Personal Data
          will take place to an organization or a country unless there are adequate controls in
          place including the security of Your data and other personal information.
        </Typography>
        <Typography className={classes.h5} component="h5">
          Disclosure of Your Personal Data
        </Typography>
        <Typography className={classes.h6} component="h6">
          Business Transactions
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may
          be transferred. We will provide notice before Your Personal Data is transferred and
          becomes subject to a different Privacy Policy.
        </Typography>
        <Typography className={classes.h6} component="h6">
          Law enforcement
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Under certain circumstances, the Company may be required to disclose Your Personal Data if
          required to do so by law or in response to valid requests by public authorities (e.g. a
          court or a government agency).
        </Typography>
        <Typography className={classes.h6} component="h6">
          Other legal requirements
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          The Company may disclose Your Personal Data in the good faith belief that such action is
          necessary to:
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Comply with a legal obligation{' '}
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Protect and defend the rights or property of the Company
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Prevent or investigate possible wrongdoing in connection with the Service
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Protect the personal safety of Users of the Service or the public
            </Typography>
          </li>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              Protect against legal liability
            </Typography>
          </li>
        </ul>

        <Typography className={classes.h5} component="h5">
          Security of Your Personal Data
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          The security of Your Personal Data is important to Us, but remember that no method of
          transmission over the Internet, or method of electronic storage is 100% secure. While We
          strive to use commercially acceptable means to protect Your Personal Data, We cannot
          guarantee its absolute security.
        </Typography>

        <Typography className={classes.h4} component="h4">
          Your California Privacy Rights (California's Shine the Light law)
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Under California Civil Code Section 1798 (California's Shine the Light law), California
          residents with an established business relationship with us can request information once a
          year about sharing their Personal Data with third parties for the third parties' direct
          marketing purposes.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          If you'd like to request more information under the California Shine the Light law, and if
          You are a California resident, You can contact Us using the contact information provided
          below.
        </Typography>
        <Typography className={classes.h4} component="h4">
          California Privacy Rights for Minor Users (California Business and Professions Code
          Section 22581)
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          California Business and Professions Code section 22581 allow California residents under
          the age of 18 who are registered users of online sites, services or applications to
          request and obtain removal of content or information they have publicly posted.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          To request removal of such data, and if You are a California resident, You can contact Us
          using the contact information provided below, and include the email address associated
          with Your account.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Be aware that Your request does not guarantee complete or comprehensive removal of content
          or information posted online and that the law may not permit or require removal in certain
          circumstances.
        </Typography>

        <Typography className={classes.h4} component="h4">
          Links to Other Websites
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          Our Service may contain links to other websites that are not operated by Us. If You click
          on a third party link, You will be directed to that third party's site. We strongly advise
          You to review the Privacy Policy of every site You visit.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We have no control over and assume no responsibility for the content, privacy policies or
          practices of any third party sites or services.
        </Typography>
        <Typography className={classes.h4} component="h4">
          Changes to this Privacy Policy
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We may update Our Privacy Policy from time to time. We will notify You of any changes by
          posting the new Privacy Policy on this page.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          We will let You know via email and/or a prominent notice on Our Service, prior to the
          change becoming effective and update the "Last updated" date at the top of this Privacy
          Policy.
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          You are advised to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </Typography>
        <Typography className={classes.h4} component="h4">
          Contact Us
        </Typography>
        <Typography className={classes.p} component="p" paragraph>
          If you have any questions about this Privacy Policy, You can contact us:
        </Typography>
        <ul>
          <li>
            <Typography className={classes.p} component="p" paragraph>
              By email: privacy@monatech.com
            </Typography>
          </li>
        </ul>
      </Container>
    </div>
  )
}
export default PrivacyPolicy
