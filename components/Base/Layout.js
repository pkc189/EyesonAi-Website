import Link from "next/link";
import Sidenav from "./Sidenavbar";
const Layout = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@700&display=swap");
          body {
            padding: 0;
            margin: 0;
            font-family: "Andika New Basic", sans-serif;
          }

          a {
            text-decoration: none;
          }
        `}
      </style>
      <Link href="/">
        <a>EyesOnAI</a>
      </Link>
      <Sidenav />

      <h1>Layout</h1>
    </>
  );
};

export default Layout;
