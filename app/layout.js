import "./styles/globals.css";

export const metadata = {
  title: "DLP - catálogo",
  description: "Catálago de la biblioteca autogestionable DLP library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
