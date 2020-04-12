const initialState = {
    books: [
    {
    title: 'CODE', subtitle: '하드웨어와 소프트웨어에 숨어 있는 언어',
    img: 'http://image.kyobobook.co.kr/images/book/xlarge/253/x9788966261253.jpg',
    likes: 0
    },
    {
    title: '혼자 공부하는 파이썬',
    subtitle: '파이썬 최신 버전 반영',
    img: 'http://image.kyobobook.co.kr/images/book/xlarge/882/x9791162241882.jpg',
    likes: 0
    },
    {
    title: '유튜브 영상 편집을 위한 프리미어 프로',
    subtitle: '10만 구독자가 선택한 조블리의 영상 편집 강의',
    likes: 0
    },
    {
    title: '시나공 총정리 컴퓨터활용능력 2급 필기',
    subtitle: '핵심요약+기출문제+모의고사+암기프로그램+기출CBT+동영상강의,2020',
    likes: 0
    },
    {
    title: '두근두근 파이썬',
    subtitle: '쉽고! 재밌고! 흥미로운 코딩 맛!',
    likes: 0
    },
    {
    title: '쉽게 풀어쓴 C언어 Express',
    subtitle: 'Visual Studio 2017',
    likes: 0
    },
    {
    title: '2020 해커스 전산회계 1급 이론+실기+기출문제',
    subtitle: '동영상강의 83강 무료, 2020, 한국세무사회자격시험 대비',
    likes: 0
    },
    {
    title: 'Do it! 점프 투 파이썬',
    subtitle: '',
    likes: 0
    }
],
seleted: undefined
};
// initialState.selected = initialState.books[0];

function reducer(state = initialState, action) {
    console.log("ACTION=",action);
    switch(action.type) {

        case 'BOOK_SELECT':
            return {
                books: state.books,
                selected: action.payload
            }
        case 'BOOK_LIKE':
            const newBooks = state.books.map((book) => {
                if(book.title === action.title) {
                    book.likes += 1;
                }
                return book;
            })
            return {
                books: newBooks,
                selected: state.selected
            }
        default:
            return state;
    }
}


export default reducer;