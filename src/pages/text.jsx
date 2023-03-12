import QRCode from "react-qr-code";

export default function text() {
  return (
    <div className="py-5">
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}>
        <QRCode
          size={512}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"https://www.aryic.com"}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
