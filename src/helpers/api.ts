// this can stay the same even in a docker container because unlike the backend, the actual runs in the browser
const BACKEND_BASE_URL = 'http://localhost:3333';

export interface Song {
    title: string;
    interpret: string;
    isPlaying: string;
};

export interface Device {
    name: string;
    macAddress: string;
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
    return (await response).json();
};

export const shutdown = async () => {
    sendRequest(BACKEND_BASE_URL + '/shutdown', undefined);
};

export const setPairable = async (status: boolean) => {
    sendRequest(BACKEND_BASE_URL + '/bluetooth/pairable', { status });
    sendRequest(BACKEND_BASE_URL + '/bluetooth/discoverable', { status });
};

export const togglePlay = async (): Promise<Song> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/play_pause', undefined);

    return res;
};

export const forward = async (): Promise<Song> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/forward', undefined);

    return res;
};

export const back = async (): Promise<Song> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/back', undefined);

    return res;
};

export const volumeTo = async (percentage: number) => {
    const res = await sendRequest(BACKEND_BASE_URL + '/player/volume_to', { percentage });
};

export const listDevices = async (): Promise<Device[]> => {
    const res = await sendRequest(BACKEND_BASE_URL + '/bluetooth/devices', undefined);

    console.log(res);

    const devices = new Array<Device>();

    // i have to change the name of the mac_address parameter to match the camelCase
    for (let i = 0; i < res.length; i++) {
        devices.push({
            name: res[i].name,
            macAddress: res[i].mac_address,
        })
    }

    return devices;
};

export const removeDevice = async (macAddress: string) => {
    const res = await sendRequest(BACKEND_BASE_URL + '/bluetooth/remove_device', { mac_address: macAddress });
};
