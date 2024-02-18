let myLeads = []//string
//myLeads = JSON.parse(myLeads)//string to array
//myLeads.push("www.lead2.com")//storing in array
//myLeads = Json.stringify(myLeads)//array to string
//console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn =document.getElementById("tab-btn")
const leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage)
{
    myLeads= leadsFromLocalStorage
    render(myLeads)
}
const tabs = [
    {url: "https://www.google.com"}
]

tabBtn.addEventListener("click",function(){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

    })
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})
function render(leads)
{
let listItems = ""
for(let i=0;i< leads.length; i++)
{
   listItems += `
   <li>
    <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
    </a>
   </li>`
    //listItems += "<li><a target='_blank' href ='"+ myLeads[i]+"'>" + myLeads[i]+"</a></li>"
}
ulEl.innerHTML = listItems
}