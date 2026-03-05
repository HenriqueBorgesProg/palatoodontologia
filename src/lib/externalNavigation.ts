export const openExternal = (url: string) => {
  if (typeof window === "undefined") return;

  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (newWindow) {
    newWindow.opener = null;
  }
};

export const getWhatsAppUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Metropolitano+Goi%C3%A2nia+GO";

export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=Vth3vuHQyO0";
