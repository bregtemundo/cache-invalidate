import React from 'react'

const getDate = async (id: string) => {
  const response = await fetch(`http://worldclockapi.com/api/json/utc/now?id=${id}`,{cache: "force-cache", next:{tags:["time", `time-${id}`]}});
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

async function CurrentTime({id}: {id: string}) {
  const currentTime = await getDate(id);

  return (
    <pre> {JSON.stringify(currentTime, null, 2)}</pre>
  )
}

export default CurrentTime