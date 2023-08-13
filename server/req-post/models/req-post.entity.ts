import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('req_post')
export class ReqPost {
    @PrimaryGeneratedColumn()
    readonly id?: number;
    @Column({
        type: 'text',
        comment: '업체명'
    })
    company_name: string;
    @Column({
        type: 'text',
        comment: '담당자(직급)'
    })
    customer_info: string;
    @Column({
        type: 'text',
        comment: 'H.P',
    })
    phone_tel: string;
    @Column({
        type: 'text',
        comment: 'tel',
        nullable: true
    })
    tel?: string;
    @Column({
        type: 'text',
        comment: 'fax',
        nullable: true
    })
    fax?: string;
    @Column({
        type: 'text',
        comment: 'email',
        nullable: true
    })
    email?: string;
    @Column({
        type: 'text',
        comment: '견적문의'
    })
    content: string;
    @CreateDateColumn()
    create_at?: Date;
    @UpdateDateColumn()
    update_at?: Date;
}