
export const validateEntry = (data) => {
    if(data.title === "" || data.imageURL === "" || data.entryInput === ""){
        alert("All fields are required")
        return false;
    }
    return true;
}

export const createID = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDate()
    return `${year}-${month}-${day}`
}

export const saveEntry = (obj) => {
    console.log("obj", obj);
    
    //Retrieve array
    const localDataArray = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    console.log("save entry", localDataArray);
    
    if(!localDataArray.find((elt) => elt.id === obj.id)){
        //Update array
        localDataArray.unshift(obj);

        //Store array
        localStorage.setItem("diaryEntries", JSON.stringify(localDataArray));
        alert("Entry saved successfully!!!");
        return true;
    }else{
        alert("Only one entry per day authorized!!!");
        return false;
    }

}