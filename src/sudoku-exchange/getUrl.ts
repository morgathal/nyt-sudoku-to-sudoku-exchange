import buildQueryString from './buildQueryString';

const URL_SUDOKU_EXCHANGE_PLAY = 'https://sudokuexchange.com/play';

export default function getUrl(cells: SudokuCell[]) {

	const sudokuExchangeUrl = new URL(URL_SUDOKU_EXCHANGE_PLAY);
	sudokuExchangeUrl.search = buildQueryString(cells);

	return sudokuExchangeUrl.toString();
}