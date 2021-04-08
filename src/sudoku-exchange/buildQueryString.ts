
const PUZZLE_PARAMETER_NAME = 's';

function assemblePuzzleParam(cells: SudokuCell[]) {
	return cells
		.sort((x, y) => x.index - y.index)
		.map(cell => {
			return cell.value === 'empty'
				? 0
				: cell.value.toString()
		}).join('');
}

export default function buildQueryString(cells: SudokuCell[]): string {
	return `${PUZZLE_PARAMETER_NAME}=${assemblePuzzleParam(cells)}`;
}
