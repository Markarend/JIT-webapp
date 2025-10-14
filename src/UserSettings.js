import { useEffect, useState } from "react";

async function getBlob(blobName,signal) {
  const response = await fetch("https://jitstaticwebappsa.blob.core.windows.net/blobs/"+blobName, { signal });
  const payload = await response.json();
  const { blob } = payload;
  return blob;
}

function GetSettings() {
  const [userSettings, setUserSettings] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function loadUserSettings() {
      try {
        setIsLoading(true);
        const data = await getBlob("user-settings.json", controller.signal);
        setUserSettings(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadUserSettings();
    return () => {
      controller.abort();
    };
  }, []);
  if (isLoading) return <p>Loading Settings...</p>;
  if (error) return <p>Error: {error}</p>;

 return ( userSettings );
}

/* Sample return:
{
    "clientPrincipal": {
        "identityProvider": "aad",
        "userId": "2b6bb59080534aed8de164abb78fb3c5",
        "userDetails": "mark.arend@procasemanagement.com",
        "userRoles": [
            "anonymous",
            "authenticated"
        ]
    }
}
*/

export default GetSettings;