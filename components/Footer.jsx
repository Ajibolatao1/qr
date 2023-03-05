import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
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
        <div className="mid d-lg-flex justify-content-between">
          <div>
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
            <div >
              <div>
                Create your own QR codes and boost your business or idea
              </div>
            </div>
          </div>
          <div>
            <div className={`${styles.fHead}`}>Service</div>
            <div className="f-body">
              <div>Create QR code</div>
            </div>
          </div>
          <div>
            <div className={`${styles.fHead}`}>Company</div>
            <div className="f-body">
              <div>Privacy Policy</div>
            </div>
          </div>
          <div>
            <div className={`${styles.fHead}`}>Help</div>
            <div className="f-body">
              <div>Contact us</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
