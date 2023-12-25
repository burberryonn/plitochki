import { Grid } from "./grid.js";
import { Title } from "./tile.js";

const gameBoard = document.getElementById("game-cont");

const grid = new Grid(gameBoard);
<<<<<<< HEAD
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
=======
grid.getRandomEmptyCell.linkTitle(new Title(gameBoard));
>>>>>>> 89abffcfee6c858a74650ca6d121f230b007b9ed
