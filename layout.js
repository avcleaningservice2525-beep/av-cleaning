export const metadata = {
  title: "AV Cleaning",
  description: "Professional Cleaning Services",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
