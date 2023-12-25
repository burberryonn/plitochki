import { Grid } from "/grid.js";
import { Title } from "/title.js";

const gameBoard = document.getElementById("game-cont");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTitle(new Title(gameBoard));
