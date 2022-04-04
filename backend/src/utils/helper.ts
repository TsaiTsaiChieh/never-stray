import {Page} from 'puppeteer'

/**
 * Deep copy
 *
 * @param  {any} data
 * @return  {any} data
 */
export function deepCopy(data: any): any {
  return JSON.parse(JSON.stringify(data))
}

/**
 * Get single HTML element value
 *
 * @param  {Page} page the page from puppeteer
 * @param  {string} eleName element name
 * @return {Promise<string | null>}
 */
export async function getElementValue(
  page: Page,
  eleName: string,
): Promise<string | null> {
  return await page.$eval(eleName, (el) => el.textContent)
}

/**
 * Get all HTML element values
 *
 * @param  {Page} page the page from puppeteer
 * @param  {string} eleName element name
 * @return {Promise<(string | null)[]>}
 */
export async function getElementsValues(page: Page,
  eleName: string): Promise<(string | null)[]> {
  return await page.$$eval(eleName, (els) => els.map((el) => el.textContent))
}

/**
 * Get single HTML href value
 *
 * @param  {Page} page the page from puppeteer
 * @param  {string} eleName element name
 * @return {Promise<string | null>}
 */
export async function getLink(
  page: Page,
  eleName: string,
): Promise<string | null> {
  return await page.$eval(eleName, (ele) => ele.getAttribute('href'))
}

/**
 * Get all HTML href values
 *
 * @param  {Page} page the page from puppeteer
 * @param  {string} eleName element name
 * @return {Promise<(string | null)[]> }
 */
export async function getLinks(
  page: Page,
  eleName: string,
): Promise<(string | null)[]> {
  return await page.$$eval(eleName, (els) =>
    els.map((el) => el.getAttribute('href')),
  )
}

/**
 * Get all image src values
 *
 * @param  {Page} page the page from puppeteer
 * @param  {string} eleName element name
 * @return {Promise<(string | null)[]> }
 */
export async function getSources(
  page: Page,
  eleName: string,
): Promise<(string | null)[]> {
  return await page.$$eval(eleName, (els) =>
    els.map((el) => el.getAttribute('src')),
  )
}
