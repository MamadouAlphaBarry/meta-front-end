import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListJobItem {
  name: string;
  id: number;
  code: string;
  businessUnit: string;
  client: string;
  type: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListJobItem[] = [
  {id: 1, name: 'Hydrogen',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 2, name: 'Helium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 3, name: 'Lithium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 4, name: 'Beryllium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 5, name: 'Boron',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 6, name: 'Carbon',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 7, name: 'Nitrogen',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 8, name: 'Oxygen',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 9, name: 'Fluorine',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 10, name: 'Neon',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 11, name: 'Sodium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 12, name: 'Magnesium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 13, name: 'Aluminum',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 14, name: 'Silicon',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 15, name: 'Phosphorus',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 16, name: 'Sulfur',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 17, name: 'Chlorine',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 18, name: 'Argon',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 19, name: 'Potassium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
  {id: 20, name: 'Calcium',code:"AXSEE",businessUnit:"BUNAME",client:"CWS s.r.l",type:"typo"},
];

/**
 * Data source for the ListJob view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListJobDataSource extends DataSource<ListJobItem> {
  data: ListJobItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListJobItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListJobItem[]): ListJobItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListJobItem[]): ListJobItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
