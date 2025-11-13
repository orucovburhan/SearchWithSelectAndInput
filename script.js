const workers = [
    { name: "Alice Johnson", status: "Active", department: "Engineering" },
    { name: "Bob Smith", status: "Inactive", department: "Marketing" },
    { name: "Charlie Davis", status: "Active", department: "Finance" },
    { name: "Diana Lee", status: "Active", department: "Human Resources" },
    { name: "Ethan Clark", status: "On Leave", department: "Operations" },
    { name: "Fiona White", status: "Active", department: "Engineering" },
    { name: "George Hall", status: "Inactive", department: "Sales" },
    { name: "Hannah Lewis", status: "Active", department: "Customer Support" },
    { name: "Ian Walker", status: "Active", department: "IT" },
    { name: "Julia Roberts", status: "On Leave", department: "Finance" },
    { name: "Kevin Turner", status: "Active", department: "Marketing" },
    { name: "Laura King", status: "Inactive", department: "Operations" },
    { name: "Michael Young", status: "Active", department: "Engineering" },
    { name: "Nina Scott", status: "Active", department: "Sales" },
    { name: "Oliver Adams", status: "On Leave", department: "Human Resources" }
  ];



  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const query = input.value.trim().toLowerCase();
    result.innerHTML = "";

    const matches = workers.filter(person => person.name.toLowerCase().includes(query));

    if (matches.length === 0) {
        result.innerHTML = "<li>No person found</li>";
    } else {
        matches.forEach(person => {
            const li = document.createElement("li");
            li.textContent = `Name: ${person.name} --- Department: ${person.department}`;
            result.appendChild(li);
        });
    }
});




function FillUl() {
    document.querySelector('#list').innerHTML = ''
    workers.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `Name: ${item.name} --- Department: ${item.department}`
        document.querySelector('#list').appendChild(li)
    })
}
FillUl()
const select = document.getElementById("depart");
select.addEventListener("change", () => {
    const selectedValue = select.value;
    document.querySelector('#list').innerHTML = ''
    workers.forEach((item) => {
        if(item.department===selectedValue){
        let li = document.createElement('li')
        li.innerText = `Name: ${item.name} Department: ${item.department}`
        document.querySelector('#list').appendChild(li)
        }
        else if(selectedValue==="All"){
            let li = document.createElement('li')
            li.innerText = `Name: ${item.name} Department: ${item.department}`
            document.querySelector('#list').appendChild(li)
        }

})});








  