import cookieCutter from "cookie-cutter";

const baseUrl = "http://localhost:3000";
console.log();

export function setToken(token) {
  cookieCutter.set("token", token);
}

function getToken() {
  if (!cookieCutter.set) {
    const { cookies } = require("next/headers");
    const cookieStore = cookies();
    return cookieStore.get("token")?.value;
  }

  return cookieCutter.get("token");
}

export async function apiPost(endpoint, body = {}) {
  const token = getToken();

  try {
    const request = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    return await request.json();
  } catch (err) {
    console.error(err);
    return {
      success: false,
      type: "UNKNOWN",
    };
  }
}

export async function apiGet(endpoint) {
  const token = getToken();

  try {
    const request = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        Authorization: token,
      },
    });

    return await request.json();
  } catch (err) {
    console.error(err);
    return {
      success: false,
      type: "UNKNOWN",
    };
  }
}
