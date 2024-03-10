import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mock-members-data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit {

  constructor(
    private router: Router,
    private memberService: MemberService
  ) {}

  members: Member[] | undefined;
  selectedMember: Member | undefined;


  /**
   * 初期表示処理
   */
  ngOnInit() {
    this.getMembers();
  }

  /**
   * 社員リストデータ取得処理
   */
  getMembers() {
    this.memberService.getMembers().subscribe(members => this.members = members)
  }

  /**
   * 詳細ページへの遷移
   * @param member
   */
  onSelectEmp(member:Member) {
    this.selectedMember = member;
    this.router.navigateByUrl('detail/' + member.id)

  }
}
