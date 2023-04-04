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
        if (error.status === 0) {
          toast.showError(`${operation} failed: Server is offline`);
        } else if (error.status >= 400 && error.status < 500) {
          toast.showError(`${operation} failed: ${error.error}`);
        } else {
          toast.showError(`${operation} failed: ${error.message}`);
        }
        return of(result);
      })
    );
  };
}
