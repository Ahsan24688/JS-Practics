import { db, collection, addDoc, getDocs, doc, deleteDoc, setDoc } from "./firebaseconfig.js";

let data = [];
let editid = null;
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let btn = document.querySelector("#add");
let updatebtn = document.querySelector("#update");
let showdata = () => {
    let all_data = document.querySelector("#all_data"); 
    all_data.innerHTML = "";
    data.map(cities => {
        let container= document.createElement("div");
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.className = 'data';
        p.innerText = `First Name: ${cities.FirstName}
        Last Name: ${cities.LastName}`;
        p.innerHTML += `
        <br><button class="Edit">Edit</button>
        <button onclick="deletedata('${cities.uid}')">Delete</button>`;
        div.appendChild(p);
        container.appendChild(div);
        all_data.appendChild(container);

        p.querySelector(".Edit")
            .addEventListener("click", () => editdata(cities.uid));
    })
}

btn.addEventListener("click", async () => {
    try {
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "cities"), {
            FirstName: fname.value,
            LastName: lname.value
        });
        console.log("Document written with ID: ", docRef.id);
        fetchdata().then(() => showdata());
        fname.value = "";
        lname.value = "";
    } catch (error) {
        console.error("Error adding document: ", error);
    }

});

let fetchdata = async () => {
    try {
        data = [];
        const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            data.push({
                uid: doc.id,
                ...doc.data()
            })
            console.log(data);
        });
    } catch (error) {
        console.error("Error fetching documents: ", error);
    }

}
fetchdata().then(() => showdata());

window.deletedata = async (uid) => {
    console.log(uid);
    try {
        await deleteDoc(doc(db, "cities", uid));
        fetchdata().then(() => showdata());
        fname.value = "";
        lname.value = "";
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}
let editdata = async (id) => {
    console.log(id);
    editid = id;
    let findid = data.find((data) => data.uid === id);
    if (findid) {
        fname.value = findid.FirstName;
        lname.value = findid.LastName;


    }
}

updatebtn.addEventListener("click", async () => {
    let updatefname = fname.value;
    let updatelname = lname.value;

    if (editid) {
        try {
            await setDoc(doc(db, "cities", editid), {
                FirstName: updatefname,
                LastName: updatelname
            });
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }
    fetchdata().then(() => showdata());
    if (editid) {
        editid = null;
        alert("Data Updated Successfully");
    }
    fname.value = "";
    lname.value = "";
})

