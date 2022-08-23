import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <Oval
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;
