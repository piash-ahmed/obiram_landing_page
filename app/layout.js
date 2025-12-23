import "./globals.css";

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}
export default function RootLayout({ children }) {
  
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Lexend */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Instrument Serif */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}