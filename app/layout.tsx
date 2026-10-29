import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Aneesh Dutt | Portfolio',
    template: 'Aneesh Dutt | %s',
  },
  description:
    'Aneesh Dutt builds backend and AI systems: LLM gateways, container engines, voice agents and causal decisioning engines.',
  keywords: [
    'aneesh dutt',
    'aneesh dutt portfolio',
    'backend engineer',
    'ai engineer',
    'llm',
    'pes university',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Aneesh Dutt's Portfolio",
    description:
      'I build systems and then try to break them. Final-year CS student at PES University.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
