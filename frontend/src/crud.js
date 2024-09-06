// apiServer="http://34.209.31.30:8080/" should be defined elsewhere, but I put it in main.jsx for now
//const apiServer="http://34.209.31.30:8080"; 
import config from './config.js';
const apiServer = config.apiServer;

export async function getAllUsers() {

    return await fetch(apiServer+'/users')
	.then(response => {
		return response.text();
	})
	.then((data) => {
		return new Promise((resolve, reject) => {
		resolve(data ? JSON.parse(data)	: []);
		reject(error);
		});
	})
	.catch((error) => {
		console.log("Error fetching all users", error);
	});
	//const users = await response.json();
	//console.log(users);
	//return users;
	/*
    return fetch(apiServer+'/users')
    .then((res) => {
        if(!res.ok) {
            throw new Error("failed to fetch");
        }

        return res.json();
    })
    .catch((error) => {
        console.log("Error fetching all users", error);
    })
    */
}

export async function getLoggedInUser(username, password) {
    try {
	/*
        const response = await fetch(apiServer+'/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

	const users = await getAllUsers();
	*/
	let users =null ;
	    await getAllUsers().then(u => {
		    users = u;
	    });

        const user = users.find(u => u.username === username && u.password === password);
        if (user === undefined) return null;

        return user;
    } catch (error) {
        console.error("error fetching", error);
        return null;
    }
}

export async function getUserById(id) {
    return fetch(`http://34.209.31.30:8080/users/${id}`)
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
    return fetch(apiServer+'/applications')
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
    return fetch(`http://34.209.31.30:8080/applications/byJob/${jobId}`)
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

export async function getApplicationsByUserId(userId) {
    return fetch(`http://34.209.31.30:8080/applications/byUser/${userId}`)
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
    return fetch(apiServer+'/applications', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(application)
    })
}

export async function getCandidateByUserId(userId) {
    return fetch(`http://34.209.31.30:8080/candidates/byUser/${userId}`)
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

export async function updateCandidate(candidate, id) {
    return fetch(`http://34.209.31.30:8080/candidates/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(candidate)
    })
}

export async function getCandidateById(id) {
    return fetch(`http://34.209.31.30:8080/candidates/${id}`)
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

export async function getManagerByUserId(userId) {
    return fetch(`http://34.209.31.30:8080/managers/byUser/${userId}`)
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

export async function getCandidatesByJobId(jobId) {
    return fetch(`http://34.209.31.30:8080/candidates/byJob/${jobId}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch candidates by job ID");
            }
            return res.json();
        })
        .catch((error) => {
            console.log("Error fetching candidates by job ID", error);
        });
}

export async function getAllJobs() {
    return fetch(apiServer+'/jobs')
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

export async function getJobById(id) {
    return fetch(`http://34.209.31.30:8080/jobs/${id}`)
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

export async function getJobsByManagerId(managerId) {
    try {
      const allJobs = await getAllJobs();
      const filteredJobs = allJobs.filter(job => job.manager_id == managerId);
        
      return filteredJobs;
    } catch (err) {
      console.error('Error fetching jobs:', err);
      return [];
    }
  };

export async function getAllManagers() {
    return fetch(apiServer+'/managers')
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
    return fetch(apiServer+'/candidates')
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

