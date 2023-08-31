let certEl = document.getElementById("certificate-el")
let licenceEl = document.getElementById("licence-el")



function engineer(){
    certEl.innerHTML = "<strong>Certificates:</strong> " + "Engineer" 
    licenceEl.textContent = "Licences: " + "Please submit any licence as required by your role - liaise with L&D if unsure"

}

function electrician(){
    certEl.textContent = "Certificates: " + "CERTIFICATE III IN ELECTROTECHNOLOGY" 
    licenceEl.innerHTML = "<strong>Licences: </strong>" + "<br>Working at heights " + 
                            "<br>Working in Confined spaces " + 
                            "<br>Testing "

}

function plumbingandhydraulics(){
    certEl.textContent = "Certificates: " + "Plumbing" 
    licenceEl.innerHTML = "Licences: " + "<br>Working at heights " + 
                            "<br>Working in Confined spaces " + 
                            "<br>Testing "

}

function plantoperations(){
    certEl.textContent = "Certificates: " + "N/A" 
    licenceEl.innerHTML = "Licences: " + "<br>Working at heights " + 
                            "<br>Working in Confined spaces " + 
                            "<br>Testing "

}
