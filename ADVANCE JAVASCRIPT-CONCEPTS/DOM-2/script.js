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