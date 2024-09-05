export async function getAllUsers() {

    return fetch('http://localhost:8080/users')
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all users", error);
    })
}

export async function getUserById(id) {
    return fetch(`http://localhost:8080/users/${id}`)
    .then( (res) => {
        if (!res.ok) {
            throw new Error("Failed to fetch user")
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching user", error);
    })
}

export async function getAllApplications() {
    return fetch('http://localhost:8080/applications')
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all applications", error);
    })
}

export async function getApplicationById(id) {
    
}

export async function getApplicationByJobId(jobId) {
    return fetch(`http://localhost:8080/applications/byJob/${jobId}`)
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all applications", error);
    })
}

export async function postApplication(application) {
    return fetch('http://localhost:8080/applications', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(application)
    })
}

export async function getCandidateById(id) {

}

export async function getAllJobs() {
    return fetch('http://localhost:8080/jobs')
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all jobs", error);
    })
}

export async function getJobById() {

}

export async function getAllManagers() {
    return fetch('http://localhost:8080/managers')
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all managers", error);
    })
}

export async function getAllCandidates() {
    return fetch('http://localhost:8080/candidates')
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all candidates", error);
    })
}