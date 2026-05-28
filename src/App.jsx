import { useState } from "react";
import "./App.css";

import heroBg from "./assets/hero-layout-reference.png";
import lanyard from "./assets/lanyard-and-ticket.png";
import posterBlue from "./assets/poster-blue.png";
import posterPink from "./assets/poster-pink.png";
import aboutBg from "./assets/about-section.png";

function App() {
  const [modal, setModal] = useState(null);
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <>
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <button className="auth-btn login-btn" onClick={() => setModal("login")} />
      <button className="auth-btn register-btn" onClick={() => setModal("register")} />

      <img
        src={lanyard}
        className="hero-lanyard"
        onClick={() => setZoomImg(lanyard)}
        alt="Vé và dây đeo"
      />

      <img
        src={posterBlue}
        className="hero-poster-blue"
        onClick={() => setZoomImg(posterBlue)}
        alt="Poster xanh"
      />

      <img
        src={posterPink}
        className="hero-poster-pink"
        onClick={() => setZoomImg(posterPink)}
        alt="Poster hồng"
      />

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModal(null)}>×</button>

            <h2>{modal === "login" ? "Đăng nhập" : "Đăng ký"}</h2>

            {modal === "register" && <input placeholder="Họ tên" />}
            <input placeholder="Email" type="email" />
            <input placeholder="Mật khẩu" type="password" />

            <button className="submit-btn">
              {modal === "login" ? "Đăng nhập" : "Đăng ký"}
            </button>
          </div>
        </div>
      )}

      {zoomImg && (
        <div className="zoom-overlay" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoom" />
        </div>
      )}
    </section>

    <section
        className="about-section"
        style={{ backgroundImage: `url(${aboutBg})` }}
    />

    </>
  );

  
}

export default App;