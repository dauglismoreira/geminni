export default function fetchDataFilter(path, params) {
    return new Promise((resolve, reject) => {
      try {
        const queryString = new URLSearchParams(params).toString();
  
        const queryParams = new URLSearchParams(window.location.search);
        Object.keys(params).forEach((key) => {
          queryParams.set(key, params[key]);
        });
  
        const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
        window.history.replaceState({}, '', newUrl);
  
        fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}${path}?${queryString}`, {
          next: { revalidate: 10 },
          headers: {
            'app-authorization': `${process.env.NEXT_PUBLIC_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Erro ao buscar dados: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }