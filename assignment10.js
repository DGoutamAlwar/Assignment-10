const table= document.getElementById('table');
const table_head= document.getElementById('table-head');
const table_body=document.getElementById('table-body');
async function enterdata(url,table)
{
    const response= await fetch(url);//fetching the data
    const data=await response.json();//converting into json format
    table_head.innerHTML="<tr></tr>";//adding row to table header

        for (const headerText in data[0])
        {
            const headerElement= document.createElement('th');//a table header is created for each key
            headerElement.textContent=headerText;//the created table header is given the content same as the name of the key
            table_head.appendChild(headerElement);// table header is appended as child to tablehead
        }

        for (const x of data) 
        {
            const newRow= document.createElement('tr');//a row is created for each array object
            for (const key in x)
            {
                console.log(key);
                if(key=='avatar')//if the object element is an img source a new img element is created along with a table data element.
                {
                    const newRowData= document.createElement('td'); 
                    const img= document.createElement('img');
                    img.src=x[key];
                    newRowData.appendChild(img);
                    newRow.appendChild(newRowData);
                }
                else//if the object element is not an image a table data is created and is appended to the new row created for each array object.
                {
                    const newRowData= document.createElement('td'); 
                    newRowData.textContent=x[key] ;
                    newRow.appendChild(newRowData);
                }
             
            }
            table_body.appendChild(newRow);
        }
}



enterdata('https://64350a2c83a30bc9ad567b2a.mockapi.io/assignment010', table);