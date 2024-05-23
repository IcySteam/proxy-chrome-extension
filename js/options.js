// MarsProxies session ID format.
const SESSION_ID_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
const SESSION_ID_LENGTH = 8

function generateRandomSession() {
    let result = "";
    let counter = 0;
    while (counter < SESSION_ID_LENGTH) {
        result += SESSION_ID_CHARS.charAt(Math.floor(Math.random() * SESSION_ID_CHARS.length));
        counter += 1;
    }

    return result;
}

function save() {
    chrome.storage.sync.set({
        proxyAddress: document.getElementById("proxyAddress").value,
        proxyUsername: document.getElementById("proxyUsername").value,
        proxyPassword: document.getElementById("proxyPassword").value,
        proxySession: document.getElementById("proxySession").value,
        proxyRandomizeSessionOnExtensionLoad: document.getElementById
            ("proxyRandomizeSessionOnExtensionLoad").checked
    }, function () {
        var status = document.getElementById("status");
        status.textContent = "Saved"
        setTimeout(function () {
            status.textContent = "";
        }, 1000)
    })
}

function clear() {
    document.getElementById("proxyAddress").value = "";
    document.getElementById("proxyUsername").value = "";
    document.getElementById("proxyPassword").value = "";
    document.getElementById("proxySession").value = "";
    document.getElementById("proxyRandomizeSessionOnExtensionLoad").checked = true;
}

function randomize() {
    document.getElementById("proxySession").value = generateRandomSession();
}

function restore() {
    chrome.storage.sync.get({
            proxyAddress: "",
            proxyUsername: "",
            proxyPassword: "",
            proxySession: "",
            proxyRandomizeSessionOnExtensionLoad: true
        },
        function (items) {
            document.getElementById("proxyAddress").value = items.proxyAddress;
            document.getElementById("proxyUsername").value = items.proxyUsername;
            document.getElementById("proxyPassword").value = items.proxyPassword;
            document.getElementById("proxySession").value = items.proxySession;
            document.getElementById("proxyRandomizeSessionOnExtensionLoad")
                .checked = items.proxyRandomizeSessionOnExtensionLoad;
        }
    )
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("save").addEventListener("click", save);
document.getElementById("randomize").addEventListener("click", randomize);
