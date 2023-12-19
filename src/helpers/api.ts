const BACKEND_BASE_URL = 'http://localhost:3333';

export interface Song {
    title: string;
    interpret: string;
    isPlaying: string;
};

export const sendRequest = async (url: string, data: any): Promise<any> => {

    // javascript object -> urlencoded data
    const formData = data
    ? Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    : null;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
    });
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
};

export const shutdown = async () => {
    sendRequest(BACKEND_BASE_URL + '/shutdown', undefined);
};

export const setPairable = async (status: boolean) => {
    sendRequest(BACKEND_BASE_URL + '/bluetooth/pairable', { status });
};

export const togglePlay = async (): Promise<Song> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/player_pause', undefined);

    return JSON.parse(res);
};

export const forward = async (): Promise<Song> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/forward', undefined);

    return JSON.parse(res);
};

export const back = async (): Promise<Song> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/back', undefined);

    return JSON.parse(res);
};

export const volumeTo = async (percentage: number) => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/volume_to', { percentage });
};