import React, { Suspense, lazy } from 'react'
import Spinner from '../../components/spinners/Spinner'

const ContactForm = lazy(() => import('../../components/forms/ContactForm'))

function Contact() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ContactForm />
      </Suspense>
    </>
  )
}

export default Contact
