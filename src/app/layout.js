import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Priyal Sarda Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}