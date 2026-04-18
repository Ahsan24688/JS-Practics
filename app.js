
let data = async () => {
    try {
        let response = await fetch('https://dummyjson.com/users');
        let data = await response.json();
        console.log(data);

        data.users.map(users => {
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerHTML = `<b>Name: </b>` + users.firstName + ' ' + users.lastName + '<br>' + `<b>Age: </b>` + users.age + '<br>' + `<b>Email: </b>` + users.email;
            div.append(p);
            document.body.append(div);

            let stylebdy = document.querySelector('body');
            stylebdy.style.display = 'grid';
            stylebdy.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
            // stylebdy.style.gridTemplateRows = 'repeat(3, 1fr)';

            div.style.backgroundColor = 'lightyellow';

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'lightgreen';
                div.style.borderColor = '#2ecc71';
                div.style.transform = 'translateY(-10px)'; 
                div.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                div.style.cursor = 'pointer';
                div.style.transition = 'all 0.3s ease';
                div.style.borderRadius = '10px';
            })
            
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = 'lightyellow';
                div.style.borderColor = 'black';
                div.style.transform = 'translateY(0)';
                div.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                div.style.cursor = 'pointer';
                div.style.borderRadius = '10px';

            })
        })


    } catch (error) {
        console.log(error);
    }
}

data();