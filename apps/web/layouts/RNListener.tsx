import { useEffect, useState } from "react";
import useWebview from "../hooks/useWebView";

const RNListener = () => {
  const [user, setUser] = useState<any>({
    id: "",
    token: "",
  });
  const { postMessage } = useWebview();

  useEffect(() => {
    postMessage("login", null);
  }, [postMessage]);

  const getMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);

    if (data.user) setUser(data.user);
  };

  useEffect(() => {
    window.addEventListener("message", getMessage);

    return () => window.removeEventListener("message", getMessage);
  }, []);

  return <div>{user?.id as any}</div>;
};

export default RNListener;
