
// -------------------------for search btn----------------------
document.getElementById('btn').addEventListener('click', function(){
    const input = document.getElementById('input')
    const inputValue = input.value
    const url = inputValue
    console.log(url)
    fetch(`https://openapi.programming-hero.com/api/phones?search=${url}`)
    .then(res => res.json())
    .then(data => dataLoad(data.data))
    loader(true);
    if (url === '' || dataLoad === 0) {
        console.log('heey')
        const seeMores = document.getElementById('see-more')
        seeMores.classList.add('d-none')
    }
    else{
        const seeMores = document.getElementById('see-more')
        seeMores.classList.remove('d-none')
    }
})

// ------------------for enter key --------------------------
document.getElementById('input').addEventListener('keypress', function (e) {
    
 
    if (e.key === 'Enter') {
        const input = document.getElementById('input')
        const inputValue = input.value
        const url = inputValue
        console.log(url)
        fetch(`https://openapi.programming-hero.com/api/phones?search=${url}`)
        .then(res => res.json())
        .then(data => dataLoad(data.data))
         loader(true)
         const seeMores = document.getElementById('see-more')
         seeMores.classList.remove('d-none')

         
    }
    //         const input = document.getElementById('input')
    //           const inputValue = input.value
    //   if (e.key === 'Enter' && inputValue === '' ) {
            
    //         const seeMores = document.getElementById('see-more')
    //         seeMores.classList.add('d-none')
    //     }
      
       
   
});
// ------------------for enter key  end--------------------------


const loader = isLoading => {
    if (isLoading) {
        const load = document.getElementById('loader')
        load.classList.remove('d-none')
    }
    else{
        const load = document.getElementById('loader')
        load.classList.add('d-none')
    }
}

const dataLoad = mobile => {
    loader(false)
    if (mobile.length > 10) {
        mobile = mobile.slice(0, 10)
        const seeMore = document.getElementById('see-btn')
        seeMore.classList.remove('d-none')
    }
     
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerHTML= ``
    if (mobile.length === 0) {
        const didNotFind = document.getElementById('not')
        didNotFind.classList.remove('d-none')
    }
    else{
        const didNotFind = document.getElementById('not')
        didNotFind.classList.add('d-none')
    }
    
     mobile.forEach( phone => {
       
        const card = document.createElement('div')
        card.classList.add('col')
        card.innerHTML=`
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">model : ${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="loadPhoneDetail('${phone.slug}')" class='btn btn-primary' data-bs-toggle="modal"  data-bs-target="#staticBackdrop">see detail</button>

        </div>
        `;
        phoneContainer.appendChild(card)
        // console.log(phone)
      
    });
     
}
// -------------------------for search btn----------------------



const loadPhoneDetail =async id =>{
    const urls = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(urls)
    .then(res => res.json())
    .then(data => details(data.data))
}
const details = detail => {

    const names = document.getElementById('name')
    names.innerText = detail.name 
    const date = document.getElementById('date')
    date.innerText = detail.releaseDate
    const memory = document.getElementById('memory')
    memory.innerText = detail.mainFeatures.memory
    const display = document.getElementById('display')
    display.innerText = detail.mainFeatures.displaySize
    const storage = document.getElementById('storage')
    storage.innerText = detail.mainFeatures.storage

    console.log(detail)
}
// ---------------------------- for detail---------------------------------------------------------------------



document.getElementById('see-more').addEventListener('click', function(){
    const input = document.getElementById('input')
    const inputValue = input.value
    const url = inputValue
    fetch(`https://openapi.programming-hero.com/api/phones?search=${url}`)
    .then(res => res.json())
    .then(data => fullLoaded(data.data))
})
const fullLoaded = full => {
    console.log(full)
    if (full) {
        const seeMore = document.getElementById('see-btn')
        seeMore.classList.add('d-none')
    }
    const fullContainer = document.getElementById('phone-container')
    fullContainer.innerHTML= ``
    
    full.forEach(full => {
       
        const card = document.createElement('div')
        card.classList.add('col')
        card.innerHTML=`
        <div class="card h-100">
            <img src="${full.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">model : ${full.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button onclick="loadPhoneDetailFull('${full.slug}')" class='btn btn-primary' data-bs-toggle="modal"  data-bs-target="#staticBackdrop">see detail</button>

        </div>
        `;
        fullContainer.appendChild(card)
        // console.log(phone)
      
    });
}
const loadPhoneDetailFull =async id =>{
    const urls = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(urls)
    .then(res => res.json())
    .then(data => detailsFull(data.data))
}
const detailsFull = detail => {

    const names = document.getElementById('name')
    names.innerText = detail.name 
    const date = document.getElementById('date')
    date.innerText = detail.releaseDate
    const memory = document.getElementById('memory')
    memory.innerText = detail.mainFeatures.memory
    const display = document.getElementById('display')
    display.innerText = detail.mainFeatures.displaySize
    const storage = document.getElementById('storage')
    storage.innerText = detail.mainFeatures.storage

    console.log(detail)
}

// ---------------------------- for detail end-------------------
