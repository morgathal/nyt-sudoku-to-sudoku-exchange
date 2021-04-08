import open from 'open';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { default as getNYTSudoku } from './nyt-sudoku/getSudoku';
import NYTDifficulty from './nyt-sudoku/NYTDifficulty';
import { default as getSudokuExchangeUrl } from './sudoku-exchange/getUrl';

interface AppOptions {
	difficulty: string;
}

export default function app(argv: string[]) {

	const options: AppOptions = yargs(hideBin(argv))
		.option('difficulty', {
			alias: 'd',
			default: NYTDifficulty.easy,
			describe: 'Choose the sudoku difficulty to get.',
			type: 'string',
			choices: [
				NYTDifficulty.easy,
				NYTDifficulty.medium,
				NYTDifficulty.hard
			]
		})
		.help()
		.argv;

	getNYTSudoku(options.difficulty as NYTDifficulty)
		.then(sudoku => getSudokuExchangeUrl(sudoku))
		.then(url => open(url))
		.catch(error => console.error(error));
}