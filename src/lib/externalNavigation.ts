export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Palato+Odontologia";

export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/";

export const getWhatsAppUrl = (phone: string, message: string) => {
  const normalizedPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
};

export const openExternal = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
