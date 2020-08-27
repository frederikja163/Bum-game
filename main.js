window.onload = () => createField(10, 10);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createField(width, height)
{
    let table = document.querySelector("table");
    removeAllChildNodes(table);
    let tBody = table.createTBody();
    for (let y = 0; y < height; y++)
    {
        let row = tBody.insertRow(y);
        for (let x = 0; x < width; x++)
        {
            row.insertCell(x);
            let cell = row.cells[x];

            cell.style.cursor = "pointer";
            cell.onclick = e => {
                if (cell.classList == "enabled")
                {
                    cell.classList = "disabled";
                }
                else
                {
                    cell.classList = "enabled";
                }
            };
        }
    }
}

function generate()
{
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;
    createField(width, height);
}