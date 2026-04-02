import shopData from "@/components/Shop/shopData";
import { Refrigerator } from "lucide-react";

export const categoryMapping: any = {
  acrepairinstallation: {
    title: "AC Repair & Installation",
    data: shopData.filter((item) => item.category === "acrepairinstallation"),
    baseRoute: "/acrepairinstallation",
  },

  "home-appliances": {
    title: "Home Appliances",
    data: shopData.filter((item) => item.category === "home-appliances"),
    baseRoute: "/home-appliances",
  },

  "home-cleaning": {
    title: "Home Cleaning",
    data: shopData.filter((item) => item.category === "home-cleaning"),
    baseRoute: "/home-cleaning",
  },

  painting: {
    title: "Painting",
    data: shopData.filter((item) => item.category === "painting"),
    baseRoute: "/painting",
  },

  "home-interior-renovation": {
    title: "Home Interior & Renovation",
    data: shopData.filter((item) => item.category === "home-interior-renovation"),
    baseRoute: "/home-interior-renovation",
  },

  "plumber-services": {
    title: "Plumber Services",
    data: shopData.filter((item) => item.category === "plumber-services"),
    baseRoute: "/plumber-services",
  },

  "pest-control": {
    title: "Pest Control",
    data: shopData.filter((item) => item.category === "pestcontrol"),
    baseRoute: "/pestcontrol",
  },

  refrigerator: {
    title: "Refrigerator",
    data: shopData.filter((item) => item.category === "refrigerator"),
    baseRoute: "/refrigerator",
  },
};