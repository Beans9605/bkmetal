import React from "react";

import { SvgIconProps, SvgIconTypeMap } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ArticleIcon from "@mui/icons-material/Article";
import TvIcon from "@mui/icons-material/Tv";
import GroupIcon from "@mui/icons-material/Group";
import BadgeIcon from "@mui/icons-material/Badge";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type MainSidebarElement = {
  nodeId: string;
  labelText: string;
  labelIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  labelInfo?: string;
  innerElement?: InnerSidebarElement[];
};

export type InnerSidebarElement = {
  targetNodeId: string;
  labelText: string;
  labelIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  link?: string;
};

const StatElements: InnerSidebarElement[] = [
  {
    targetNodeId: "1",
    labelText: "집계요약",
    link: "/stats/summary",
  },
  {
    targetNodeId: "1",
    labelText: "판매내역 조회",
    link: "/stats/sale/search",
  },
  {
    targetNodeId: "1",
    labelText: "지점별 매출",
    link: "/stats/sale/stats",
  },
  {
    targetNodeId: "1",
    labelText: "결제수단별 매출",
    link: "/stats/sale/payment/variety",
  },
  {
    targetNodeId: "1",
    labelText: "분류/메뉴별 매출",
    link: "/stats/sale/classification/menu",
  },
  {
    targetNodeId: "1",
    labelText: "시간대별 매출",
    link: "/stats/sale/time",
  },
  {
    targetNodeId: "1",
    labelText: "일자별 매출",
    link: "/stats/sale/day",
  },
  {
    targetNodeId: "1",
    labelText: "요일별 매출",
    link: "/stats/sale/day",
  },
  {
    targetNodeId: "1",
    labelText: "월별 매출",
    link: "/stats/sale/month",
  },
  {
    targetNodeId: "1",
    labelText: "매출 캘린더",
    link: "/stats/sale/calander",
  },
  {
    targetNodeId: "1",
    labelText: "외상내역조회",
    link: "/stats/credit/search",
  },
  {
    targetNodeId: "1",
    labelText: "승인내역조회",
    link: "/stats/appr/search",
  },
  {
    targetNodeId: "1",
    labelText: "취소내역조회",
    link: "/stats/canc/search",
  },
  {
    targetNodeId: "1",
    labelText: "테이블별 매출",
    link: "/stats/table/sale",
  },
  {
    targetNodeId: "1",
    labelText: "실시간매장현황",
    link: "/stats/realtime",
  },
  {
    targetNodeId: "1",
    labelText: "판매내역(큐패스)",
    link: "/stats/sales",
  },
];

const InitManagementElements: InnerSidebarElement[] = [
  {
    targetNodeId: "3",
    labelText: "분류/메뉴 관리",
    link: "/manage/classification/menu",
  },
  {
    targetNodeId: "3",
    labelText: "옵션관리",
    link: "/manage/option",
  },
  {
    targetNodeId: "3",
    labelText: "메뉴판 관리",
    link: "/manage/menuboard",
  },
  {
    targetNodeId: "3",
    labelText: "비고사항 관리",
    link: "/manage/otherboard",
  },
  {
    targetNodeId: "3",
    labelText: "지출계정 관리",
    link: "/manage/expending/account",
  },
];

export const MainSidebarElements: MainSidebarElement[] = [
  {
    nodeId: "1",
    labelText: "통계 관리",
    labelIcon: TrendingUpIcon,
    innerElement: StatElements,
  },
  {
    nodeId: "2",
    labelText: "발주/재고 관리",
    labelIcon: AddIcCallIcon,
  },
  {
    nodeId: "3",
    labelText: "기초 관리",
    labelIcon: ArticleIcon,
    innerElement: InitManagementElements,
  },
  {
    nodeId: "4",
    labelText: "키오스크 관리",
    labelIcon: TvIcon,
  },
  {
    nodeId: "5",
    labelText: "고객 관리",
    labelIcon: GroupIcon,
  },
  {
    nodeId: "6",
    labelText: "직원 관리",
    labelIcon: BadgeIcon,
  },
  {
    nodeId: "7",
    labelText: "포스환경설정",
    labelIcon: SettingsIcon,
  },
  {
    nodeId: "8",
    labelText: "가맹점 환경설정",
    labelIcon: ManageAccountsIcon,
  },
  {
    nodeId: "9",
    labelText: "배달연동관리",
    labelIcon: DeliveryDiningIcon,
  },
];
