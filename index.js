import { Grid } from "/grid.js";
import { Title } from "/title.js";

const gameBoard = document.getElementById("game-cont");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTitle(new Title(gameBoard));
grid.getRandomEmptyCell().linkTitle(new Title(gameBoard));
setupInputOnce()


function setupInputOnce(){
    window.addEventListener('keydown', handleInput, {once: true})
}

async function handleInput(event){
    switch (event.key) {
        case 'ArrowUp':
            if(!canMoveUp()){
                setupInputOnce()
                return;
            }
            await moveUp()
        break;
        case 'ArrowDown':
            if(!canMoveDown()){
                setupInputOnce()
                return;
            }
            await moveDown()
        break;
        case 'ArrowLeft':
            if(!canMoveLeft()){
                setupInputOnce()
                return;
            }
            await moveLeft()
        break;
        case 'ArrowRight':
            if(!canMoveRight()){
                setupInputOnce()
                return;
            }
            await moveRight()
        break;
    
        default:
            setupInputOnce()
            return;
    }

    const newTitle = new Title(gameBoard)
    grid.getRandomEmptyCell().linkTitle(newTitle)

    if(!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()){
        await newTitle.waitForAnimationEnd()
        alert('try again')
        return;
    }

    setupInputOnce()
}

async function moveUp(){
    await slideTiles(grid.cellsGroupedByColumn)
}

async function moveDown(){
    await slideTiles(grid.cellsGroupedByReverseColumn)
}

async function moveLeft(){
    await slideTiles(grid.cellsGroupedByRow)
}

async function moveRight(){
    await slideTiles(grid.cellsGroupedByReverseRow)
}

async function slideTiles(groupedCells){
    const promises = [];
    groupedCells.forEach(group => slideTilesInGroup(group, promises))

    await Promise.all(promises)

    grid.cell.forEach(cell => {
        cell.hasTitleForMerge() && cell.mergeTitles()
    })
}

function slideTilesInGroup(group, promises){
    for (let i = 1; i < group.length; i++) {
        if(group[i].isEmpty())continue;

        const cellWithTitle = group[i]

        let targetCell;
        let j = i-1
        while(j>=0 && group[j].canAccept(cellWithTitle.linkedTitle)){
            targetCell = group[j]
            j--
        }
        if(!targetCell)continue;

        promises.push(cellWithTitle.linkedTitle.waitForTransitionEnd())

        if(targetCell.isEmpty()){
            targetCell.linkTitle(cellWithTitle.linkedTitle)
        }else{
            targetCell.linkTitleForMerge(cellWithTitle.linkedTitle)
        }
        cellWithTitle.unLinkTitle()
    }
}

function canMoveUp(){
    return canMove(grid.cellsGroupedByColumn)
}

function canMoveDown(){
    return canMove(grid.cellsGroupedByReverseColumn)
}

function canMoveLeft(){
    return canMove(grid.cellsGroupedByRow)
}

function canMoveRight(){
    return canMove(grid.cellsGroupedByReverseRow)
}

function canMove(groupedCells){
    return groupedCells.some(group => canMoveInGroup(group))
}

function canMoveInGroup(group){
    return group.some((cell, index) => {
        if(index === 0) return false;
        if(cell.isEmpty()) return false;

        const targetCell = group[index-1];
        return targetCell.canAccept(cell.linkedTitle)
    })
}