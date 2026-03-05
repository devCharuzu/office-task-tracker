const API_URL = "https://script.google.com/macros/s/AKfycbwLGja8-IDIYIBEENNZNw2FhGQnKEt3vGaRjX1ndB34LFVfnkNkcebUg9HaI0k4Di4/exec";

// Global Data Store (Faster than refetching)
let AppData = { tasks: [], users: [], session: JSON.parse(localStorage.getItem('office_session')) };

async function syncData() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        AppData.tasks = data.tasks;
        AppData.users = data.users;
        return data;
    } catch (e) {
        console.error("Sync Failed", e);
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
