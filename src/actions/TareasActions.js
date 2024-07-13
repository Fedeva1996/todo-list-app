export const getTareas = async (userEmail) => {
    const uri = `http://localhost:3001/api/tareas?userEmail=${userEmail}`;
    //console.log("uri", uri);
    const getOptions = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('jwt')
        },
    }
    const response = await fetch(uri, getOptions);
    const data = response.json();
    //console.log("getTasks:", data);
    return data;
}

export const getDoneTareas = async (userEmail) => {
    const uri = `http://localhost:3001/api/tareas?userEmail=${userEmail}&done=true`;
    const getOptions = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('jwt')
        },
    }
    const response = await fetch(uri, getOptions);
    const data = response.json();
    console.log(data);
    return data;
}