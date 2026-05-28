import React from "react";

const BLUE = "#2e3192";
const PINK = "#e83e82";
const YELLOW = "#ffe45c";
const CYAN = "#35c6df";

function Logo({ small = false }) {
  return (
    <div className={`flex items-center gap-2 font-black ${small ? "text-2xl" : "text-3xl"}`}>
      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
        <div className="h-7 w-7 rounded-full bg-cyan-400 relative">
          <div className="absolute left-2 top-1 h-3 w-3 rounded-full bg-black" />
          <div className="absolute left-2 top-4 h-2 w-4 rounded-full bg-white" />
        </div>
      </div>
      <span style={{ color: CYAN }}>ticketmelon</span>
    </div>
  );
}

function LocoMark({ className = "" }) {
  return (
    <div className={`relative font-black leading-none text-yellow-200 ${className}`}>
      <div className="text-[96px] md:text-[138px] tracking-[-10px]" style={{ color: YELLOW }}>LÔCÔ</div>
      <div className="text-[52px] md:text-[74px] -mt-5" style={{ color: YELLOW }}>ZOO</div>
      <div className="text-[24px] md:text-[34px] mt-2" style={{ color: YELLOW }}>ART MARKET</div>
    </div>
  );
}

function BigGlyph({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="text-[260px] md:text-[430px] font-black leading-[0.7]" style={{ color: YELLOW }}>Ô</div>
      <div className="absolute left-[28%] top-[36%] rotate-6 text-[180px] md:text-[300px] font-black leading-none" style={{ color: PINK }}>Z</div>
    </div>
  );
}

function Poster({ title, bg = PINK, rotate = "rotate-0" }) {
  return (
    <div className={`w-44 h-64 md:w-56 md:h-72 shadow-2xl ${rotate} p-5 flex flex-col justify-between`} style={{ background: bg }}>
      <div className="text-xl font-black" style={{ color: bg === PINK ? YELLOW : PINK }}>LÔCÔ<br />ZOO</div>
      <div className="text-6xl font-black leading-none" style={{ color: bg === PINK ? BLUE : PINK }}>{title}</div>
      <div className="text-xs font-bold" style={{ color: bg === PINK ? YELLOW : BLUE }}>30.05.2026<br />02.06.2026</div>
    </div>
  );
}

