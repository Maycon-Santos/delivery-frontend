const baseUrl = "http://localhost:3000";

export async function apiPost(endpoint, body = {}) {
  const request = await fetch(`${baseUrl}${endpoint}`, {
    body: JSON.stringify(body),
  });

  return await request.json();
}
