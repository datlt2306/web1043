document.addEventListener("DOMContentLoaded", function () {
    const studentList = [
        { id: 1, name: "Le Trong Dat", age: 1988 },
        { id: 2, name: "Nguyen Van A", age: 1990 },
        { id: 3, name: "Nguyen Van B", age: 1991 }, // student
    ];

    const table = document.querySelector("#students");
    console.log(table);

    // let result = "";
    // for
    // for (let i = 0; i < studentList.length; i++) {
    //     result += `<tr>
    //         <td>${studentList[i].id}</td>
    //         <td>${studentList[i].name}</td>
    //         <td>${studentList[i].age}</td>
    //     </tr>`;
    // }

    // for of

    // for (let student of studentList) {
    //     result += `<tr>
    //                     <td>${student.id}</td>
    //                     <td>${student.name}</td>
    //                     <td>${student.age}</td>
    //                 </tr>`;
    // }

    // forEarch
    // studentList.forEach((student, index) => {
    //     result += `<tr>
    //                     <td>${student.id}</td>
    //                     <td>${student.name}</td>
    //                     <td>${student.age}</td>
    //                 </tr>`;
    // });

    // map

    const result = studentList
        .map((student, index) => {
            return `<tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                        <td><button onclick="removeItem(student.id)">Remove</button></td>
                    </tr>`;
        })
        .join(" ");

    const removeItem = (id) => {
        console.log(id);
    };
    console.log("student", studentList);
    console.log(result);

    table.innerHTML = result;
});
