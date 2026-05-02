let data = [];

import { collection, addDoc, db, getDocs } from "./firebaseconfig.js";

let Cityinp = document.querySelector("#City_name");
let Countryinp = document.querySelector("#Country_name");
let PCinp = document.querySelector("#PC_name");
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let dataDiv = document.querySelector("#data");

btn.addEventListener("click", async () => {
    try {
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "cities"), {
            City: Cityinp.value,
            Country: Countryinp.value,
            postcode: PCinp.value


        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
})

let getdata = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({
                id: doc.id,
                ...doc.data()
            })
        });
    }
    catch (error) {
        console.error("Error getting documents: ", error);
    }
}

getdata().then(() => {
    console.log(data);
});


btn2.addEventListener("click",  () => {
    data.map(data => {
        let newdiv = document.createElement('div');
        let p = document.createElement('p');
        p.innerHTML = `<b>City: </b>` + data.City + '<br>' + `<b>Country: </b>` + data.Country + '<br>' + `<b>Postcode: </b>` + data.postcode;
        newdiv.append(p);
        dataDiv.append(newdiv);

        newdiv.style.backgroundColor = "#a7b357";
        newdiv.style.margin = "10px";
        newdiv.style.padding = "10px";
        newdiv.style.border = "1px solid #000000";
        newdiv.style.borderRadius = "10px";
        


    

    }
    )
})