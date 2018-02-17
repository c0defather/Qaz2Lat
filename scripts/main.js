chrome.contextMenus.create({
    title: "latinize",
    contexts:["selection"],
    onclick: latinize
});

function latinize(info, tab){
    chrome.tabs.executeScript(null, {file: "content.js"});
}