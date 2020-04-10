import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

export default function BookList() {
    const books = [
        'CODE (하드웨어와 소프트웨어에 숨어 있는 언어)',
        '혼자 공부하는 파이썬 (파이썬 최신 버전 반영)',
        '유튜브 영상 편집을 위한 프리미어 프로 (10만 구독자가 선택한 조블리의 영상 편집 강의)',
        '시나공 총정리 컴퓨터활용능력 2급 필기 (핵심요약+기출문제+모의고사+암기프로그램+기출CBT+동영상강의,2020)',
        '두근두근 파이썬 (쉽고! 재밌고! 흥미로운 코딩 맛!)',
        '쉽게 풀어쓴 C언어 Express (Visual Studio 2017)',
        '2020 해커스 전산회계 1급 이론+실기+기출문제 (동영상강의 83강 무료, 2020, 한국세무사회자격시험 대비)',
        'Do it! 점프 투 파이썬',
        '리팩토링 (코드 구조를 체계적으로 개선하여 효율적인 리팩터링 구현하기, 2판)'
    ]
    return (
    <List component="nav" aria-label="main mailbox folders">
    {books.map(item => (
        <ListItem button>
            <ListItemText primary={item}/>
        </ListItem>
    ))}
        
    </List>
    )
}
