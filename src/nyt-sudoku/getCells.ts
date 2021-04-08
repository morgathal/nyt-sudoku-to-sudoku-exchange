import { Page } from 'puppeteer';

export default async function getCells(page: Page): Promise<SudokuCell[]> {

	return await page.evaluate(() => {

		const cells = document.querySelectorAll('.su-board > .su-cell');

		const result: SudokuCell[] = [];

		for (let i = 0; i < cells.length; i++) {

			const cell = cells[i];

			const index = cell.getAttribute('data-cell') as string;
			const value = cell.getAttribute('aria-label') || 'empty';

			result.push({
				index: parseInt(index, 0),
				value: value === 'empty'
					? value
					: parseInt(value, 0)
			});
		}

		return result;
	});
}