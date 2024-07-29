import useWebview, { PostBridgeParams } from "../hooks/useWebView";

const WithPostMessage = (props: {
  children: (
    postMessage: (
      message: keyof PostBridgeParams,
      data: {
        url: string;
      } | null
    ) => void
  ) => React.ReactNode;
}) => {
  const { postMessage } = useWebview();

  return props.children(postMessage);
};

export default WithPostMessage;
