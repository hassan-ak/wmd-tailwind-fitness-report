import './globals.css';

export const metadata = {
  title: 'Fitness Report',
  description: 'Article Preview card built using Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
