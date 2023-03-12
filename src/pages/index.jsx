import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CheckCircle,
  QrCodeScan,
  BarChart,
  BrowserChrome,
  QrCode,
} from "react-bootstrap-icons";

export default function index() {
  return (
    <main>
      {/* SECTION 1 */}
      <section
        className={`section1 ${styles.section1} bg-secondary py-4 text-white`}>
        <Container
          className={`d-lg-flex gap-5 ${styles.minH} align-items-center`}>
          <div
            className={`left ${styles.flex1} h-100 d-flex flex-column justify-content-center gap-3 py-4`}>
            <div className="info display-6">
              Create your own QR codes and boost your business or idea.
            </div>
            <p>
              Easily generate, manage and statistically track your QR codes.
            </p>
            <Link
              href={"/qr-code-generator"}
              className={`btn btn-outline-light`}>
              Create QR Code
            </Link>
          </div>
          <div className={`right ${styles.flex1}`}>
            <Image src={"/img/hero.webp"} alt="hero" width={500} height={300} />
          </div>
        </Container>
      </section>

      {/* SECTION 2 */}
      <section className="section2 py-5">
        <Container
          className={`d-xl-flex ${styles.minH} align-items-center gap-3 flex-wrap py-2`}>
          <div className={`left ${styles.flex1} p-3`}>
            <h3 className="top py-2">MyQr makes you excel</h3>
            <div className="mid py-2">
              If you want to create your own QR code, a good tool for doing so
              is the MyQR QR generator, due to its ease of use and all the
              options it offers to make your ideas come true or your business
              grow.
            </div>
            <div className="bottom">
              <Row>
                <Col md={6}>
                  <div className="py-1">
                    <CheckCircle color="grey" size={20} />
                    <span className="mx-2">Unlimited QR codes</span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="py-1">
                    <CheckCircle color="grey" size={20} />
                    <span className="mx-2">Add multiple users</span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="py-1">
                    <CheckCircle color="grey" size={20} />
                    <span className="mx-2">Scan without limits</span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="py-1">
                    <CheckCircle color="grey" size={20} />
                    <span className="mx-2">Complete monitoring</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div
            className={`right ${styles.flex2} d-flex flex-wrap gap-4 justify-content-center`}>
            <div
              className={`${styles.dBox} border shadow p-2 rounded rounded-2`}>
              <QrCode size={40}></QrCode>
              <div className="d-flex flex-column justify-content-center align-items-center py-2">
                <h4>Dynamic QR codes</h4>
                <p>
                  You can edit and manage the content without printing them
                  again.
                </p>
              </div>
            </div>

            <div
              className={`${styles.dBox} border shadow p-2 rounded rounded-2`}>
              <BarChart size={40}></BarChart>
              <div className="d-flex flex-column justify-content-center align-items-center py-2">
                <h4>Complete statistics</h4>
                <p>Exports all the information of the scans they have done.</p>
              </div>
            </div>

            <div
              className={`${styles.dBox} border shadow p-2 rounded rounded-2`}>
              <QrCodeScan size={40}></QrCodeScan>
              <div className="d-flex flex-column justify-content-center align-items-center py-2">
                <h4>Multiple landing pages</h4>
                <p>Code customization with our design tool.</p>
              </div>
            </div>

            <div
              className={`${styles.dBox} border shadow p-2 rounded rounded-2`}>
              <BrowserChrome size={40}></BrowserChrome>
              <div className="d-flex flex-column justify-content-center align-items-center py-2">
                <h4>Customize your QR code</h4>
                <p>Customize your QR with your logo, colors and shapes.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* SECTION 3 */}
      <section className="section3 py-5 bg-secondary">
        <div className="text-center">
          <div className={`top py-3 ${styles.s3top}`}>What to know to get started.</div>
          <div className="desc py-3 fs1-2">
            In this section you will find the basic concepts and the necessary
            steps to start enjoying the benefits of using QR.
          </div>
        </div>
        <Container>
          <Row>
            <Col className="left" lg={5}>
              <Image
                src={"/img/qr2.webp"}
                alt="Qr code"
                width={400}
                height={400}
              />
            </Col>
            <Col className="right d-flex justify-content-center align-items-center"lg={7}>
              {/* Accordion */}
              <Accordion className="w-100">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is a QR Code?</Accordion.Header>
                  <Accordion.Body>
                    The term “QR” stands for “quick response” and refers to
                    instant access to the information contained in the Code. It
                    is, in short, the evolution of the barcode, made up of
                    patterns of black and white pixels. Denso Wave, a Japanese
                    subsidiary of Toyota Denso, developed them in order to mark
                    the components of their cars and thus speed up logistics in
                    their production. Currently, it has gained great popularity,
                    due to its versatility and accessibility, thanks to the
                    functions of smart phones.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    know the benefitrs of using QR
                  </Accordion.Header>
                  <Accordion.Body>
                    You will have noticed that more and more companies choose to
                    include QR, as a fundamental resource for the marketing and
                    commercialization of their products and services. Its
                    growing popularity is due to the multiplicity of uses that
                    you can give it: to receive payments from your clients,
                    share links to web pages, catalogs and price lists, receive
                    comments on your products or services, invite the client to
                    share images or videos , promote your business events and
                    much more, with just a scan!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How to start using QR</Accordion.Header>
                  <Accordion.Body>
                    Many devices already have a built-in QR code reader. In this
                    case, all you have to do is open the camera on your mobile
                    phone and hold it over a code for a few seconds, until a
                    notification appears on the screen. In case this does not
                    happen, go to settings to check that QR scanning is enabled.
                    If you do not have the feature, just download and install a
                    QR code reader from your app store.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
