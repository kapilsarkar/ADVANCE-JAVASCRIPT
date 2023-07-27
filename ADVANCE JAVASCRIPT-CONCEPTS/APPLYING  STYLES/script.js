// const h1 = document.querySelector('h1')
// const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

const h1 = document.querySelector('h1')
const h2 = document.querySelector('.heading-1')
document.querySelector('h1')

h1.style.color = 'red'

h1.style.background = 'yellow'

const allLinks = document.querySelectorAll('a')
console.log(allLinks)

// for(let i =0; i< allLinks.length; i++){
//     allLinks[i].style.color = 'teal'
// }

for( const link of allLinks){
    // link.style.color = 'teal'
    // link.style.textDecoration = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily ='cursive'
    // link.style.fontSize ='2rem'

    // link.style.cssText= `color: rgb(4, 77, 4);
    // font-size: 2rem;
    // font-weight: 700;
    // font-family: cursive;
    // text-decoration: none;`

    //link.className ='green-link wavy-link'

    link.classList.add('green-link')
}
h2.classList.add('hidden')
