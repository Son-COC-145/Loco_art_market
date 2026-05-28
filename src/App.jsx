import { useState } from "react";
import "./App.css";

import heroBg from "./assets/hero-layout-reference.png";
import lanyard from "./assets/lanyard-and-ticket.png";
import posterBlue from "./assets/poster-blue.png";
import posterPink from "./assets/poster-pink.png";
import aboutBg from "./assets/about-section.png";
import comboBg from "./assets/combo-layout-old.png";
import ticketRender from "./assets/ticket-render.png";
import footerBg from "./assets/footer-section.png";

function App() {
  const [modal, setModal] = useState(null);
  const [zoomImg, setZoomImg] = useState(null);

  const [tickets, setTickets] = useState({
  single: 0,
  combo1: 0,
  combo2: 0,
  combo3: 0,
});

const ticketPrices = {
  single: 60000,
  combo1: 200000,
  combo2: 205000,
  combo3: 140000,
};

const updateTicket = (type, value) => {
  setTickets((prev) => ({
    ...prev,
    [type]: Math.max(0, prev[type] + value),
  }));
};

const totalPrice =
  tickets.single * ticketPrices.single +
  tickets.combo1 * ticketPrices.combo1 +
  tickets.combo2 * ticketPrices.combo2 +
  tickets.combo3 * ticketPrices.combo3;

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN") + "VNĐ";
};

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

    <section
      className="combo-section"
      style={{ backgroundImage: `url(${comboBg})` }}
    >
    <img
      src={ticketRender}
      className="combo-ticket-img"
      alt="Combo vé Lôcôzoo"
      onClick={() => setZoomImg(ticketRender)}
    />

    <TicketCounter
      className="counter-single"
      label="VÉ ĐƠN"
      quantity={tickets.single}
      price={ticketPrices.single}
      onMinus={() => updateTicket("single", -1)}
      onPlus={() => updateTicket("single", 1)}
    />

    <TicketCounter
      className="counter-combo1"
      label="COMBO1"
      quantity={tickets.combo1}
      price={ticketPrices.combo1}
      onMinus={() => updateTicket("combo1", -1)}
      onPlus={() => updateTicket("combo1", 1)}
    />

    <TicketCounter
      className="counter-combo2"
      label="COMBO2"
      quantity={tickets.combo2}
      price={ticketPrices.combo2}
      onMinus={() => updateTicket("combo2", -1)}
      onPlus={() => updateTicket("combo2", 1)}
    />

    <TicketCounter
      className="counter-combo3"
      label="COMBO3"
      quantity={tickets.combo3}
      price={ticketPrices.combo3}
      onMinus={() => updateTicket("combo3", -1)}
      onPlus={() => updateTicket("combo3", 1)}
    />

    <div className="combo-total-box">
      <span>TỔNG:</span>
      <strong>{formatPrice(totalPrice)}</strong>
      <button onClick={() => alert("Đặt vé thành công!")}>
        ĐẶT VÉ
      </button>
    </div>
    </section>

    <footer
      className="footer-section"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Các vùng click bên trái */}
      <a
        className="footer-click help-buy"
        href="#combo"
        title="Làm thế nào để mua vé?"
      />

      <a
        className="footer-click my-ticket"
        href="#combo"
        title="Vé của tôi đâu?"
      />

      <button
        className="footer-click use-ticket"
        title="Cách sử dụng vé điện tử?"
        onClick={() =>
          alert("Vé điện tử sẽ được gửi qua email sau khi đặt vé thành công.")
        }
      />

      <button
        className="footer-click help-center"
        title="Trung tâm trợ giúp"
        onClick={() =>
          alert("Bạn có thể liên hệ support@ticketmelon.com để được hỗ trợ.")
        }
      />

      {/* Dành cho nhà tổ chức */}
      <button
        className="footer-click solution"
        title="Giải pháp của chúng tôi"
        onClick={() =>
          alert("Giải pháp tổ chức sự kiện gồm bán vé, quản lý đơn hàng và check-in.")
        }
      />

      <button
        className="footer-click pricing"
        title="Giá cả"
        onClick={() =>
          alert("Vui lòng liên hệ Ticketmelon để nhận báo giá chi tiết.")
        }
      />

      <a
        className="footer-click contact-us"
        href="mailto:support@ticketmelon.com"
        title="Liên hệ với chúng tôi"
      />

      {/* Hỗ trợ khách hàng */}
      <a
        className="footer-click email-support"
        href="mailto:support@ticketmelon.com"
        title="Email hỗ trợ"
      />

      <a
        className="footer-click line-support"
        href="https://line.me/R/ti/p/@ticketmelon"
        target="_blank"
        rel="noreferrer"
        title="Line Ticketmelon"
      />

      <a
        className="footer-click facebook-support"
        href="https://www.facebook.com/Ticketmelon"
        target="_blank"
        rel="noreferrer"
        title="Facebook Ticketmelon"
      />

      <a
        className="footer-click phone-support"
        href="tel:+6620263068"
        title="Gọi hỗ trợ"
      />

      {/* Hợp pháp */}
      <button
        className="footer-click terms"
        title="Điều khoản"
        onClick={() => alert("Điều khoản sử dụng đang được cập nhật.")}
      />

      <button
        className="footer-click policy"
        title="Chính sách"
        onClick={() => alert("Chính sách bảo mật đang được cập nhật.")}
      />

      <button
        className="footer-click privacy"
        title="Bảo vệ"
        onClick={() => alert("Thông tin bảo vệ người dùng đang được cập nhật.")}
      />
    </footer>

    </>
  );

  
}

function TicketCounter({
  className,
  label,
  quantity,
  price,
  onMinus,
  onPlus,
}) {
  return (
    <div className={`ticket-counter ${className}`}>
      <div className="ticket-counter-info">
        <strong>{label}</strong>
        <span>{price.toLocaleString("vi-VN")}VNĐ</span>
      </div>

      <div className="ticket-counter-actions">
        <button onClick={onMinus}>-</button>
        <span>{quantity}</span>
        <button onClick={onPlus}>+</button>
      </div>
    </div>
  );
}

export default App;