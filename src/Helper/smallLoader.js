import { ThreeDots } from "react-loader-spinner";

const smallLoader = (
  <>
    <div className="flex items-center justify-center">
      <ThreeDots
        height="30"
        width="30"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  </>
);

export default smallLoader;
