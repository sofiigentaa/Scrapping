chrome.action.onClicked.addListener((tab)=>{
    console.log('Hola')
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/scrapper.js"]

    })
})