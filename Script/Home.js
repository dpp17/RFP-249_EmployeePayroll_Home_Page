let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent=empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

//Template literal ES6 feature
const createInnerHtml = () => {
    if(empPayrollList==0) return;
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
        "<th>Start Date</th><th>Actions</th></tr>"
   
    
    let innerHtml = `${headerHtml}`;
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}" onclick="remove(this)" src="/assets/icons/icons8-delete.svg" alt="delete">
                    <img name="${empPayrollData._id}" onclick="update(this)" src="/assets/icons/edit.svg" alt="edit">
                </td>
            </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}