import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../Models/category.model';
import { AddCategoryRequest } from '../../Models/add-category-request.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../../Models/update-category-request.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,
    private cookieService: CookieService) { }

  addCategory(model:AddCategoryRequest): Observable<void>{
      return this.http.post<void>(`${environment.apiBaseUrl}/api/categories?addAuth=true`, model);
  }

  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }
  getCategorybyId(id: string): Observable<Category>{
     return this.http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
  updateCategory(id:string, updateCategoryRequest: UpdateCategoryRequest): Observable<Category>{
     return this.http.put<Category>(`${environment.apiBaseUrl}/api/Categories/${id}?addAuth=true`, updateCategoryRequest);
  }
  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}?addAuth=true`)
  }
}
