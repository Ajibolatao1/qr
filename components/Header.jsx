import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <Navbar bg="secondary" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image
                alt="QR logo"
                src={"/img/logo.webp"}
                width="70"
                height="70"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center w-100 align-items-center gap-5">
              <Link href="/blog" className={`${styles.link}`}>
                Blog
              </Link>
              <Link href="/contact" className={`${styles.link}`}>
                Contact us
              </Link>
              <Link
                href="/Register"
                className={`btn btn-outline-light ${styles.link}`}>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
