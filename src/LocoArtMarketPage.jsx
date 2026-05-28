import React from "react";

// Cách dùng trong VS Code:
// 1. Tạo thư mục: public/assets
// 2. Copy các ảnh bạn đã gửi vào public/assets
// 3. Đổi tên đúng như bên dưới
const sections = [
  {
    id: "hero",
    src: "/assets/hero-section.png",
    alt: "Lôcôzoo Art Market - Trang đầu sự kiện",
  },
  {
    id: "about",
    src: "/assets/about-section.png",
    alt: "Giới thiệu Lôcô Art Market",
  },
  {
    id: "combo",
    src: "/assets/combo-section.png",
    alt: "Combo vé Lôcôzoo Art Market",
  },
  {
    id: "footer",
    src: "/assets/footer-section.png",
    alt: "Footer hỗ trợ Ticketmelon",
  },
];

export default function LocoArtMarketPage() {
  return (
    <main className="w-full min-h-screen bg-[#2e3192] overflow-x-hidden">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="w-full leading-none">
          <img
            src={section.src}
            alt={section.alt}
            className="block w-full h-auto select-none"
            draggable="false"
          />
        </section>
      ))}
    </main>
  );
}
