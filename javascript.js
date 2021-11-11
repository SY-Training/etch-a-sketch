const fullGrid = document.querySelector('.fullGrid');

const reset = document.querySelector('#reset');


function MakeRows (rows, cols)
{
    fullGrid.style.setProperty('--grid-rows', rows);
    fullGrid.style.setProperty('--grid-cols', cols);
    n = 0;
    for (i = 0; i < (rows * cols); i++ )
    {
        let cell = document.createElement('div');
        //cell.innerText = (i + 1);
        fullGrid.appendChild(cell).className = "grid-item" + n;
        n++;
    }
}

MakeRows(16, 16);

document.querySelector('body').addEventListener('mouseover', function (e)
{
    if (e.target.className.includes("grid-item"))
    {
        console.log(e.target.className);
        e.target.style.background = 'blue';
    }
}) // Add optional
    // Colour randomly changes on each sqaure
    // Takes 10 sqaures to completely fill to colour. 
    // Add buttons to disable these 

reset.addEventListener('click', resetGame);

function resetGame() 
{
    let input1 = prompt("Select your grid size. Must be between 10-100.\n\nHeight: ");
    let input2 = prompt("Width: ");   

    let grid1 = Number(input1);
    let grid2 = Number(input2);

    grid1 = Math.round(grid1);
    grid2 = Math.round(grid2);

    if (grid1 >= 10 && grid1 <= 100 && grid2 >= 10 && grid2 <= 100)
    {
        let nodes = fullGrid.childNodes;

        while (fullGrid.firstChild)
        {
            fullGrid.removeChild(fullGrid.firstChild);
        }
        
        MakeRows(grid1, grid2);        
    }

    else if (grid1 < 10 || grid2 < 10)
    {
        alert("Your choise was too low. It must be more than 10.")
    }

    else
    {
        alert("Your choice was too high. It must be less than 100.")
    }


}