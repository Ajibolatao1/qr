import styles from "@/styles/Sidebar.module.css";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar} bg-primary p-2`}>
      <div className="top text-light d-flex align-items-center gap-1 fs1-5">
        <Image src={"/img/logo.webp"} alt="MyQR logo" width={40} height={40} />
        <div>MyQR</div>
      </div>
      {/* MIDDLE */}
      <div>
         
      </div>
      {/* BOTTOM */}
      <div>

      </div>
    </div>
  );
}
