import puppeteer from 'puppeteer';
import { URL } from 'url';

import NYTDifficulty from './NYTDifficulty';
import getCells from './getCells';

const URL_NYT_SUDOKU_HARD = 'https://www.nytimes.com';
const PATH_NYT_SUDOKU = 'puzzles/sudoku'

function buildUrl(difficulty: NYTDifficulty): string {

	const sudokuUrl = new URL(URL_NYT_SUDOKU_HARD);
	sudokuUrl.pathname = `${PATH_NYT_SUDOKU}/${NYTDifficulty[difficulty]}`;

	return sudokuUrl.toString();
}

export default async function getSudoku(difficulty: NYTDifficulty) {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(buildUrl(difficulty));

	const cells = await getCells(page);

	await browser.close();

	return cells;
}