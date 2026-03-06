const API_URL = "https://taskflow-api.[yourname].workers.dev";

let AppData = { 
    tasks: [], 
    users: [], 
    session: JSON.parse(localStorage.getItem('office_session')) 
};

async function syncData() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        AppData.tasks = data.tasks;
        AppData.users = data.users;
        return data;
    } catch (e) {
        console.error("Sync Failed", e);
        return null;
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
