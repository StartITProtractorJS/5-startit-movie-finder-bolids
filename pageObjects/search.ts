import { browser, element, By, by, until, $, $$, Key, ExpectedConditions as EC, ElementArrayFinder } from 'protractor'

export class HomePage {
    private searchField = $('input[name="searchStr"]')
    private foundMovies = $$('movies > div > div.row.is-flex movie-card')
    async searchFor(search_request: string | number) {
        await this.searchField.sendKeys(search_request, Key.ENTER);
    }
    async open() {
          await browser.get("/");
    }
    async getFoundMovies(): Promise<any> {
       // await browser.sleep(3000)
        await browser.wait(EC.visibilityOf(this.foundMovies.first()), 5000, 'Movies not loaded!')
        return this.foundMovies
    }

    async getFoundMoviesTitles() {
       return (await this.getFoundMovies()).$$('a[title]').first().getAttribute('title')
    }
}