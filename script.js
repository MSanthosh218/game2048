var board;
var score=0;
var rows=4;
var columns=4;
 
window.onload=function(){
    setGame();

}
function setGame(){
    board=[[0,0,0,0],
           [0,0,0,0],
           [0,0,0,0],
           [0,0,0,0] ]
    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){
            let tile= document.createElement("div");
            tile.id=r.toString()+"-"+c.toString();
            let num=board[r][c];
            updateTile(tile,num);
            document.getElementById("board").append(tile);
        }
    }   
    settwo();
    settwo();    
}
function updateTile(tile ,num){
    tile.innerText="";
    tile.classList.value="";
    tile.classList.add("tile");;
    if (num>0){
        tile.innerText = num;
        if (num <= 4096){
            tile.classList.add("x"+num.toString());

        }else{
            tile.classList.add("x4096")
        }
    }
}
document.addEventListener("keyup",(e)=>{
    if (e.code == ("ArrowLeft")){
        slideleft();
        settwo();    

        

    }else if (e.code == ("ArrowRight")){
        slideright();
        settwo();    
  

    }else if (e.code == ("ArrowUp")){
        slideup();
        settwo();    

    }else if (e.code == ("ArrowDown")){
        slidedown();
        settwo();    
   
    }
    document.querySelector(".score").innerText=score



})

function filterZero(row){
    return row.filter(num => num !=0);
}
function slide(row){
    row =filterZero(row);
    for(i=0;i<row.length-1;i++){
        if(row[i] == row[i+1]){
            row[i]*=2;
            row[i+1]=0;
            score+=row[i];
        }
    }
    row=filterZero(row);

    // adding zeroes
    while(row.length < columns){


        row.push(0);

       
    }
    return row;
}

function slideleft(){
    for (let r=0; r<rows; r++){
        let row=board[r];
        row=slide(row); 
        board[r]=row

        for (c=0;c<columns;c++){
            let tile=document.getElementById(r.toString() +"-"+ c.toString());
            let num=board[r][c];
            updateTile(tile ,num);
        }
    }
}


function slideright() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();      // Reverse the row to slide to the right
        row = slide(row);
        row.reverse();      // Reverse it back to original order
        board[r] = row;

        // Update the board visually
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}


function slideup(){
    for (c=0;c<columns;c++){
        row=[board[0][c],board[1][c],board[2][c],board[3][c]];
        row=slide(row);
        board[0][c]=row[0]
        board[1][c]=row[1]
        board[2][c]=row[2]
        board[3][c]=row[3]
        for(r=0;r<rows;r++){
            let tile=document.getElementById(r.toString() +"-"+ c.toString());
            let num=board[r][c];
            updateTile(tile ,num);
        }

    }
}



function slidedown(){
    for (c=0;c<columns;c++){
        row=[board[0][c],board[1][c],board[2][c],board[3][c]];
        row.reverse();
        row=slide(row);
        row.reverse();
        board[0][c]=row[0]
        board[1][c]=row[1]
        board[2][c]=row[2]
        board[3][c]=row[3]
        for(r=0;r<rows;r++){
            let tile=document.getElementById(r.toString() +"-"+ c.toString());
            let num=board[r][c];
            updateTile(tile ,num);
        }

    }
}

function notemptybox(){
    for(r=0;r<rows;r++){
        for(c=0;c<columns;c++){
            if (board[r][c] == 0){
                return true
            }

        }
    }
    return false

}

function settwo(){
    if(!notemptybox()){
        return 
        ;
    }

    let found=false;
    while(!found){
        let r=Math.floor(Math.random()*rows);
        let c=Math.floor(Math.random()*columns);

        if (board[r][c] == 0){
            board[r][c] = "2";
            let tile=document.getElementById(r.toString() +"-"+ c.toString());
            tile.innerText="2";
            tile.classList.add("x2");
            found = true;

        }

    }
}





// var board;
// var score=0;
// var rows=4;
// var columns=4;

// window.onload = function(){
//     gamestart();
// }

// function gamestart(){
//     board=[[0,0,0,0],
//            [0,0,0,0],
//            [0,0,0,0],
//            [0,0,0,0]]
//     for (let r=0;r<rows;r++){
//         for (let c=0;c<columns;c++){
//             let tile=document.createElement("div");
//             tile.id=r.toString()+"-"+c.toString();
//             let num= board[r][c]
//             updateTile(tile , num);
//             document.getElementById("board").append(tile);


            

//         }
//     }
// }
// function updateTile(tile,num){
    
//     tile.innerText="";
//     tile.classList.value="";
//     tile.classList.add("tile");
//     if (num > 0){
//         tile.innerText=num

//         if (num <= 4096){

//             tile.classList.add("x"+num.toString())
//         }else{
//             tile.classList.add("x4096")

//         }
//     }
// }
// document.addEventListener("keyup",(e)=>{
//     if (e.code == "ArrowLeft"){
//         slideleft()
//     }
// })



// function filterZero(row){
//     return row.filter(num=>num!=0);
// }

// function slide(row){
//     row=filterZero(row)
//     for(let r=0;r<row.length-1;r++){
//         if(row[r] == row[r+1]){
//             row[r]*=2;
//             row[r+1]=0;
            
//         }
//     }
//     row=filterZero(row)
//     while (row.length < columns) {
//         row.push(0);  
//     }
//     return row
// }

// function slideleft(){
//     for(let r=0; r<rows;r++){
//         let row=board[r]
//         row=slide(row)
//         board[r]=row

//         for (let c=0; c<columns;c++){
//             let tile=document.getElementById(r.toString()+"-"+c.toString());
//             let num=board[r][c];
//             updateTile(tile , num)
//         }
        
//     }
// }