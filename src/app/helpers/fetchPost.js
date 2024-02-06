export default async function postData(path, data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${path}`, {
      method: 'POST',
      headers: {
        'app-authorization': `${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorResponse = await res.json();
        throw errorResponse;
      }

    return res.json();
  } catch (error) {
    throw error;
  }
}