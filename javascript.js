const fullGrid = document.querySelector('.fullGrid');

function MakeRows (rows, cols)
{
    fullGrid.style.setProperty('--grid-rows', rows);
    fullGrid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++ )
    {
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        fullGrid.appendChild(cell).className = "grid-item";
    }
}

MakeRows(16, 16);

const gridItem = document.querySelector('.grid-item');
gridItem.addEventListener('mouseover', function (e)
{
    console.log(e);
    e.target.style.background = 'blue';

});

// ADD hover effect to grid sqaures.
// They will change colour when mouse passes over.




// Prompt user for nuber of sqaures
// between 10 and 100.
// Error any other choice. 