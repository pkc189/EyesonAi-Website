import Link from "next/link";
import Layout from "../components/Base/Layout.js";
export default function IndexPage() {
  return (
    <div>
      Hello World. <Layout />
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
