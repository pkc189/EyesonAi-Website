import { BiHomeAlt } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
const Icons = (props) => {
  return (
    <>
      <p>{props.iconName}</p>
      <p>{props.title}</p>
    </>
  );
};

const Sidenav = () => {
  return (
    <>
      <nav>
        <div className="icon">
          <Icons iconName={<BiHomeAlt />} title="Home" />
        </div>

        <div className="icon">
          <Icons iconName={<HiCode />} title="Courses" />
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            width: 8rem;
            background: black;
          }

          .icon p {
            font-weight: light;
            font-size: 2rem;
            margin-left: 2rem;
          }

          .icon {
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
    </>
  );
};

export default Sidenav;
