import puppeteer, {Browser, Page} from 'puppeteer'

import {PetRepository} from '../repository/pet.repository'
import {AppError} from '../utils/app-error'
import {getElementValue, getLinks} from '../utils/helper'

/** @class MeetPetJob */
class MeetPetJob {
  public url: string = process.env.MEET_PET!
  public kind: PetKindType
  protected repository: PetRepository
  protected browser: Browser
  protected page: Page

  /**
   * @constructor
   *
   * @param  {PetKindType} kind
   */
  constructor(kind: PetKindType) {
    this.kind = kind
    // this.repository = new PetRepository()
  }

  /** Builder */
  async builder(): Promise<void> {
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
  }

  /** Destructor */
  destructor(): void {
    this.browser.close()
  }

  /**
   * 蒐集所有寵物詳細資料的網址
   *
   * @return {Promise<string[]>}
   */
  async getPetLinks(): Promise<string[]> {
    const links: string[] = []
    const url = `${this.url}/pets/${this.kind}`
    try {
      await this.page.goto(url)
      const lastPage = await getElementValue(this.page, '.pager-last')

      // Switch page to get links
      for (let i = 0; i < Number(lastPage); i++) {
        await this.page.goto(`${url}?page=${i}`)
        const linkByPage = await (
          getLinks(this.page, '.view-data-node-title > a')
        ) as string[]
        links.push(...linkByPage)
      }
      return Promise.resolve(links)
    } catch (error) {
      return Promise.reject(new AppError(error))
    }
  }
}

/**
 * Get meet pet data (main function)
 *
 * @return {Promise<void>}
 */
export async function getMeetPetData(): Promise<void> {
  const meetPetJob = new MeetPetJob('cat')

  try {
    await meetPetJob.builder()
    await meetPetJob.getPetLinks()
  } catch (error) {
    meetPetJob.destructor()
    throw error
  }
}
