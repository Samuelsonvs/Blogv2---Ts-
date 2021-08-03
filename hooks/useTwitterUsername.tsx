import { useEffect, useState } from "react";

const useTwitterUsername = (twitterName: string = "samuelsonvs") => {
  const [userName, setUserName] = useState(twitterName);
  const [resData, setResData] = useState<any | null>();
  const [isloading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>();

  const token = process.env.TWITTER_BEARER_TOKEN;

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const res = await fetch(
          `https://api.twitter.com/2/users/by/username/${userName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: "GET",
            redirect: "follow",
          }
        );
        const data = await res.json();
        setError(null);
        setResData(data);
        setIsLoading(false);
      } catch (err) {
        setResData(null);
        setError(err);
        setIsLoading(false);
      }
    })();
  }, [userName]);

  return { userName, setUserName, isloading, resData, error };
};

export default useTwitterUsername;
