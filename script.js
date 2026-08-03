// ============================================
// EDITAR: coloque aqui a data/hora real do evento
// Formato: "AAAA-MM-DDTHH:MM:SS"
// ============================================
const DATA_EVENTO = new Date("2026-11-15T18:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = DATA_EVENTO - agora;

  const els = {
    dias: document.getElementById("cd-dias"),
    horas: document.getElementById("cd-horas"),
    min: document.getElementById("cd-min"),
    seg: document.getElementById("cd-seg"),
  };

  if (diff <= 0) {
    els.dias.textContent = "00";
    els.horas.textContent = "00";
    els.min.textContent = "00";
    els.seg.textContent = "00";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);

  els.dias.textContent = String(dias).padStart(2, "0");
  els.horas.textContent = String(horas).padStart(2, "0");
  els.min.textContent = String(min).padStart(2, "0");
  els.seg.textContent = String(seg).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

// ============================================
// QR CODE
// EDITAR: troque o texto abaixo pelo link real
// do formulário de inscrição (Google Forms, etc.)
// ============================================
const LINK_INSCRICAO = "https://forms.gle/SEU-LINK-AQUI";

if (document.getElementById("qrcode")) {
  new QRCode(document.getElementById("qrcode"), {
    text: LINK_INSCRICAO,
    width: 160,
    height: 160,
    colorDark: "#16213E",
    colorLight: "#ffffff",
  });
}
