import { useEffect, useState } from "react";

async function getUserInfo(signal) {
  const response = await fetch('/.auth/me', { signal });
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

function GetUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function loadUsers() {
      try {
        setIsLoading(true);
        const data = await getUserInfo(controller.signal);
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
    return () => {
      controller.abort();
    };
  }, []);
  if (isLoading) return <p>Loading Users...</p>;
  if (error) return <p>Error: {error}</p>;

 return ( user );
}

/*
(async () => {
console.log(await getUserInfo());
})();
*/

export default GetUser;