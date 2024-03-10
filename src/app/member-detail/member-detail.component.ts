import { Component, OnInit } from '@angular/core';
import { MEMBERS } from '../mock-members-data';
import { Member } from '../member';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  members = MEMBERS;
  memberDetail: Member[] | undefined;
  selectedMember: Member | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService
  ){}

  /**
   * 初期表示処理
   */
  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.memberService.getMember(id).subscribe(member => this.selectedMember = member);
  }

  /**
   * 保存処理
   */
  onSave(){
    this.memberService.updateMember(this.selectedMember!).subscribe(() => this.goBack());
  }

  /**
   * 一覧画面に戻る処理
   */
  goBack() {
    this.router.navigateByUrl('');
  }

}
