import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-5">
      <Container>
        {/* TOP */}
        <div className="top p-4 d-md-flex justify-content-around">
          <div className={`left pb-2 ${styles.dBig}`}>
            Try our generator of QR codes
          </div>
          <div className="right">
            <Link href={"/sign-in"} className="btn btn-outline-light">
              Register
            </Link>
          </div>
        </div>
        <hr className="hr" />

        {/* MID */}
        <div className="mid d-lg-flex justify-content-between pb-3">
          <div className="py-3">
            <div
              className={`d-flex align-items-center gap-2 ${styles.dBig} ${styles.fHead1}`}>
              <Image
                alt="MyQR logo"
                src={"/img/logo.webp"}
                width="30"
                height={30}
              />
              <div>MyQR</div>
            </div>
            <div>
              <div>
                Create your own QR codes and boost your business or idea
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className={`${styles.fHead}`}>Service</div>
            <div className="f-body">
              <Link href={"/qr-code-generator"} className="link">
                Create QRcode
              </Link>
            </div>
          </div>
          <div className="py-3">
            <div className={`${styles.fHead}`}>Company</div>
            <div className="f-body">
              <div>
                <Link href={"/privacy-policy"} className="link">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className={`${styles.fHead}`}>Help</div>
            <div className="f-body">
              <Link href={"/contact"} className="link">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <hr className="hr" />
        {/* Bottom */}
        <div className="py-3 text-center">
          <div className="left"> Copywrite &copy; MyQr | 2023 </div>
        </div>
      </Container>
    </footer>
  );
}
