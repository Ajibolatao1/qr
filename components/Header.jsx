import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "@/styles/Header.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
   const { data: session } = useSession();

   console.log(session)

  return (
    <header className="sticky-top">
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
              {/* If user is not logged in */}
              {!session && (
                <Link
                  href="/register"
                  className={`btn btn-outline-light ${styles.link}`}>
                  Register
                </Link>
              )}
              {!session && (
                <Link href="/api/auth/signin" className={`btn ${styles.link}`}>
                  Log in
                </Link>
              )}
              {/* if users is Logged in */}
              {session && (
                <Link
                  href="/api/auth/signout"
                  className={`btn btn-outline-light ${styles.link}`}>
                  Sign out
                </Link>
              )}
              ;
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
