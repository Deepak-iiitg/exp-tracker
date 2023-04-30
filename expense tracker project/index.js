
const btn  = document.getElementById("submit");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const expense = document.getElementById("expense").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const obj = {
        expense:expense,
        description:description,
        category:category
    }
    const exp = [JSON.parse(localStorage.getItem('exp'))];
    exp.push(obj);
    localStorage.setItem('exp',JSON.stringify(exp));
    const text = expense+"-"+description+"-"+category;
    const li = document.createElement("li");
    li.append(document.createTextNode(text));
    const ul = document.getElementById("list");
    const eidtBtn = document.createElement("button");
    eidtBtn.className = 'danger';
    eidtBtn.append(document.createTextNode("Edit Expense"));
    eidtBtn.className = "btn btn-dark"
    const deleteBtn = document.createElement("button");
    deleteBtn.append(document.createTextNode("Delete Expense"));
    deleteBtn.className = "btn btn-danger";
    li.className= "list-group-item"
    li.append(eidtBtn);
    li.append(deleteBtn);
    ul.appendChild(li);
    
})
// const del = document.getElementsByClassName("btn btn-danger")[0];
// del.addEventListener("click",(e)=>{
//         const ul = document.getElementById("list");
//         let li = e.target.parentNode;
//         ul.removeChild(li);
// })