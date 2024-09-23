import { TupperInfo } from '@/types/types';

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export const getTupperInfo = async (tupperID: string) => {
  try {
    const response = await fetch(`http://192.168.1.157:3000/${tupperID}`);
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    return parsedResponse;
  } catch (e) {
    console.log(e);
  }
};
export const editTupperName = async (newName: string, tupperID: string) => {
  tupperInfo[tupperID].name = newName;
  await wait(1000);
  return { data: true, error: null };
};