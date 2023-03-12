import Sidebar from "../../components/Sidebar"
import styles from "@/styles/Main.module.css";



export default function myQRCodes() {
  return (
    <div className="myQRCodes mainFlex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main */}
      <div>The main section</div>
    </div>
  );
}
