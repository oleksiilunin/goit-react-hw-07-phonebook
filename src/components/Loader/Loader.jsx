import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="10"
        width="40"
        radius="4"
        color="#666666"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
