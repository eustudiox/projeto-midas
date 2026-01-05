// ====== CONFIGURAÇÃO RÁPIDA ======
// 1) Troque o número abaixo pelo seu WhatsApp com DDI/DDD (ex.: 5577999999999)
const WHATS_NUMBER = "5577988641348";

// 2) Mensagem padrão ao clicar
const WHATS_MESSAGE = "Fala! Vi a proposta Studio X e quero fechar o pacote. Podemos alinhar o mês 1?";

// ====== Links WhatsApp ======
const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(WHATS_MESSAGE)}`;
const w1 = document.getElementById('whatsLink');
const w2 = document.getElementById('floatWhats');
if (w1) w1.href = url;
if (w2) w2.href = url;

// ====== Ano no rodapé ======
document.getElementById('year').textContent = new Date().getFullYear();

// ====== Reveal on scroll ======
const els = Array.from(document.querySelectorAll('.reveal'));
const io = new IntersectionObserver((entries)=>{
  for (const e of entries){
    if (e.isIntersecting) e.target.classList.add('show');
  }
},{threshold:.12});
els.forEach(el=>io.observe(el));

// ====== Smooth scroll ======
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (ev)=>{
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target){
      ev.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      /* =========================
   MOBILE FIXES (até 768px)
   ========================= */
@media (max-width: 768px) {

  /* Container geral */
  .wrap {
    padding-left: 20px;
    padding-right: 20px;
  }

  /* Header / menu */
  header,
  .header,
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  nav a {
    font-size: 14px;
  }

  /* Hero */
  .hero {
    padding-top: 80px;
  }

  .hero h1 {
    font-size: 32px;
    line-height: 1.15;
  }

  .hero p {
    font-size: 15px;
  }

  /* Botões do hero */
  .hero .actions,
  .hero-buttons {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .hero .btn {
    width: 100%;
    text-align: center;
  }

  /* Grids viram coluna */
  .grid,
  .cards,
  .pricing,
  .features {
    grid-template-columns: 1fr !important;
  }

  /* Cards */
  .card {
    padding: 20px;
  }

  /* Seção Pacotes (caso exista mais de 1) */
  .pricing.single {
    padding-left: 0;
    padding-right: 0;
  }

  /* Footer */
  footer {
    text-align: center;
  }

  footer .wrap {
    flex-direction: column;
    gap: 24px;
  }

  /* WhatsApp floating button */
  .whatsapp,
  .whatsapp-btn {
    right: 16px;
    bottom: 16px;
    transform: scale(0.9);
  }

}

    }
  });
});
