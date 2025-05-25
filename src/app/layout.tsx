import { Metadata } from 'next';
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'd_sudoku'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className={figtree.className}>d_sudoku</h1>
        {children}
      </body>
    </html>
  );
}