function TicketCard({ name, price, children }) {
  return (
    <div className="rounded-3xl p-6 min-h-36 shadow-lg" style={{ background: YELLOW, color: "#0b0b20" }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl" style={{ color: PINK }}>🎟</span>
        <h3 className="font-black text-xl tracking-wider">{name}: <span>{price}</span></h3>
      </div>
      <p className="text-sm font-semibold leading-snug">{children}</p>
    </div>
  );
}

export default function LocoArtMarketPage() {
  return (
    <main className="min-h-screen text-yellow-100 font-mono overflow-hidden" style={{ background: BLUE }}>
      <nav className="sticky top-0 z-50 h-[84px] border-b-2 border-black px-8 md:px-14 flex items-center justify-between" style={{ background: PINK }}>
        <Logo small />
        <div className="hidden md:flex gap-20 text-lg font-black tracking-wider" style={{ color: YELLOW }}>
          <a>CẦN TRỢ GIÚP</a>
          <a>ĐƠN VỊ TỔ CHỨC SỰ KIỆN</a>
          <a>ĐĂNG NHẬP</a>
          <a>ĐĂNG KÝ</a>
        </div>
      </nav>

      <section className="relative min-h-[790px] px-8 md:px-14 py-16" style={{ background: BLUE }}>
        <div className="absolute right-0 top-44 w-[45%] h-[280px] rounded-tl-[70px]" style={{ background: PINK }} />
        <div className="absolute right-0 bottom-0 w-[44%] h-[190px]" style={{ background: PINK }} />
        <div className="relative grid md:grid-cols-[360px_1fr] gap-10 items-end">
          <div className="space-y-14 z-10">
            <LocoMark />
            <div>
              <p className="uppercase text-lg">SỰ KIỆN HỘI CHỢ NGHỆ THUẬT</p>
              <h1 className="text-3xl font-black tracking-widest">LÔCÔZOO ART MARKET</h1>
            </div>
            <div className="grid grid-cols-2 gap-10 text-lg font-bold">
              <div>
                <h4 className="mb-4" style={{ color: YELLOW }}>NGÀY</h4>
                <p>30/05/2026</p><p>31/05/2026</p><p>01/06/2026</p><p>02/06/2026</p>
              </div>
              <div>
                <h4 className="mb-4" style={{ color: YELLOW }}>GIỜ</h4>
                <p>15:00 – 21:00</p><p>10:00 – 21:00</p><p>15:00 – 21:00</p><p>10:00 – 21:00</p>
              </div>
            </div>
            <div className="max-w-sm text-lg font-bold">
              <h4 className="mb-4" style={{ color: YELLOW }}>ĐỊA ĐIỂM</h4>
              <p>LẦU G VÀ LẦU 1 THẢO ĐIỀN PEARL,<br />12 ĐƯỜNG QUỐC HƯƠNG THẢO ĐIỀN, THỦ ĐỨC, TP.HCM</p>
            </div>
          </div>

          <div className="relative z-10 min-h-[560px] flex items-center justify-center">
            <div className="absolute left-0 bottom-0 w-[36%] h-[345px]" style={{ background: YELLOW }} />
            <div className="absolute left-[22%] top-[110px] w-[65%] h-[310px]" style={{ background: YELLOW }} />
            <div className="absolute left-[52%] top-[110px] w-[32%] h-[330px] border-l-2 border-black" style={{ background: YELLOW }} />
            <div className="relative flex items-center gap-12">
              <div className="hidden lg:block rotate-12 translate-y-24">
                <Poster title="VÉ" bg={PINK} />
              </div>
              <Poster title="Zấn Zâu" bg={BLUE} rotate="-rotate-1" />
              <Poster title="Zinh" bg={PINK} rotate="rotate-1" />
            </div>
            <div className="absolute left-0 top-44 text-8xl font-black" style={{ color: YELLOW }}>↙</div>
          </div>
        </div>
      </section>

      <section className="min-h-[710px] px-8 md:px-36 py-20 border-t border-white/10 grid md:grid-cols-[320px_1fr] gap-16 items-center" style={{ background: BLUE }}>
        <BigGlyph />
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8" style={{ color: YELLOW }}>LÔCÔ ART MARKET</h2>
          <div className="space-y-7 text-xl leading-relaxed font-semibold">
            <p>Là một mô hình hội chợ nghệ thuật, trưng bày triển lãm và các hoạt động giao dịch văn hóa. LÔCÔ thường được tổ chức mỗi năm 3–4 lần, mỗi lần sẽ gắn liền với một chủ đề riêng.</p>
            <p>Chào mừng bạn đến với LÔCÔZOO 2026 — mùa hội chợ độc nhất trong năm, nơi quy tụ những “sinh vật” sáng tạo từ khắp các khu rừng nghệ thuật, thời trang và thủ công!</p>
            <p>Đây không phải là một sở thích thông thường mà là một hệ sinh thái hoang dã của sự sáng tạo và những trải nghiệm rực rỡ. Tại đây, bạn không chỉ đến để xem - mà để nghiên cứu, để hòa mình vào thế giới đầy mê hoặc của nhưng thương hiệu nội địa và những điều thứ vị mà mình đã có tâm huyết chuẩn bị. Một chuyến đi thị giác, cảm xúc và cảm hứng - sẵn sàng sẵn sàng cùng bạn.</p>
          </div>
        </div>
      </section>

      <section className="min-h-[760px] px-8 md:px-32 py-24 border-t border-white/10" style={{ background: BLUE }}>
        <h2 className="text-5xl md:text-6xl font-black mb-14" style={{ color: YELLOW }}>COMBO VÉ</h2>
        <div className="grid lg:grid-cols-[1fr_420px_1fr] gap-10 items-center">
          <div className="space-y-20">
            <TicketCard name="VÉ ĐƠN" price="60.000VNĐ">1x vé Standard, 1x phiếu giảm giá tất cả sản phẩm hiệu có mặt tại sự kiện.</TicketCard>
            <TicketCard name="COMBO1" price="200.000VNĐ">Combo mặt nạ, khăn lụa LÔCÔ, quạt cầm tay và coupon giảm giá cực khủng.</TicketCard>
          </div>
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute rotate-[25deg] -translate-y-10"><Poster title="Vé Zào Zoo" bg={PINK} /></div>
            <div className="absolute rotate-[18deg] translate-y-24 translate-x-16"><Poster title="Z" bg={BLUE} /></div>
          </div>
          <div className="space-y-20">
            <TicketCard name="COMBO2" price="205.000VNĐ">2x móc LÔCÔ, màu sắc tự chọn, coupon giảm giá và nhiều ưu đãi tại sự kiện.</TicketCard>
            <TicketCard name="COMBO3" price="140.000VNĐ">2x mẫu kích hoạt, màu sắc tự chọn, coupon giảm giá các sản phẩm tại sự kiện.</TicketCard>
          </div>
        </div>
      </section>

      <footer className="relative min-h-[650px] px-8 md:px-52 py-24 border-t border-white/10 overflow-hidden" style={{ background: BLUE }}>
        <div className="absolute bottom-0 right-0 w-[70%] h-20 -skew-x-12" style={{ background: PINK }} />
        <div className="grid lg:grid-cols-[280px_1fr_1fr] gap-16 relative z-10">
          <div>
            <Logo />
            <div className="mt-20 text-[220px] font-black leading-none rotate-[-18deg]" style={{ color: YELLOW }}>Õ</div>
          </div>
          <div className="space-y-16 text-xl font-bold leading-relaxed">
            <div>
              <h3 className="mb-6" style={{ color: YELLOW }}>Bạn cần trợ giúp ?</h3>
              <p>Làm thế nào để mua vé?</p><p>Vé của tôi đâu?</p><p>Cách sử dụng vé điện tử?</p><p>Trung tâm trợ giúp</p>
            </div>
            <div>
              <h3 className="mb-6" style={{ color: YELLOW }}>Dành cho các nhà tổ chức sự kiện</h3>
              <p>Giải pháp của chúng tôi</p><p>Giá cả</p><p>Liên hệ với chúng tôi</p>
            </div>
          </div>
          <div className="space-y-16 text-xl font-bold leading-relaxed">
            <div>
              <h3 className="mb-6" style={{ color: YELLOW }}>Hỗ trợ khách hàng</h3>
              <p>Email. support@ticketmelon.com</p><p>Line. @ticketmelon</p><p>Facebook. Ticketmelon</p><p>Hãy gọi cho chúng tôi: Thái Lan +(66) 2 026 3068</p><p>Thứ Hai – Thứ Sáu, 10:30–18:00 (UTC+7)</p>
            </div>
            <div>
              <h3 className="mb-6" style={{ color: YELLOW }}>Hợp pháp</h3>
              <p>Điều khoản</p><p>Chính sách</p><p>Bảo vệ</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
