import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService  {
    constructor(private http: Http ) { }
    private numberGrid : String[][];
    private fiftyDigitNumbers : number[];

    public preFetchData() : void {
        this.fetchNumberGrid()
        .subscribe(
            data => this.numberGrid = data,
            error => console.log(error)
        );

        this.fetchFiftyDigitNumbers() 
        .subscribe(
            data => this.fiftyDigitNumbers = data,
            error => console.log(error)
        )
    }

    public getNumberGrid(): String[][] {
        return this.numberGrid;
    }

    public getFiftyDigitNumbers(): number[] {
        return this.fiftyDigitNumbers;
    }

    private fetchFiftyDigitNumbers() : Observable<number[]> {
        return this.http.get('app/data/fiftyDigitNumbers.json')
            .map(this.extractNumbers)
            .catch(this.handleError);
    }


    private fetchNumberGrid() : Observable<String[][]> {
        return this.http.get('app/data/numberGrid.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractNumbers(res: Response) {
        let body = res.json();
        return body.numbers;
    }
    
    private extractData(res: Response) {
        let body = res.json();
        return body.grid || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}