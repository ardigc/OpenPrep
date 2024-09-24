import { Tupper } from '@/types/types';

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export const getTupperInfo = async (tupperID: string) => {
  try {
    const response = await fetch(
      `http://192.168.1.157:3000/tuppers/${tupperID}`
    );
    const parsedResponse: Tupper = await response.json();
    return { data: parsedResponse, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
};
export const editTupperName = async (newName: string, tupperID: string) => {
  try {
    const response = await fetch(
      `http://192.168.1.157:3000/tuppers/${tupperID}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      }
    );

    return { data: response.ok, error: null };
  } catch (e) {
    return { data: null, error: e };
  }
};
