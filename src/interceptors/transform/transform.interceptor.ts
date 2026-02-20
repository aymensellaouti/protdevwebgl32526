import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Lehna traitement de la request
    const req = context.switchToHttp().getRequest();
    const start = new Date().getTime();
    console.log({start});
    
    return next.handle().pipe(
      // Lehna traitement de la response
      map(response => ({
        data: response,
        date: new Date().getUTCDate() 
      }))
    );
  }
}
