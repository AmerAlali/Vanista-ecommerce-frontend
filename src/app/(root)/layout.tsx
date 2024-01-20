import Layout from "@/components/Layout";

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <Layout>
      {children}
      {authModal}
    </Layout>
  );
}
