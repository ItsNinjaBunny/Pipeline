
export const request = async <T>(url: string, options: {
  method: string,
  headers?: any,
  body?: any,
}) => {
  const { method, headers, body } = options;
  const response = await fetch(url, {
    method: method.toUpperCase(),
    headers: headers ? headers : {},
    body: body ? JSON.stringify(body) : undefined,
  });

  return await <T>response.json();
}