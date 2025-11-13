type PageInfo = {
  title: string;
}
type Page = "home" | "about" | "contact";

// key, type
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
}