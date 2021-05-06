const API_URL = 'http://localhost:1339';

export async function listLogEntries(){
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}

export async function createLogEntry(entry){
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: {
            'content-type': 'application/json',
        }
    });
    return response.json();
}