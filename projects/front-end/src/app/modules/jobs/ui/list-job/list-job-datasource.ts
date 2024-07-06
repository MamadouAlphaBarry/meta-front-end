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
  { id: 1, name: 'Développement Software Interne', code: "23ERFG345G", businessUnit: "ICT", client: "CWS s.r.l", type: "Activité Interne" },
  { id: 2, name: 'Gestion des Ressources Humaines', code: "12ABCDE678", businessUnit: "RH", client: "HR Consulting Ltd", type: "Service Client" },
  { id: 3, name: 'Marketing Digital', code: "78XYZ9876", businessUnit: "Marketing", client: "Tech Solutions Inc.", type: "Projet Externe" },
  { id: 4, name: 'Support Technique', code: "45PQRS321", businessUnit: "Support", client: "HelpDesk Ltd", type: "Service Client" },
  { id: 5, name: 'Développement Web', code: "56LMNO234", businessUnit: "ICT", client: "Web Services LLC", type: "Projet Externe" },
  { id: 6, name: 'Formation en Entreprise', code: "89UVWX567", businessUnit: "Formation", client: "EduTech Solutions", type: "Activité Interne" },
  { id: 7, name: 'Consultation Financière', code: "34ABCD567", businessUnit: "Finance", client: "Financial Services Ltd", type: "Service Client" },
  { id: 8, name: 'Analyse de Données', code: "90EFGH123", businessUnit: "Data", client: "Data Insights Corp", type: "Projet Externe" },
  { id: 9, name: 'Audit de Sécurité', code: "67IJKL789", businessUnit: "Sécurité", client: "Secure Systems Ltd", type: "Service Client" },
  { id: 10, name: 'Support Technique Avancé', code: "21MNOP456", businessUnit: "Support", client: "HelpDesk Ltd", type: "Service Client" },
  { id: 11, name: 'Développement Mobile', code: "78QRST234", businessUnit: "ICT", client: "Mobile Solutions Inc.", type: "Projet Externe" },
  { id: 12, name: 'Gestion de Projet', code: "56UVWX789", businessUnit: "Gestion", client: "Project Management Ltd", type: "Activité Interne" },
  { id: 13, name: 'Consultation en Marketing', code: "43YZAB789", businessUnit: "Marketing", client: "Tech Solutions Inc.", type: "Service Client" },
  { id: 14, name: 'Développement Logiciel Personnalisé', code: "12CDEF567", businessUnit: "ICT", client: "Custom Software Ltd", type: "Projet Externe" },
  { id: 15, name: 'Formation en Gestion des Projets', code: "98GHIJ234", businessUnit: "Formation", client: "EduTech Solutions", type: "Activité Interne" },
  { id: 16, name: 'Analyse Financière', code: "65KLMN789", businessUnit: "Finance", client: "Financial Services Ltd", type: "Service Client" },
  { id: 17, name: "Développement d'Applications Web", code: "32OPQR567", businessUnit: "ICT", client: "Web Services LLC", type: "Projet Externe" },
  { id: 18, name: 'Support Clientèle 24/7', code: "45STUV123", businessUnit: "Support", client: "HelpDesk Ltd", type: "Service Client" },
  { id: 19, name: 'Optimisation des Processus Internes', code: "76WXYZ789", businessUnit: "Operations", client: "Business Solutions Inc.", type: "Activité Interne" },
  { id: 20, name: 'Conseil en Sécurité Informatique', code: "23ABCDE456", businessUnit: "Sécurité", client: "Secure Systems Ltd", type: "Service Client" }

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
