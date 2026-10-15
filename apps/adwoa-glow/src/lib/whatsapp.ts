import { siteConfig } from "@/config/site";

export function whatsappHref(message: string) {
  const isPlaceholder = /x{2,}/i.test(siteConfig.whatsappNumber);
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  const recipient = isPlaceholder ? "" : number;
  return "https://wa.me/" + recipient + "?text=" + encodeURIComponent(message);
}
