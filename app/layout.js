import "./styles/globals.css";

export const metadata = {
  title: "DLP - catálogo",
  description: "Catálago de la biblioteca independiente DLP library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
