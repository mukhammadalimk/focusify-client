import LoadingRedIcon from "../icons/LoadingRedIcon";

const Loading = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <LoadingRedIcon className="animate-spin" />
    </div>
  );
};

export default Loading;
