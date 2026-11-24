/** Destinos dos CTAs da landing (painel de gestão e canais comerciais). */
export const GESTAO_URL = "https://web.trademanager.com.br";
export const REGISTER_URL = `${GESTAO_URL}/register`;
export const LOGIN_URL = `${GESTAO_URL}/login`;

/** Oferta de entrada (deve bater com BILLING_TRIAL_DAYS do backend). */
export const TRIAL_DAYS = 14;
export const TRIAL_LABEL = `Teste grátis por ${TRIAL_DAYS} dias`;
export const TRIAL_NOTE = `${TRIAL_DAYS} dias grátis. Sem cartão de crédito.`;

export const WHATSAPP_NUMBER = "5595991390527";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site e quero conhecer o Trade+.",
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/trademais_/";

// Link de compartilhamento da página "Trademais" (redireciona para a página).
export const FACEBOOK_URL = "https://www.facebook.com/share/1JXwAzdu1Y/";
