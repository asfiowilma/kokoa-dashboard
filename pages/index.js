import Layout from "../components/layout";
import Dashboard from "../components/dashboard";

export default function Home() {
  return (
    <Layout labelName="sidebar">
      <Dashboard />
    </Layout>
  );
}
