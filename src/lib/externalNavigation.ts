export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/39B6f7x9Yx1RZsW26";

export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export const getWhatsAppUrl = (phone: string, message: string) => {
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};

export const openExternal = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
