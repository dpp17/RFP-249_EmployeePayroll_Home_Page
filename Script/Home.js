window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
        "<th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    
            <tr>
                <td><img class="profile" src="/assets/images/Ellipse -2.png" alt=""></td>
                <td>Narayan MahaDevan</td>
                <td>Male</td>
                <td>
                    <div class="dept-label">Engineering</div>
                    <div class="dept-label">Finance</div>
                </td>
                <td>3000000</td>
                <td>1 nov 2020</td>
                <td>
                    <img onclick="remove(this)" src="/assets/icons/icons8-delete.svg" alt="delete" id="1">
                    <img onclick="update(this)" src="/assets/icons/edit.svg" alt="delete" id="1">
                </td>
            </tr>
    `
    document.querySelector('#table-display').innerHTML = innerHtml;
}