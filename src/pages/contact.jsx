import React from 'react'
import { Container } from 'react-bootstrap';

export default function contact() {
  return (
    <div>
      <header className="bg-secondary">
        <Container className="mh200 d-flex justify-content-center align-items-center flex-column maxW800 text-white">
          <h2 className="py-3">Contact form</h2>
          <p>
            At QRfy, we are here to help you with everything related to QR
            codes. If you have any questions or concerns, please fill out the
            form and our team will contact you as soon as possible.
          </p>
        </Container>
      </header>
      <main className="">
        <form action="" method="" className="maxW800 m-auto py-5">
          <div className="form-group py-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              email="email"
              id="email"
              className="form-control"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div className="form-group py-2">
            <label htmlFor="subject">Subject</label>
            <select name="subject" id="subject" className="form-control">
              <option value="technical">Technical question</option>
              <option value="adminstrative">Adminstrative question</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group py-2">
            <label htmlFor="question">Question/Enquiry</label>
            <textarea
              name="question"
              id="question"
              className="form-control"
              placeholder="Enter your text..."></textarea>
          </div>
          <div className="form-group py-2`">
            <button type="submit" className='btn btn-outline-secondary'>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}
