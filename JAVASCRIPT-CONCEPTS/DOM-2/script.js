//create
function addLanguage(langName){
 const li = document.createElement('li')
 li.innerHTML = `${langName}`
 const language = document.querySelector('.language')
 language.appendChild(li)
}
addLanguage('PYTHON')
addLanguage('REACT')

function addOptimumLanguage(langName){
 const li = document.createElement('li')
 const addText = document.createTextNode(langName)
 li.appendChild(addText)
 const language = document.querySelector('.language')
 language.appendChild(li)
}

addOptimumLanguage('NODEJS')
addOptimumLanguage('MONGODB')

//edit

const secondLang = document.querySelector('li:nth-child(2)')
//secondLang.innerHTML = 'MOJO'

const newLi = document.createElement('li')

newLi.textContent = 'MOJO'
secondLang.replaceWith(newLi)

//edit

const firstLang = document.querySelector('li:first-child') 
firstLang.outerHTML = '<li>TYPE SCRIPT</li>'

//remove

const lastLang = document.querySelector('li:last-child')
lastLang.remove()
