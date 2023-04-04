import { Observable, catchError, of, tap } from 'rxjs';
import { ToastService } from '../services/toast.service';

export function handleError<T>(
  toast: ToastService,
  operation = 'operation',
  result?: any
) {
  return (caught: Observable<any>): Observable<any> => {
    return caught.pipe(
      tap(() => console.error),
      catchError((error) => {
        toast.showError(`${operation} failed: ${error.message}`);
        return of(result);
      })
    );
  };
}
