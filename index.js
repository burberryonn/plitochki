import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.getElementById('game-cont')

const grid = new Grid(gameBoard)
grid.getRandomEmptyCell.linkTile(new Tile(gameBoard))