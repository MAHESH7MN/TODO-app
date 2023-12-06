let myform=document.querySelector('form');
let inp1=document.getElementById('task');
let inp2=document.getElementById('priority')
let tbody=document.querySelector('tbody');

let alltask=[]

myform.addEventListener('submit',function(e){
    e.preventDefault()
    let data={}
    data.task=inp1.value;
    data.priority=inp2.value;

    alltask.push(data)
    tbody.innerHTML=""
    alltask.map((e)=>{
        let row=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td')

        td1.innerText=e.task;
        td2.innerText=e.priority;
        row.append(td1,td2)
        tbody.append(row)


        if(td2.innerText=="High"){
            td1.style.backgroundColor="red";
            td1.style.color="white"
        }
        if(td2.innerText=="Low"){
            td1.style.backgroundColor="green";
            td1.style.color="white"
        }
    })

})