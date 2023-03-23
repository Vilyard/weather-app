export async function GetCityData(cityInp: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInp}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  );
  const data = await res.json();
  if (data?.cod === "400") throw data;
  return data;
}

export async function GetLonLat(latInp: string, lonInp: string) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latInp}&lon=${lonInp}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  );
  const data = await res.json();
  if (data?.cod === "400") throw data;
  return data;
}
