import "./globals.css";

export const metadata = {
  title: "Manifesto Tracker",
  description:
    "A website to track the congress party 2023 manifesto implementation in Telangana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/govt_logo.png" sizes="any" />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
