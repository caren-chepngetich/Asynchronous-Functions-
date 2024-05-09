function delay(milliseconds){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function logMessageAfterDelay(message, delayTime){
    await delay(delayTime);
    console.log(message);
}

// 2.

function getUserData(id){
    return new Promise((resolve, reject)=>{
        console.log('Fetching data for user ID:${id}');
        const UserData = {id, name:'Caren Kosgey',email:'chepngetichkosgeicarenn@gmail.com'};
        resolve(UserData);
    })
} function performTask(){
    return new Promise
}

// 3

async