import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pre_post")
export class PrePost {
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column({
        type: "text",
        comment: "견적 문의 타입",
        default: "비철",
    })
    type: string;
    @Column({
        type: "text",
        comment: "품목",
    })
    item_type: string;
    @Column({
        type: "text",
        comment: "품목 정보",
        nullable: true,
    })
    item_comment: string;
    @Column({
        type: 'int',
        comment: "가격",
    })
    price: number;
}
