/*
Question 1
1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)
2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let mytable = document.createElement("table");
mytable.id = "table";
let thead = document.createElement("thead");
mytable.appendChild(thead);
let tr = document.createElement("tr");
thead.appendChild(tr);
let nodes = tableInfo.tableHeader.map((ele) => {
  let th = document.createElement("th");
  th.textContent = ele;
  return th;
});
tr.append(...nodes);
let tbody = document.createElement("tbody");
nodes = tableInfo.tableContent.map((ele) => {
  let tr = document.createElement("tr");
  let res = [];
  for (let i in ele) {
    let td = document.createElement("td");
    td.textContent = ele[i];
    res.push(td);
  }
  tr.append(...res);
  return tr;
});
tbody.append(...nodes);
mytable.append(tbody);
document.body.appendChild(mytable);

// add new row function
let addnew = document.createElement("tr");
addnew.id = "add";
const createtd = (addnew, text, id) => {
  let td = document.createElement("td");
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = text;
  input.id = id;
  td.appendChild(input);
  addnew.appendChild(td);
};
createtd(addnew, "Name:", "name");
createtd(addnew, "Age:", "age");
createtd(addnew, "Phone:", "phone");
createtd(addnew, "Address:", "address");

let mybtn = document.createElement("button");
mybtn.textContent = "ADD";
mybtn.type = "submit";
mybtn.onclick = function () {
  let res = [
    document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("phone").value,
    document.getElementById("address").value,
  ];
  console.log(res);
  if (res.some((ele) => ele == "")) {
    alert("Wrong input");
    return;
  }
  let tr = document.createElement("tr");
  let nodes = res.map((ele) => {
    let td = document.createElement("td");
    td.textContent = ele;
    return td;
  });
  tr.append(...nodes);
  tbody.appendChild(tr);
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
};
addnew.appendChild(mybtn);
mytable.appendChild(addnew);
document.getElementById("age").type = "number";

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let ol = document.createElement("ol");
let nodesol = list.map((ele) => {
  let li = document.createElement("li");
  li.textContent = ele;
  return li;
});
let nodesul = list.map((ele) => {
  let li = document.createElement("li");
  li.textContent = ele;
  return li;
});
ol.append(...nodesol);
let ul = document.createElement("ul");
ul.append(...nodesul);
document.body.appendChild(ol);
document.body.appendChild(ul);

/*
  Question 3
  1. Given the array and implement a dropdown list with the following options dynamically 
  2. Console the value, when the user select one option
  */

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.createElement("select");
nodes = dropDownList.map((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.textContent = ele.content;
  return option;
});
select.append(...nodes);
select.onchange = function () {
  console.log(this.value);
};
document.body.append(select);
