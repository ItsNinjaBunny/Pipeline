const test: Record<string, string> = {};

export const request = async <T>(
  url: string,
  options: {
    method:
      | "get"
      | "post"
      | "patch"
      | "delete"
      | "GET"
      | "POST"
      | "PATCH"
      | "DELETE";
    headers: { [key: string]: string };
    body?: any;
  }
) => {
  const { method, headers, body } = options;

  headers["Origin"] = "https://retro-video-game-exchange.vercel.app";
  headers["Allow-Control-Allow-Origin"] =
    "https://retro-video-game-exchange.vercel.app";

  console.log("url", url);
  console.log("headers", headers);
  console.log("body", body);

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    method: method.toUpperCase(),
    headers: headers,
    body: JSON.stringify(body),
  });

  return await (<T>response.json());
};
