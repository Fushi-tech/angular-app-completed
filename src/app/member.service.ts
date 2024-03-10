import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 社員リストデータを取得する
   */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
  }

  /**
   * 社員の個別データを取得する
   */
  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url)
  }

  /**
   * 詳細データを更新する
   */
  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, this.httpOptions)
  }
}
