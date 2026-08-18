// Carimba a mensagem dos links de WhatsApp (data-cta="whatsapp") com a origem
// da visita, lida da UTM da URL. Importado por WhatsAppCTA.astro e Footer.astro
// (único link de WhatsApp fora do componente) para cobrir toda página.
function applyWhatsappRefTag(): void {
  const utmCampaign = new URLSearchParams(window.location.search).get('utm_campaign');
  if (!utmCampaign) return;

  document.querySelectorAll<HTMLAnchorElement>('a[data-cta="whatsapp"]').forEach((el) => {
    const href = el.getAttribute('href');
    if (!href) return;

    const [base, encodedText] = href.split('?text=');
    if (!encodedText) return;

    let message: string;
    try {
      message = decodeURIComponent(encodedText);
    } catch {
      return;
    }

    if (message.includes('[ref:')) return;

    const taggedMessage = `${message} [ref: ${utmCampaign}]`;
    el.setAttribute('href', `${base}?text=${encodeURIComponent(taggedMessage)}`);
  });
}

applyWhatsappRefTag();
