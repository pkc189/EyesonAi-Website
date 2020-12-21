import { BiHomeAlt } from "react-icons/bi";

const Sidenav = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="icon">
            <p>
              <BiHomeAlt />
            </p>{" "}
            <p>Home</p>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          nav {
            width: 8rem;
            background: red;
          }

          ul {
            list-style-type: none;
          }
          .icon p {
            font-weight: light;
          }

          li {
            display: flex;
            flex-direction: row;

            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
};

export default Sidenav;
