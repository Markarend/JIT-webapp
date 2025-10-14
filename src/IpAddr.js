import { useEffect, useState } from "react";

async function fetchIp(signal) {
  const res = await fetch("https://api.ipify.org?format=json", { signal });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

function IpList() {
  const [ip, setIp] = useState("0.0.0.0");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function loadIps() {
      try {
        setIsLoading(true);
        const data = await fetchIp(controller.signal);
        setIp(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadIps();
    return () => {
      controller.abort();
    };
  }, []);
  if (isLoading) return <p>Loading IPs...</p>;
  if (error) return <p>Error: {error}</p>;
  /*
  return (
    <ul>
      {ips.map(result => (
        <li key={result.ip}>{result.ip}</li>
      ))}
    </ul>
  );
  */
 return ( ip.ip );
}

export default IpList;